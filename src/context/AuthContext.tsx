import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import axios from "axios";
import api from "../lib/api";

export interface AuthUser {
  id: number;
  email: string;
  name: string;
  fullname?: string | null;
  username?: string | null;
  is_mfa_active?: boolean;
  google_id?: string | null;
  created_at?: string;
  updated_at?: string;
  last_login?: string | null;
}

export interface LoginPayload {
  email: string;
  password: string;
  rememberDevice?: boolean;
}

export interface RegisterPayload {
  fullname: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface AuthValidationErrors {
  [key: string]: string[] | undefined;
}

export interface PendingTwoFactorChallenge {
  userId: number;
  rememberDevice: boolean;
  message: string;
}

export type LoginResult =
  | {
      requiresTwoFactor: false;
      user: AuthUser;
    }
  | {
      requiresTwoFactor: true;
      challenge: PendingTwoFactorChallenge;
    };

interface AuthContextValue {
  user: AuthUser | null;
  isAuthenticated: boolean;
  isBootstrappingAuth: boolean;
  pendingTwoFactor: PendingTwoFactorChallenge | null;
  login: (payload: LoginPayload) => Promise<LoginResult>;
  register: (payload: RegisterPayload) => Promise<AuthUser>;
  logout: () => Promise<void>;
  refreshUser: () => Promise<AuthUser | null>;
  clearPendingTwoFactor: () => void;
}

interface BackendEnvelope<T> {
  success: boolean;
  message?: string;
  user?: T;
  errors?: AuthValidationErrors;
  mfaRequired?: boolean;
  userId?: number;
  username?: string;
  isMfaActive?: boolean;
}

interface BackendUser {
  id: number;
  email: string;
  fullname?: string | null;
  username?: string | null;
  is_mfa_active?: boolean;
  google_id?: string | null;
  created_at?: string;
  updated_at?: string;
  last_login?: string | null;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

function isAxiosErrorWithResponse(error: unknown): error is {
  response: {
    status: number;
    data?: BackendEnvelope<BackendUser>;
  };
} {
  return axios.isAxiosError(error) && Boolean(error.response);
}

function normalizeUser(user: BackendUser): AuthUser {
  return {
    ...user,
    name: user.fullname?.trim() || user.username?.trim() || user.email,
  };
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isBootstrappingAuth, setIsBootstrappingAuth] = useState(true);
  const [pendingTwoFactor, setPendingTwoFactor] =
    useState<PendingTwoFactorChallenge | null>(null);

  async function refreshUser() {
    try {
      const response = await api.get<BackendEnvelope<BackendUser>>("/api/auth/me");
      const backendUser = response.data.user;

      if (!backendUser) {
        setUser(null);
        return null;
      }

      const normalizedUser = normalizeUser(backendUser);
      setUser(normalizedUser);
      return normalizedUser;
    } catch (error) {
      if (isAxiosErrorWithResponse(error) && error.response.status === 401) {
        setUser(null);
        return null;
      }

      throw error;
    }
  }

  async function login(payload: LoginPayload): Promise<LoginResult> {
    const response = await api.post<BackendEnvelope<BackendUser>>(
      "/api/auth/login",
      {
        email: payload.email,
        password: payload.password,
        rememberDevice: payload.rememberDevice ?? false,
      },
    );

    if (response.data.mfaRequired && response.data.userId) {
      const challenge = {
        userId: response.data.userId,
        rememberDevice: payload.rememberDevice ?? false,
        message: response.data.message ?? "MFA required",
      };

      setPendingTwoFactor(challenge);
      setUser(null);

      return {
        requiresTwoFactor: true,
        challenge,
      };
    }

    const authenticatedUser = await refreshUser();

    if (!authenticatedUser) {
      throw new Error("Login succeeded but no authenticated user was returned.");
    }

    setPendingTwoFactor(null);

    return {
      requiresTwoFactor: false,
      user: authenticatedUser,
    };
  }

  async function register(payload: RegisterPayload) {
    const response = await api.post<BackendEnvelope<BackendUser>>(
      "/api/auth/register",
      payload,
    );

    if (response.data.user) {
      const normalizedUser = normalizeUser(response.data.user);
      setUser(normalizedUser);
      setPendingTwoFactor(null);
      return normalizedUser;
    }

    const authenticatedUser = await refreshUser();

    if (!authenticatedUser) {
      throw new Error(
        response.data.message ??
          "Registration succeeded but no authenticated user was returned.",
      );
    }

    setPendingTwoFactor(null);
    return authenticatedUser;
  }

  async function logout() {
    await api.post("/api/auth/logout");
    setPendingTwoFactor(null);
    setUser(null);
  }

  function clearPendingTwoFactor() {
    setPendingTwoFactor(null);
  }

  useEffect(() => {
    let isMounted = true;

    async function bootstrapAuth() {
      try {
        const authenticatedUser = await refreshUser();

        if (!isMounted) {
          return;
        }

        setUser(authenticatedUser);
      } catch (error) {
        if (isMounted) {
          setUser(null);
        }

        console.error("Unable to bootstrap the authenticated user.", error);
      } finally {
        if (isMounted) {
          setIsBootstrappingAuth(false);
        }
      }
    }

    void bootstrapAuth();

    return () => {
      isMounted = false;
    };
  }, []);

  const value = useMemo<AuthContextValue>(
    () => ({
      user,
      isAuthenticated: user !== null,
      isBootstrappingAuth,
      pendingTwoFactor,
      login,
      register,
      logout,
      refreshUser,
      clearPendingTwoFactor,
    }),
    [isBootstrappingAuth, pendingTwoFactor, user],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used inside an AuthProvider.");
  }

  return context;
}

export function getApiErrorMessage(error: unknown) {
  if (isAxiosErrorWithResponse(error)) {
    return error.response.data?.message ?? "Something went wrong.";
  }

  if (error instanceof Error) {
    return error.message;
  }

  return "Something went wrong.";
}

export function getApiValidationErrors(error: unknown) {
  if (isAxiosErrorWithResponse(error)) {
    return error.response.data?.errors ?? {};
  }

  return {};
}

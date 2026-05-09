import axiosInstance from "./axiosInstance";

type VerifyEmailCodePayload = {
  email: string;
  code: string;
};

type ResendVerificationCodePayload = {
  email: string;
};

// Called when user clicks Verify
// POST /auth/verify-email  →  body: { email, code }
export const verifyEmailCode = async ({ email, code }: VerifyEmailCodePayload) => {
  const response = await axiosInstance.post("/auth/verify-email", {
    email,
    code,
  });
  return response.data;
};

// Called when user clicks Resend
// POST /auth/resend-code  →  body: { email }
export const resendVerificationCode = async ({ email }: ResendVerificationCodePayload) => {
  const response = await axiosInstance.post("/auth/resend-code", {
    email,
  });
  return response.data;
};

import axiosInstance from "./axiosInstance";

// Called when user clicks Verify
// POST /auth/verify-email  →  body: { email, code }
export const verifyEmailCode = async ({ email, code }) => {
  const response = await axiosInstance.post("/auth/verify-email", {
    email,
    code,
  });
  return response.data;
};

// Called when user clicks Resend
// POST /auth/resend-code  →  body: { email }
export const resendVerificationCode = async ({ email }) => {
  const response = await axiosInstance.post("/auth/resend-code", {
    email,
  });
  return response.data;
};
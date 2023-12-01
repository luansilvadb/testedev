import { apis } from "service";

import { AxiosPromise, AxiosRequestConfig } from "axios";

const COMMON_URL = `https://btunlnuduiodifksvfba.supabase.co/auth/v1/`;

const API_URLS = { POST_SIGNUP_AUTH_V_1: `${COMMON_URL}signup` } as const;

export type PostSignupAuthV1RequestType = Partial<{
  email: string;
  password: string;
}>;

export type PostSignupAuthV1ResponseType = Partial<{
  id: string;
  aud: string;
  role: string;
  email: string;
  phone: string;
  confirmation_sent_at: string;
  app_metadata: { provider: string; providers: any[] };
  user_metadata: {};
  identities: any[];
  created_at: string;
  updated_at: string;
}>;

export const postSignupAuthV1 = (
  payload: AxiosRequestConfig<PostSignupAuthV1RequestType>,
): AxiosPromise<PostSignupAuthV1ResponseType> =>
  apis.post(API_URLS.POST_SIGNUP_AUTH_V_1, {
    ...payload,
    params: {
      apikey:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ0dW5sbnVkdWlvZGlma3N2ZmJhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQ3NDE5MzcsImV4cCI6MjAwMDMxNzkzN30.W4VeEe2kPaAaLOlSk3XwoIXSPN3m_UIc8MWcSFmLTTo",
      ...payload?.params,
    },
  });

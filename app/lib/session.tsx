import { SessionOptions } from "iron-session";

export const sessionOptions: SessionOptions = {
  cookieName: "myapp_session",
  password: process.env.SESSION_PASSWORD || "complex_password_here",
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
  },
};

declare module "iron-session" {
  interface IronSessionData {
    user?: {
      id: string;
      token: string;
      email: string;
    };
  }
}
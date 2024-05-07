// types/next-auth.d.ts
import 'next-auth';

declare module 'next-auth' {
  /**
   * Extends the built-in session types with our custom properties.
   */
  interface Session {
    accessToken?: string;
  }
}

export type User = {
  id: string;
  email: string;
  name: string;
};

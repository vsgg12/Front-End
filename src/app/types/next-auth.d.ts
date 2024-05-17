import NextAuth, { type DefaultSession } from 'next-auth';
import { JWT } from 'next-auth/jwt';

import { NextResponse } from 'next/server';

declare module 'next-auth' {
  /**
   * Returned by `auth`, `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  // interface Session {
  //   user: {
  //     id: string;
  //     name: string;
  //     email: string;
  //     profile_image: string;
  //     gender: string;
  //     mobile: string;
  //     age: string;
  //   };
  // }

  interface User {
    id: string;
    name: string;
    email: string;
    profile_image: string;
    gender: string;
    mobile: string;
    age: string;
  }

  interface Session {
    user: User & DefaultSession['user'];
  }

  interface Profile {
    response: User;
  }

  interface AdapterUser {
    id: string;
    name: string;
    email: string;
    profile_image: string;
    gender: string;
    mobile: string;
    age: string;
  }
}

declare module 'next-auth/jwt' {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT {
    profile: User;
  }
}

export const { auth, handlers } = NextAuth({
  callbacks: {
    session({ session, token, user }) {
      // `session.user.address` is now a valid property, and will be type-checked
      // in places like `useSession().data.user` or `auth().user`
      return {
        ...session,
        user: {
          ...session.user,
          address: user.address,
        },
      };
    },
  },
});

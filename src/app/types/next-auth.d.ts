import NextAuth, { type DefaultSession } from 'next-auth';

declare module 'next-auth' {
  /**
   * Returned by `auth`, `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      id: string;
      name: string;
      email: string;
      profile_image: string;
      gender: string;
      mobile: string;
      age: string;
    } & DefaultSession['user'];
  }

  interface User {
    id: string;
    name: string;
    email: string;
    profile_image: string;
    gender: string;
    mobile: string;
    age: string;
  }

  interface Profile {
    response: {
      id: string;
      name: string;
      email: string;
      profile_image: string;
      gender: string;
      mobile: string;
      age: string;
    };
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

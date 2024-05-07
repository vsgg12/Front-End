import { NAVER_CLIENT_ID, NAVER_CLIENT_SECERET } from '@/app/constants';
import NextAuth from 'next-auth';
import NaverProvider from 'next-auth/providers/naver';

const handler = NextAuth({
  providers: [
    NaverProvider({
      clientId: NAVER_CLIENT_ID!,
      clientSecret: NAVER_CLIENT_SECERET!,
    }),
  ],
  callbacks: {
    async jwt({ token, user, account }) {
      if (typeof account?.accessToken === 'string') {
        token.accessToken = account.accessToken;
      }
      return token;
    },
    async session({ session, token }) {
      if (typeof token.accessToken === 'string') {
        session.accessToken = token.accessToken;
      }
      return session;
    },
  },
});

export { handler as GET, handler as POST };

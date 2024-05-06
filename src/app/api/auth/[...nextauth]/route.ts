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
});

export { handler as GET, handler as POST };

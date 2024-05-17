import {
  NAVER_CLIENT_ID,
  NAVER_CLIENT_SECRET,
  NEXTAUTH_SECRET,
} from '@/app/constants';
import { mobileCheck } from '@/app/service/auth';
import NextAuth from 'next-auth';
import NaverProvider from 'next-auth/providers/naver';

const handler = NextAuth({
  pages: {
    signIn: '/auth/signIn',
    signOut: '/',
    newUser: '/auth/signUp',
  },
  secret: NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt',
  },
  providers: [
    NaverProvider({
      clientId: NAVER_CLIENT_ID!,
      clientSecret: NAVER_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      // console.log('Profile object:', profile);

      if (account?.provider === 'naver' && profile?.response) {
        user.name = profile.response.name || user.name;
        user.email = profile.response.email || user.email;
        user.profile_image = profile.response.profile_image;
        user.gender = profile.response.gender;
        user.mobile = profile.response.mobile;
        user.age = profile.response.age;
      }

      try {
        const res = await mobileCheck(user.mobile);
        if (res.token === null) {
          console.log('없는 사용자');
          // const params = new URLSearchParams({
          //   name: user.name,
          //   email: user.email,
          //   profile_image: user.profile_image,
          //   gender: user.gender,
          //   mobile: user.mobile,
          //   age: user.age,
          // }).toString();
          // Store profile data in sessionStorage

          // return `/auth/signUp?${params}`; // 로그인 실패 시 리디렉션 경로에 파라미터 추가
          return '/auth/signUp'; // 로그인 실패 시 리디렉션 경로 반환
        }
      } catch (error) {
        console.log(error);
        return false; // 로그인 실패로 처리
      }

      return true;
    },
    async jwt({ token, user, account, profile }) {
      if (account?.provider === 'naver' && user) {
        token.accessToken = account.accessToken;
        token.profile = {
          id: user.id,
          name: user.name,
          email: user.email,
          profile_image: user.profile_image,
          gender: user.gender,
          mobile: user.mobile,
          age: user.age,
        };
      }
      return token;
    },
    async session({ session, token, user }) {
      // console.log('Session Callback - Token object:', token);

      if (token?.profile) {
        session.user = {
          id: user.id,
          name: user.name,
          email: user.email,
          profile_image: user.profile_image,
          gender: user.gender,
          mobile: user.mobile,
          age: user.age,
        };
      }
      return session;
    },
  },
});

export { handler as GET, handler as POST };

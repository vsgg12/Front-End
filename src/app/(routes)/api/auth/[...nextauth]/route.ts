import {
  NAVER_CLIENT_ID,
  NAVER_CLIENT_SECRET,
  NEXTAUTH_SECRET,
} from '@/app/constants';
import { deleteToken, emailCheck, mobileCheck } from '@/app/service/auth';
import NextAuth from 'next-auth';
import NaverProvider from 'next-auth/providers/naver';
import { cookies } from 'next/headers';

const handler = NextAuth({
  pages: {
    signIn: '/home',
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
      if (account?.provider === 'naver' && profile?.response) {
        user.id = profile.response.id || user.id;
        user.email = profile.response.email || user.email;
        user.profile_image = profile.response.profile_image;
        user.gender = profile.response.gender;
        user.age = profile.response.age;
        user.name = profile.response.name || user.name;
        user.mobile = profile.response.mobile;
      }

      try {
        // const res = await mobileCheck(user.mobile);
        const res = await emailCheck(user.email);

        console.log(res);
        console.log('토큰' + res.token);
        console.log('이메일' + user.email);

        if (res.token === null) {
          const params = new URLSearchParams({
            id: user.id,
            email: user.email,
            profile_image: user.profile_image,
            gender: user.gender,
            age: user.age,
            // name: user.name,
            // mobile: user.mobile,
          }).toString();

          return `/auth/signUp?${params}`; // 로그인 실패 시 리디렉션 경로에 파라미터 추가
          // return true;
        }

        if (res.token) {
          await deleteToken(); //원래 있던 토큰 삭제
          cookies().set('token', res.token);

          // const expiresIn = 3 * 60 * 60; // 3시간을 초 단위로 변환 (10800초)
          // const expires = new Date(Date.now() + expiresIn * 1000);
          // cookies().set('expiry', expires.toISOString(), { expires });

          return true;
        }
      } catch (error) {
        console.log(error);
        return false; // 로그인 실패로 처리
      }

      //로그인 되면 next cookie에 cookie set 하기
      return true;
    },
    async jwt({ token, user, account }) {
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
    async session({ session, token }) {
      // console.log('Session Callback - Token object:', token);
      if (token?.profile) {
        session.user = {
          id: token.profile.id,
          name: token.profile.name,
          email: token.profile.email,
          profile_image: token.profile.profile_image,
          gender: token.profile.gender,
          mobile: token.profile.mobile,
          age: token.profile.age,
        };
      }
      return session;
    },
  },
});

export { handler as GET, handler as POST };

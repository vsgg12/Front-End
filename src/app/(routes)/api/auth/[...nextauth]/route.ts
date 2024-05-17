import {
  NAVER_CLIENT_ID,
  NAVER_CLIENT_SECRET,
  NEXTAUTH_SECRET,
} from '@/app/constants';
import { mobileCheck } from '@/app/service/auth';
import NextAuth from 'next-auth';
import NaverProvider from 'next-auth/providers/naver';
import { redirect } from 'next/navigation';

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
        user.nickname = profile.response.nickname || null;
        user.profileImage = profile.response.profile_image || null;
        user.gender = profile.response.gender || null;
        user.birth = profile.response.birth || null;
        user.birthYear = profile.response.birthyear || null;
        user.mobile = profile.response.mobile || null;
        user.age = profile.response.age || null;
      }

      try {
        const res = await mobileCheck(profile?.response.mobile);
        if (res.token === null) {
          console.log('없는 사용자');
          return '/auth/signUp'; // 로그인 실패 시 리디렉션 경로 반환
        }
      } catch (error) {
        console.log(error);
        return false; // 로그인 실패로 처리
      }

      return true;
    },
    async jwt({ token, user, account, profile }) {
      if (account?.provider === 'naver' && profile?.response) {
        token.accessToken = account.accessToken;
        token.profile = {
          id: profile.response.id,
          name: profile.response.name,
          email: profile.response.email,
          nickname: profile.response.nickname,
          profileImage: profile.response.profile_image,
          gender: profile.response.gender,
          birth: profile.response.birth,
          birthYear: profile.response.birthyear,
          mobile: profile.response.mobile,
          age: profile.response.age,
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
          nickname: token.profile.nickname,
          profileImage: token.profile.profileImage,
          gender: token.profile.gender,
          birth: token.profile.birth,
          birthYear: token.profile.birthYear,
          mobile: token.profile.mobile,
          age: token.profile.age,
        };
      }
      session.accessToken = token.accessToken;
      return session;
    },
  },
});

export { handler as GET, handler as POST };

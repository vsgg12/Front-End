import {
  NAVER_CLIENT_ID,
  NAVER_CLIENT_SECRET,
  NEXTAUTH_SECRET,
} from '@/app/constants';
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
    async signIn({ user, account, profile, email, credentials }) {
      return true;
    },
    async redirect({ url, baseUrl }) {
      if (url === '/auth/signIn') {
        return baseUrl;
      }
      return url.startsWith(baseUrl) ? url : baseUrl;
    },
    async session({ session, user, token }) {
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      return token;
    },
    // async signIn({ user, profile }) {
    //   if (profile) {
    //     user.name = profile.response?.name || user.name;
    //     user.email = profile.response?.email || user.email;
    //   }

    //   try {
    //     // 데이터베이스에 유저가 있는지 확인
    //     let db_user = await prisma.user.findUnique({
    //       where: { email: user.email! },
    //     });

    //     // 없으면 데이터베이스에 유저 추가
    //     if (!db_user) {
    //       db_user = await prisma.user.create({
    //         data: {
    //           name: user.name!,
    //           email: user.email!,
    //           cart: {
    //             create: {},
    //           },
    //         },
    //       });
    //     }

    //     // 유저 정보에 데이터베이스 아이디, 역할 연결
    //     user.id = db_user.id;
    //     user.role = db_user.role;

    //     return true;
    //   } catch (error) {
    //     console.log('로그인 도중 에러가 발생했습니다. ' + error);
    //     return false;
    //   }
    // },
    // async jwt({ token, user, account }) {
    //   if (typeof account?.accessToken === 'string') {
    //     token.accessToken = account.accessToken;
    //     console.log(token.accessToken);
    //   }
    //   return token;
    // },
    // async session({ session, token }) {
    //   if (typeof token.accessToken === 'string') {
    //     session.accessToken = token.accessToken;
    //   }
    //   return session;
    // },
  },
});

export { handler as GET, handler as POST };

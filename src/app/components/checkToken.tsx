// components/ClientTokenChecker.tsx
'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { checkToken, deleteToken } from '../service/auth';

const ClientTokenChecker = () => {
  // const router = useRouter();
  // useEffect(() => {
  //   const checkTokens = async () => {
  //     const token = await checkToken();
  //     if (!token) {
  //       alert('로그인이 필요합니다.');
  //       await deleteToken();
  //       router.push('/auth/signIn');
  //     }
  //   };
  //   // 초기 로드 시 토큰 체크
  //   checkTokens();
  //   // 30분마다 토큰을 체크
  //   const interval = setInterval(checkTokens, 30 * 60 * 1000); // 30분 = 30 * 60 * 1000ms
  //   // 컴포넌트 언마운트 시 interval 정리
  //   return () => clearInterval(interval);
  // }, [router]);
  // return null;
};

export default ClientTokenChecker;

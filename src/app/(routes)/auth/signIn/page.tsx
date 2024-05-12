'use client';
import { signIn } from '@/app/utils/userApi';
import Link from 'next/link';
import { useEffect } from 'react';
import { SiNaver } from 'react-icons/si';

export default function SignIn() {
  const naverLogin = async () => {
    const response = await fetch('/api/oauth/naver/login');
    const data = await response.json();
    // window.location.href = data.url; // 클라이언트에서 리다이렉트 실행
    console.log(data);
  };

  useEffect(() => {
    console.log('로그인 페이지 렌더');
    //voting한 postId === postId면 해제하는 코드
  }, []);

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <div className="mb-10 mt-auto font-['SBAggroB'] text-5xl text-[#8A1F21] md:text-8xl">
        <Link href="/">VS.GG</Link>
      </div>

      {/* <Link href="/api/oauth/naver/login"> */}
      <div onClick={naverLogin}>
        <div className="mb-3 flex items-center justify-center gap-2 rounded-3xl bg-black p-2 px-32 ">
          <SiNaver color="white" />
          <button className="text-white">네이버로 3초만에 시작하기</button>
        </div>
      </div>
      {/* </Link> */}
      <div className="flex gap-2">
        <div>아직 VS.GG 멤버가 아니신가요?</div>
        <Link href="/auth/signUp" className="text-[#8A1F21]">
          회원가입
        </Link>
      </div>
      <div className="mb-20 mt-auto flex gap-5">
        <div>이용약관</div>
        <div className="text-gray-400">개인정보처리방침</div>
      </div>
    </div>
  );
}

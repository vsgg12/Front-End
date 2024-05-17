'use client';
import Link from 'next/link';
import { SiNaver } from 'react-icons/si';

export default function SignIn() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <div className="mb-10 mt-auto font-['SBAggroB'] text-5xl text-[#8A1F21] md:text-8xl">
        <Link href="/">VS.GG</Link>
      </div>
      <Link href="/api/oauth/naver/login">
        <div className="mb-3 flex items-center justify-center gap-2 rounded-3xl bg-black p-2 px-32">
          <SiNaver color="white" />
          <button className="text-white">네이버로 회원가입 하기</button>
        </div>
      </Link>
      <div className="flex gap-2">
        <div>이미 가입하셨다면?</div>
        <div
          onClick={() => history.back()}
          className="cursor-pointer text-[#8A1F21]"
        >
          바로 로그인 하기
        </div>
      </div>
      <div className="mb-20 mt-auto flex gap-5">
        <div>이용약관</div>
        <div className="text-gray-400">개인정보처리방침</div>
      </div>
    </div>
  );
}

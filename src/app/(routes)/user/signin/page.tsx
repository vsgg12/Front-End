'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { SiNaver } from 'react-icons/si';

export default function SignIn() {
  const router = useRouter();

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <div>
        <div className="mb-10 mt-auto font-['SBAggroB'] text-5xl text-[#8A1F21] md:text-8xl">
          <Link href="/">VS.GG</Link>
        </div>
        <div>
          <div className="flex w-full flex-col">
            <input
              type="text"
              className="si-input"
              placeholder="아이디를 입력하세요."
            />
            <input
              type="text"
              className="si-input"
              placeholder="비밀번호를 입력하세요."
            />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex justify-center gap-2 ">
            <div>아직 VS.GG 멤버가 아니신가요?</div>
            <Link href="/auth/goSignUp" className="text-[#8A1F21]">
              회원가입
            </Link>
          </div>
          <div className="mb-20 mt-auto flex justify-center gap-5">
            <div>이용약관</div>
            <div className="text-gray-400">개인정보처리방침</div>
          </div>
        </div>
      </div>
    </div>
  );
}

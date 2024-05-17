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
        <div className="mb-10  text-center font-['SBAggroB'] text-5xl text-[#8A1F21] md:text-8xl">
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
          <button
            type="submit"
            className="mb-3 mt-[30px] flex items-center justify-center gap-3 rounded-3xl bg-black p-2 px-32"
          >
            <div className="text-white">로그인</div>
          </button>
          <div className="mb-6 flex justify-center gap-2">
            <div>아직 VS.GG 멤버가 아니신가요?</div>
            <Link href="/user/signup" className="text-[#8A1F21]">
              회원가입
            </Link>
          </div>
          <div className="mb-20 flex justify-center gap-5 text-[14px]">
            <div>이용약관</div>
            <div className="text-gray-400">개인정보처리방침</div>
          </div>
        </div>
      </div>
    </div>
  );
}

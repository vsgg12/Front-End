import Link from 'next/link';

export default function SignUp() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <div className="font-['SBAggroB'] text-4xl text-[#8A1F21]">VS.GG</div>
      <div className="flex w-full items-center justify-center gap-20 px-40">
        <div className="h-1 w-full bg-gray-800"></div>
        <div className="w-30">간단 회원가입</div>
        <div className="h-1 w-full bg-gray-800"></div>
      </div>
      <div>
        <div>이미 가입하셨다면?</div>
        <Link href="/pages/auth/signIn">바로 로그인하기</Link>
      </div>
    </div>
  );
}

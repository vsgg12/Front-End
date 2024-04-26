import Link from 'next/link';

export default function SignUp() {
  return (
    <>
      <div>VS.GG 로고</div>
      <button>네이버로 가입하기</button>
      <div>
        <div>이미 가입하셨다면?</div>
        <Link href="/pages/auth/signIn">바로 로그인하기</Link>
      </div>
    </>
  );
}

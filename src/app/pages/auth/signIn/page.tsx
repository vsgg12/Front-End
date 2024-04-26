import Link from 'next/link';

export default function SignIn() {
  return (
    <>
      <div>VS.GG 로고</div>
      <button>네이버로 3초만에 시작하기</button>
      <div>
        <div>아직 VS.GG 멤버가 아니신가요?</div>
        <Link href="/pages/auth/signUp">회원가입</Link>
      </div>
    </>
  );
}

'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { SiNaver } from 'react-icons/si';
import { signIn, signOut, useSession } from 'next-auth/react';

export default function SignIn() {
  const router = useRouter();
  // const naverLogin = async () => {
  //   try {
  //     const response = await fetch('/api/oauth/naver/login', {
  //       method: 'GET',
  //     }).then();
  //     const { redirectUrl } = await response.json();
  //     window.location.href = redirectUrl; // 클라이언트에서 리다이렉트 실행
  //   } catch (error) {
  //     console.error('Error:', error);
  //   }
  // };

<<<<<<< Updated upstream
  const naverNextAuthLogin = async () => {
    await signIn();
  };

  // useEffect(() => {
  //   const query = new URLSearchParams(window.location.search);
  //   const code = query.get('code');
  //   const state = query.get('state');

  //   // if (code && state) {
  //   // 네이버 콜백에서 받은 code와 state를 백엔드로 전달
=======
  // useEffect(() => {
  //   const query = new URLSearchParams(window.location.search);
  //   const code = query.get('code');
  //   const state = query.get('state');

  // if (code && state) {
  // 네이버 콜백에서 받은 code와 state를 백엔드로 전달
>>>>>>> Stashed changes
  //   fetch(`/api/oauth/naver/callback?code=${code}&state=${state}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log('Naver Callback Data:', data);
  //       // 받아온 데이터를 사용하여 로그인 처리 후 원하는 페이지로 리다이렉트
<<<<<<< Updated upstream
  //       router.push('/auth/signUp'); // 리다이렉트할 페이지로 변경
=======
  //       router.push('/'); // 리다이렉트할 페이지로 변경
>>>>>>> Stashed changes
  //     })
  //     .catch((error) => {
  //       console.error('Error:', error);
  //     });
  //   // }
  // }, [router]);

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <div className="mb-10 mt-auto font-['SBAggroB'] text-5xl text-[#8A1F21] md:text-8xl">
        <Link href="/">VS.GG</Link>
      </div>
<<<<<<< Updated upstream
      <div onClick={naverNextAuthLogin}>
=======
      {/* <div onClick={naverLogin}> */}
      <Link href="/api/oauth/naver/login">
>>>>>>> Stashed changes
        <div className="mb-3 flex items-center justify-center gap-2 rounded-3xl bg-black p-2 px-32">
          <SiNaver color="white" />
          <button className="text-white">네이버로 3초만에 시작하기</button>
        </div>
      </Link>
      {/* </div> */}
      <div className="flex gap-2">
        <div>아직 VS.GG 멤버가 아니신가요?</div>
        <Link href="/auth/goSignUp" className="text-[#8A1F21]">
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

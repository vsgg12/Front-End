import SignUpEmail from '@/app/components/signUp/SignUpEmail';
import SignUpNickName from '@/app/components/signUp/SignUpNickName';
import SignUpPhone from '@/app/components/signUp/SignUpPhone';
import SignUpTerm from '@/app/components/signUp/SignUpTerm';

export default function SignUp() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-10">
      <div className="font-['SBAggroB'] text-4xl text-[#8A1F21]">VS.GG</div>
      <div className="flex w-full items-center justify-center px-40">
        <div className="flex w-1/2 items-center">
          <div className="h-0.5 w-1/3 bg-[#D9D9D9]"></div>
          <div className="w-1/3 text-center text-[#7B7B7B]">간단 회원가입</div>
          <div className="h-0.5 w-1/3 bg-[#D9D9D9]"></div>
        </div>
      </div>
      <div className="flex flex-col gap-10">
        <SignUpEmail />
        <SignUpNickName />
        <SignUpPhone />
      </div>
      <div className="h-0.5 w-1/2 bg-[#D9D9D9]"></div>
      <SignUpTerm />
      <button className="w-1/3 rounded-full bg-[#8A1F21] py-2 text-white">
        가입하기
      </button>
    </div>
  );
}

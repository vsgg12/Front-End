'use client';
import Link from 'next/link';
import SignUpTerm from './SignUpTerm';
import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { createUser } from '@/app/utils/userApi';

export default function SignUpDetail() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ICreateMemberProps>();

  const naverValue = {
    id: 'naver',
    profileImage: 'https://adfaefa.jpg',
    email: 'gg@naver.com',
    mobileNumber: '01012341121',
  };

  const onSubmit: SubmitHandler<ICreateMemberProps> = (data) => {
    const { id: oldId, profileImage: oldImg, email: oldEmail, ...rest } = data; // data에서 id를 제외한 나머지를 rest로 받음

    console.log({ ...naverValue, ...rest }); // 새로운 id와 나머지 데이터를 로깅

    // createUser({ ...naverValue, ...rest });
  };

  useEffect(() => {
    console.log('회원가입 페이지 렌더');
    //voting한 postId === postId면 해제하는 코드
  }, []);

  return (
    <div className="mt-12 flex h-full flex-col items-center justify-center gap-10">
      <Link href="/">
        <div className="font-['SBAggroB'] text-4xl text-[#8A1F21]">VS.GG</div>
      </Link>
      <div className="flex w-full items-center justify-center px-40">
        <div className="flex w-1/2 items-center">
          <div className="h-0.5 w-1/3 bg-[#D9D9D9]"></div>
          <div className="w-1/3 text-center text-[#7B7B7B]">간단 회원가입</div>
          <div className="h-0.5 w-1/3 bg-[#D9D9D9]"></div>
        </div>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-10"
        action=""
      >
        <div className="flex flex-col gap-2">
          <p>이메일</p>
          <input
            type="text"
            readOnly
            value={naverValue.email}
            className="su-i-blocked"
          />
        </div>
        <div className="flex flex-col gap-2">
          <p>닉네임</p>
          <div className="flex gap-2">
            <div className="flex grow flex-col">
              <input
                {...(register('nickname'),
                { required: true, minLength: 2, maxLength: 20 })}
                type="text"
                className="su-i"
              />
              {errors.nickname && (
                <span>닉네임은 2글자 이상, 20글자 이하로 입력해야 합니다.</span>
              )}
            </div>

            <button className="su-btn text-[#8A1F21]">중복확인</button>
          </div>
          <span className="pl-5 text-xs text-[#8A1F21]">
            중복된 닉네임입니다.
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <p>
            전화번호 <span className="text-red-500">*</span>
          </p>
          <div className="flex gap-2">
            <input
              value={naverValue.mobileNumber}
              type="text"
              className="su-i"
            />
            <button className="su-btn">인증요청</button>
          </div>
          <div className="flex gap-2">
            <input type="text" required className="su-i" />
            <button className="su-btn bg-[#8A1F21]  text-white">
              인증완료
            </button>
          </div>
          <span className="pl-5 text-xs text-[#8A1F21]">
            잘못된 인증번호입니다.
          </span>
        </div>

        <div className="h-0.5 bg-[#D9D9D9]"></div>
        <SignUpTerm />
        <button
          type="submit"
          className="rounded-full bg-[#8A1F21] py-2 text-white"
        >
          가입하기
        </button>
      </form>
    </div>
  );
}

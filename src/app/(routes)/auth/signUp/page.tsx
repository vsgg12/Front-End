'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ICreateMemberProps } from '@/app/types/form';
import { useRouter, useSearchParams } from 'next/navigation';
import { checkSameNickname, createMember } from '@/app/service/auth';

export default function SignUp() {
  const router = useRouter();

  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  const name = searchParams.get('name');
  const email = searchParams.get('email');
  const profile_image = searchParams.get('profile_image');
  const gender = searchParams.get('gender');
  const mobile = searchParams.get('mobile');
  const age = searchParams.get('age');

  const [naverValue, setNaverValue] = useState({
    token: '',
    email: '',
    profileImage: '',
    gender: '',
    mobile: '',
    age: '',
  });

  const [sameNickname, setSameNickname] = useState(false);
  const [isNicknameCheck, setIsNicknameCheck] = useState(false);

  const [checkboxes, setCheckboxes] = useState({
    agreeAge: false,
    agreeTerms: false,
    agreePrivacy: false,
    agreePromotion: false,
  });

  //form
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setError,
    clearErrors,
  } = useForm<ICreateMemberProps>();

  const onSubmit: SubmitHandler<ICreateMemberProps> = async (data) => {
    const { email, age, gender, mobile, profileImage, ...rest } = data; // data에서 id를 제외한 나머지를 rest로 받음
    if (sameNickname) {
      window.alert('중복된 닉네임입니다.');
    } else {
      const res = await createMember({ ...naverValue, ...checkboxes, ...rest });
      if (res?.message === '이미 존재하는 유저입니다.') {
        if (confirm('이미 가입된 사용자입니다. 로그인 하시겠습니까?')) {
          router.push('/auth/signIn');
        } else {
          return;
        }
      }
      // {resultCode: 201, resultMsg: 'CREATED'}
      if (res?.resultMsg === 'CREATED') {
        window.alert(`${data.nickname}님, 회원가입을 축하합니다.`);
        router.push('/auth/signIn');
      }
    }
  };

  const handleCheckAll = (checked: boolean) => {
    setCheckboxes({
      agreeAge: checked,
      agreeTerms: checked,
      agreePrivacy: checked,
      agreePromotion: checked,
    });
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setCheckboxes({
      ...checkboxes,
      [name]: checked,
    });
  };

  const handleCheckNickname = async () => {
    const nickname = watch('nickname');
    const res = await checkSameNickname(nickname);
    if (res.nicknameCheck) {
      setSameNickname(true);
      setError('nickname', {
        type: 'manual',
      });
    } else {
      setSameNickname(false);
      clearErrors('nickname');
    }
    setIsNicknameCheck(true);
  };

  useEffect(() => {
    console.log('회원가입 페이지 렌더');
  }, []);

  useEffect(() => {
    setNaverValue({
      token: id || '',
      // name: name || '',
      email: email || '',
      profileImage: profile_image || '',
      gender: gender || '',
      mobile: mobile || '',
      age: age || '',
    });
  }, [name, email, profile_image, gender, mobile, age]);

  return (
    <div className="mt-12 flex h-full flex-col items-center justify-center gap-10">
      <Link href="/">
        <div className="font-['SBAggroB'] text-4xl text-[#8A1F21]">VS.GG</div>
      </Link>
      <div className="flex w-full items-center justify-center px-40">
        <div className="flex w-1/2 items-center">
          <div className="h-0.5 grow bg-[#D9D9D9]"></div>
          <div className="mx-[30px] text-[#7B7B7B]">간단 회원가입</div>
          <div className="h-0.5 grow bg-[#D9D9D9]"></div>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-10">
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
          <p>
            전화번호
            {/* <span className="text-red-500">*</span> */}
          </p>
          <div className="flex gap-2">
            <input
              value={naverValue.mobile}
              type="text"
              readOnly
              className="su-i-blocked mb-1 grow"
            />
            {/* <button className="su-btn">인증요청</button> */}
          </div>
          {/* <div className="flex gap-2">
            <input type="text" required className="su-i" />
            <button type="button" className="su-btn bg-[#8A1F21]  text-white">
              인증완료
            </button>
          </div> */}
          {/* {wrongNumber && (
            <span className="pl-5 text-xs text-[#8A1F21]">
              잘못된 인증번호입니다.
            </span>
          )} */}
        </div>
        <div className="flex flex-col gap-2">
          <p>닉네임</p>
          <div className="flex gap-2">
            <div className="flex grow flex-col">
              <input
                type="text"
                {...register('nickname', {
                  required: '닉네임은 필수 항목입니다.',
                  minLength: {
                    value: 2,
                    message: '닉네임은 2글자 이상이어야 합니다.',
                  },
                  maxLength: {
                    value: 20,
                    message: '닉네임은 20글자 이하이어야 합니다.',
                  },
                })}
                className="su-i"
              />
            </div>

            <button
              type="button"
              onClick={handleCheckNickname}
              className="su-btn text-[#8A1F21] "
            >
              중복확인
            </button>
          </div>
          {errors.nickname && (
            <span className="pl-5 text-xs text-[#8A1F21]">
              {errors.nickname.message}
            </span>
          )}

          {isNicknameCheck && sameNickname && (
            <span className="pl-5 text-xs text-[#8A1F21]">
              중복된 닉네임입니다.
            </span>
          )}
          {isNicknameCheck && !sameNickname && (
            <span className="pl-5 text-xs text-[#7f9cdb]">
              사용 가능한 닉네임입니다.
            </span>
          )}
        </div>

        <div className="h-0.5 bg-[#D9D9D9]"></div>
        <div className="flex flex-col gap-10">
          <div className="flex items-center gap-5">
            <input
              type="checkbox"
              className="size-6 accent-[#8A1F21]"
              name="agreeAge"
              checked={checkboxes.agreeAge}
              onChange={handleCheckboxChange}
              required
            />
            <div className="flex flex-col gap-1">
              <p>만 14세 이상입니다. (필수)</p>
              <p className="text-xs text-[#8A1F21]">
                만 14세 이상만 가입이 가능합니다.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <input
              type="checkbox"
              className="size-6 accent-[#8A1F21]"
              name="agreeTerms"
              checked={checkboxes.agreeTerms}
              onChange={handleCheckboxChange}
              required
            />
            <p>
              <span className="font-bold text-[#8A1F21]">이용약관</span>에
              동의합니다. (필수)
            </p>
          </div>
          <div className="flex items-center gap-5">
            <input
              type="checkbox"
              className="size-6 accent-[#8A1F21]"
              name="agreePrivacy"
              checked={checkboxes.agreePrivacy}
              onChange={handleCheckboxChange}
              required
            />
            <p>
              <span className="font-bold text-[#8A1F21]">개인정보처리방침</span>
              에 동의합니다. (필수)
            </p>
          </div>
          <div className="flex items-center gap-5">
            <input
              type="checkbox"
              className="size-6 accent-[#8A1F21]"
              name="agreePromotion"
              checked={checkboxes.agreePromotion}
              onChange={handleCheckboxChange}
            />
            <p>
              서비스 홍보 및 마케팅 목적의{' '}
              <span className="font-bold text-[#8A1F21]">개인정보처리방침</span>
              에 동의합니다. (선택)
            </p>
          </div>
          <div className="h-0.5 w-full bg-[#D9D9D9]"></div>
          <div className="flex items-center gap-5">
            <input
              type="checkbox"
              className="size-6 accent-[#8A1F21]"
              checked={Object.values(checkboxes).every(Boolean)}
              onChange={(e) => handleCheckAll(e.target.checked)}
            />
            <p>모두 동의합니다.</p>
          </div>
        </div>
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

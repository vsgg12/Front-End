'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm, Controller } from 'react-hook-form';
import { ICreateMemberProps } from '@/app/types/form';
import { useRouter, useSearchParams } from 'next/navigation';
import { checkSameNickname, createMember } from '@/app/service/auth';
import LoadingFull from '@/app/components/LoadingFull';

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
  const [isLoading, setIsLoading] = useState(false);

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
    control,
  } = useForm<ICreateMemberProps>();

  const onSubmit: SubmitHandler<ICreateMemberProps> = async (data) => {
    if (!isNicknameCheck) {
      alert('닉네임 중복 확인을 해주세요.');
      return;
    }

    const { email, age, gender, mobile, profileImage, ...rest } = data; // data에서 id를 제외한 나머지를 rest로 받음
    if (sameNickname) {
      if (typeof window !== 'undefined') {
        alert('로그인이 필요한 서비스입니다.');
      }
    } else {
      setIsLoading(true);
      const res = await createMember({ ...naverValue, ...checkboxes, ...rest });
      if (res?.message === '이미 존재하는 유저입니다.') {
        if (typeof window !== 'undefined') {
          if (confirm('이미 가입된 사용자입니다. 로그인 하시겠습니까?')) {
            setIsLoading(false);
            router.push('/auth/signIn');
          } else {
            setIsLoading(false);
            return;
          }
        }
      }
      // {resultCode: 201, resultMsg: 'CREATED'}
      if (res?.resultMsg === 'CREATED') {
        alert(`${data.nickname}님, 회원가입을 축하합니다.`);
        setIsLoading(false);
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

  const handleParsingPhoneNumber = (num: string) => {
    return num
      .replace(/[^0-9]/g, '') // 숫자를 제외한 모든 문자 제거
      .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/, '$1-$2-$3') // 3자리, 4자리, 4자리로 구분
      .replace(/(-{1,2})$/g, ''); // 마지막에 '-'가 하나나 두 개 있는 경우 제거
  };

  const handleCheckNickname = async () => {
    const nickname = watch('nickname');
    if (!nickname) {
      setError('nickname', {
        type: 'manual',
        message: '닉네임은 필수 항목입니다.', // 이 부분을 추가
      });
      setIsNicknameCheck(false);
      return;
    }

    setIsLoading(true);
    const res = await checkSameNickname(nickname);
    if (res.nicknameCheck) {
      setSameNickname(true);
      setError('nickname', {
        type: 'manual',
        message: '중복된 닉네임입니다.',
      });
    } else {
      setSameNickname(false);
      clearErrors('nickname');
    }
    setIsNicknameCheck(true);
    setIsLoading(false);
  };

  const nickname = watch('nickname');
  useEffect(() => {
    if (!nickname) {
      setIsNicknameCheck(false);
    }
  }, [nickname]);

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
      {isLoading && <LoadingFull />}
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

          {/* {isNicknameCheck && sameNickname && (
            <span className="pl-5 text-xs text-[#8A1F21]">
              중복된 닉네임입니다.
            </span>
          )} */}

          {isNicknameCheck && !sameNickname && (
            <span className="pl-5 text-xs text-[#7f9cdb]">
              사용 가능한 닉네임입니다.
            </span>
          )}
          {}
        </div>

        <div className="flex flex-col gap-2">
          <p>
            전화번호
            {/* <span className="text-red-500">*</span> */}
          </p>
          <div className="flex gap-2">
            <Controller
              name="mobile"
              control={control}
              defaultValue=""
              rules={{
                required: '전화번호는 필수 항목입니다.',
                pattern: {
                  value: /^010-\d{4}-\d{4}$/,
                  message: '전화번호 형식이 올바르지 않습니다. (010-XXXX-XXXX)',
                },
              }}
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <input
                  type="tel"
                  maxLength={13}
                  value={value}
                  onChange={(e) =>
                    onChange(handleParsingPhoneNumber(e.target.value))
                  }
                  onBlur={onBlur}
                  ref={ref}
                  placeholder="010-1234-5678"
                  className="su-i"
                />
              )}
            />
          </div>
          {errors.mobile && (
            <span className="pl-5 text-xs text-[#8A1F21]">
              {errors.mobile.message}
            </span>
          )}

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
          className="mb-10 rounded-full bg-[#8A1F21] py-2 text-white"
        >
          가입하기
        </button>
      </form>
    </div>
  );
}

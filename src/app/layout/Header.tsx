'use client';
import Link from 'next/link';
import { useEffect } from 'react';
import Image from 'next/image';

import { IoMdNotificationsOutline } from 'react-icons/io';
import writeSVG from '../../../public/svg/writing.svg';

export default function Header(): JSX.Element {
  useEffect(() => {
    console.log('헤더 렌더링');
  });

  return (
    <>
      <div className="p-right-20 absolute right-10 top-10 flex flex-row items-center justify-end">
        <div className="flex flex-row items-center">
          <div className="flex flex-col ">
            <Link className="hd-items mr-[0.5rem]  " href={`/post/write`}>
              <Image
                className="h-[32px] w-[32px]"
                src={writeSVG}
                alt="writeIcon"
              />
            </Link>
          </div>
          <button className="hd-items mr-[1rem] ">
            <IoMdNotificationsOutline />
          </button>
          <Link href="/pages/myPage">
            <button className=" hd-items mr-[1.5rem] h-[2rem] w-[2rem] rounded-full border-2 border-[#8A1F21] bg-[#C3C3C3]"></button>
          </Link>
          <Link href="/api/oauth/naver/logout">
            <button className="mr-[1rem] rounded-[150px] border-2 border-[#8A1F21] px-[30px] py-[5px] text-[#8A1F21]">
              로그아웃
            </button>
          </Link>
        </div>
        <Link href={'/auth/signIn'}>
          <button className="mr-[1rem] rounded-[150px] border-2 border-[#8A1F21] px-[30px] py-[5px] text-[#8A1F21]">
            로그인
          </button>
        </Link>
      </div>
    </>
  );
}

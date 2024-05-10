'use client';
import { PiListPlus } from 'react-icons/pi';
import { IoMdNotificationsOutline } from 'react-icons/io';
import Link from 'next/link';
import { useEffect } from 'react';
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
              {/* <PiListPlus className="text-[31px] " /> */}
            </Link>
          </div>
          <button className="hd-items mr-[1rem] ">
            <IoMdNotificationsOutline />
          </button>
          <Link href="/myPage">
            <button className=" hd-items mr-[1.5rem] h-[2rem] w-[2rem] rounded-full border-2 border-[#8A1F21] bg-[#C3C3C3]"></button>
          </Link>
          <button className="mr-[1rem] rounded-[150px] border-2 border-[#8A1F21] px-[30px] py-[5px] text-[#8A1F21]">
            로그아웃
          </button>
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

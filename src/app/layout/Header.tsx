'use client';
import Link from 'next/link';
import { useEffect } from 'react';
import Image from 'next/image';
import { signIn, signOut, useSession } from 'next-auth/react';

import { IoMdNotificationsOutline } from 'react-icons/io';
import { IoPersonCircle } from 'react-icons/io5';

import writeSVG from '../../../public/svg/writing.svg';
import { checkToken, deleteToken } from '../service/auth';
import { userStore } from '../store/userStoe';

export default function Header() {
  const { data: session, status } = useSession();

  const handleSignOut = async () => {
    await signOut().then(async (res) => {
      await deleteToken();
    });
  };

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
          {/* <button className="hd-items mr-[0.6rem] ">
            <IoMdNotificationsOutline />
          </button> */}
          {/* <Link href="/myPage">
          <Link href="/myPage">
            <button className="hd-items mr-[1rem] flex items-center justify-center overflow-hidden rounded-full">
              <IoPersonCircle className="h-[2.2rem] w-[2.2rem]" />
            </button>
          </Link> */}
          {session ? (
            <div onClick={handleSignOut}>
              <button className="mr-[1rem] rounded-[150px] border-2 border-[#8A1F21] px-[30px] py-[5px] text-[#8A1F21]">
                로그아웃
              </button>
            </div>
          ) : (
            <Link href={'/auth/signIn'}>
              <button className="mr-[1rem] rounded-[150px] border-2 border-[#8A1F21] px-[30px] py-[5px] text-[#8A1F21]">
                로그인
              </button>
            </Link>
          )}
        </div>
      </div>
    </>
  );
}

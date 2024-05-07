'use client';
import { signIn, signOut, useSession } from 'next-auth/react';
import { PiListPlus } from 'react-icons/pi';
import { IoMdNotificationsOutline } from 'react-icons/io';

import Link from 'next/link';
import { useEffect } from 'react';

export default function Header(): JSX.Element {
  useEffect(() => {
    console.log('헤더 렌더링');
  });

  const { data: session } = useSession();

  return (
    <>
      <div className="p-right-20 absolute right-10 top-10 flex flex-row items-center justify-end">
        {session?.user ? (
          <div className="flex flex-row items-center">
            {/* test-{session.user.email} */}
            <div className="flex flex-col ">
              <Link className="hd-items mr-[1rem]  " href={`/post/write`}>
                <PiListPlus className="text-[31px] " />
              </Link>
            </div>
            <button className="hd-items mr-[1rem] ">
              <IoMdNotificationsOutline />
            </button>
            <button className=" hd-items mr-[1.5rem] h-[2rem] w-[2rem] rounded-full border-2 border-[#8A1F21] bg-[#C3C3C3]"></button>
            <div
              className="mr-[1rem] rounded-[150px] border-2 border-[#8A1F21] px-[30px] py-[5px] text-[#8A1F21]"
              onClick={() => signOut()}
            >
              로그아웃
            </div>
          </div>
        ) : (
          <Link href={'/auth/signIn'}>
            <button className="mr-[1rem] rounded-[150px] border-2 border-[#8A1F21] px-[30px] py-[5px] text-[#8A1F21]">
              로그인
            </button>
          </Link>
        )}
      </div>
    </>
  );
}

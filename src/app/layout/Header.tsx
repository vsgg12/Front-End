'use client';
import { signIn, signOut, useSession } from 'next-auth/react';
import { PiListPlus } from 'react-icons/pi';
import { IoMdNotificationsOutline } from 'react-icons/io';

import Link from 'next/link';

export default function Header(): JSX.Element {
  const { data: session } = useSession();

  return (
    <>
      <div className="p-right-20 absolute right-10 top-10 flex flex-row items-center justify-end">
        {session?.user ? (
          <div onClick={() => signOut()}>로그아웃 {session.user.email}</div>
        ) : (
          <Link href={'/auth/signIn'}>로그인</Link>
        )}

        <div className="flex flex-col ">
          <Link className="hd-items " href={`/post/write`}>
            <PiListPlus className="text-[31px]" />
          </Link>
        </div>

        <button className="hd-items">
          <IoMdNotificationsOutline />
        </button>
        <Link className="hd-items" href={`/myPage`}>
          <button className=" hd-items h-[2rem] w-[2rem] rounded-full border-2 border-[#8A1F21] bg-[#C3C3C3]"></button>
        </Link>
      </div>
    </>
  );
}

import { PiListPlus } from 'react-icons/pi';
import { IoMdNotificationsOutline } from 'react-icons/io';
import Link from 'next/link';
export default function Header(): JSX.Element {
  return (
    <>
      <div className="p-right-20 absolute right-10 top-10 flex flex-row items-center justify-end">
        {/* <button className="">로그인</button> */}
        <div className="flex flex-col ">
          <Link className="hd-items " href={`/pages/post/write`}>
            <PiListPlus className="text-[31px]" />
          </Link>
          {/* <div className="hd-items-desc">글쓰기</div> */}
        </div>

        <button className="hd-items">
          <IoMdNotificationsOutline />
        </button>
        <button className=" hd-items h-[2rem] w-[2rem] rounded-full border-2 border-[#8A1F21] bg-[#C3C3C3]"></button>
      </div>
    </>
  );
}

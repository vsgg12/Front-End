'use client';
import Link from 'next/link';
import Search from '@/app/components/Search';
import PostReturnBtn from '../post/PostReturnBtn';
import { PiListPlus } from 'react-icons/pi';
import HomePostItems from './HomePostItems';
import { useEffect } from 'react';

export default function Home(): JSX.Element {
  useEffect(() => {
    console.log('home 렌더');
    //voting한 postId === postId면 해제하는 코드
  }, []);
  return (
    <>
      <main>
        <Search />
        <section className="flex justify-center">
          <div className="relative w-fit">
            <Link href={`/post/write`}>
              <button className=" fixed bottom-[60px] right-2 z-10 flex h-[7.125rem] w-[7.313rem] flex-col items-center justify-center rounded-full bg-[#8A1F21] text-white shadow-2xl">
                {/* <PiListPlus className="mb-[5px] text-[30px]" /> */}

                <div className="text-[0.875rem]">글쓰기</div>
              </button>
            </Link>
            <header className="mb-[44px] flex flex-row items-center justify-between ">
              <PostReturnBtn>최신순/추천순</PostReturnBtn>
              <div className="text-xs text-[#909090]">홈</div>
            </header>
            <HomePostItems />
            <HomePostItems />
            <HomePostItems />
          </div>
        </section>
      </main>
    </>
  );
}

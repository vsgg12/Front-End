'use client';
import Link from 'next/link';
import Search from '@/app/components/Search';
import HomePostItems from './HomePostItems';
import Image from 'next/image';
import writeSVG from '../../../../public/svg/writingWhite.svg';
import { Tabs, Tab, Card, CardBody } from '@nextui-org/react';

export default function Home(): JSX.Element {
  return (
    <>
      <main>
        <Search />
        <section className="flex justify-center">
          <div className="relative w-4/5 max-w-[1400px]">
            <Link href={`/post/write`}>
              <button className=" fixed bottom-[60px] right-2 z-10 flex h-[7.125rem] w-[7.313rem] flex-col items-center justify-center rounded-full bg-[#8A1F21] text-white shadow-2xl">
                <Image
                  className="h-[32px] w-[32px]"
                  src={writeSVG}
                  alt="writeIcon"
                />

                <div className="text-[0.875rem]">글쓰기</div>
              </button>
            </Link>
            <div className="mb-[44px] flex flex-row items-center justify-end">
              <div className="text-xs text-[#909090]">홈</div>
            </div>
            <HomePostItems />
          </div>
        </section>
      </main>
    </>
  );
}

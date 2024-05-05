import Link from 'next/link';
import Search from '@/app/components/Search';
import PostReturnBtn from '@/app/components/post/PostReturnBtn';
import { PiListPlus } from 'react-icons/pi';
import MainPostItems from '@/app/components/main/MainPostItems';
export default function Home(): JSX.Element {
  return (
    <>
      <main>
        <Search />
        <section className="flex justify-center">
          <div className="relative w-fit">
            <Link href={`/pages/post/write`}>
              <button className="fixed bottom-[60px] right-2 flex h-[7.125rem] w-[7.313rem] flex-col items-center justify-center rounded-full bg-[#8A1F21] text-white shadow-2xl">
                <PiListPlus className="mb-[5px] text-[30px]" />
                <div className="text-[0.875rem]">글쓰기</div>
              </button>
            </Link>
            <header className="mb-[44px] flex flex-row items-center justify-between ">
              <PostReturnBtn>최신순/추천순</PostReturnBtn>
              <div className="text-xs text-[#909090]">홈</div>
            </header>
            <MainPostItems />
          </div>
        </section>
      </main>
    </>
  );
}

'use client';
import Link from 'next/link';
import Search from '@/app/components/Search';
import HomePostItems from './HomePostItems';
import Image from 'next/image';
import writeSVG from '../../../../public/svg/writingWhite.svg';
import { useEffect } from 'react';
import { userStore } from '@/app/store/userStoe';
import { checkToken } from '@/app/service/auth';
import { useRouter } from 'next/navigation';
import Header from '@/app/layout/Header';
import { useSession } from 'next-auth/react';
// import { Tabs, Tab, Card, CardBody } from '@nextui-org/react';

export default function Home(): JSX.Element {
  const router = useRouter();
  const { data: session } = useSession();

  const handleWriteClick = () => {
    if (!session) {
      if (typeof window !== 'undefined') {
        alert('로그인이 필요한 서비스입니다.');
      }
      router.push('/');
    } else {
      router.push('/post/write');
    }
  };

  useEffect(() => {
    async function handleToken() {
      const res = await checkToken();
      console.log(res);
      if (!res) {
        router.push('/auth/signIn');
      }
    }

    handleToken();
  }, []);

  return (
    <>
      <Header />
      <main>
        <Search />
        <section className="flex justify-center">
          <div className="relative w-4/5 max-w-[1400px]">
            <button
              onClick={handleWriteClick}
              className=" fixed bottom-[60px] right-2 z-10 flex h-[7.125rem] w-[7.313rem] flex-col items-center justify-center rounded-full bg-[#8A1F21] text-white shadow-2xl"
            >
              <Image
                className="h-[32px] w-[32px]"
                src={writeSVG}
                alt="writeIcon"
              />

              <div className="text-[0.875rem]">글쓰기</div>
            </button>
            <div className="mb-[44px] flex flex-row items-center justify-between ">
              {/* <button className="box-content flex h-[34px] items-center justify-center rounded-[150px] bg-[#8A1F21] text-white"> */}
              <div className="flex flex-col">
                {/* <Tabs key="default" aria-label="Options">
                  <Tab key="latest" title="최신순">
                    <Card>
                      <CardBody>최신순</CardBody>
                    </Card>
                  </Tab>
                  <Tab key="recommend" title="추천순">
                    <Card>
                      <CardBody>추천순</CardBody>
                    </Card>
                  </Tab>
                </Tabs> */}
              </div>
              {/* </button> */}
              <div className="text-xs text-[#909090]">홈</div>
            </div>
            <HomePostItems />
          </div>
        </section>
      </main>
    </>
  );
}

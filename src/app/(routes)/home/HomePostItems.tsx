'use client';
import Link from 'next/link';
import PostTag from '../post/PostTag';
import { useEffect, useState } from 'react';
import HomeNotVoted from './HomeNotVoted';
import HomeVoted from './HomeVoted';
import { testMember, testPost, testVid } from '@/app/test/dummy';

// { postId, memberId }
export default function HomePostItems() {
  const [isVoted, setIsVoted] = useState(false);
  useEffect(() => {
    //voting한 postId === postId면 해제하는 코드
  }, []);

  return (
    <>
      <Link href={`/post/${1}/`}>
        <div className="p-content-pd p-content-mb h-fit w-[1440px] rounded-[30px] bg-[#ffffff]">
          <div className="flex w-full flex-row place-items-start justify-between font-medium">
            <div className="p-content-s-mb text-[25px]">{testPost.title}</div>
            <div className="text-[12px] text-[#C8C8C8]">
              조회수 {testPost.viewCount}
            </div>
          </div>
          <div className="p-content-s-mb flex flex-row items-center justify-start font-medium">
            <div className="mr-[10px] h-[32px] w-[32px] rounded-full bg-[#D9D9D9]"></div>
            <div>
              <div className="flex flex-row">
                <div className=" mr-[6px] text-[12px] text-[#333333]">
                  {testMember.nickname}
                </div>
                <div className="text-[12px] text-[#909090]">
                  {testMember.tier}
                </div>
              </div>
              <div className="text-[12px] text-[#C8C8C8]">
                {testPost.createDateTime}
              </div>
            </div>
          </div>
          <div className="flex flex-row">
            <iframe
              className="p-content-rounded p-content-s-mb p-content-mr h-[340px] w-[37.875rem]"
              src={testVid.url}
              title="롤 랭크 4:5 바론한타"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
            <div className="flex w-[50%] flex-col">
              <div className="p-content-mb h-[45%] cursor-pointer decoration-solid hover:underline">
                {testPost.content}
              </div>
              <div className="to-[#DCDCDC} relative h-[137px] rounded-[30px] bg-gradient-to-b from-[#ADADAD]/30 to-[#DCDCDC]/30 ">
                {isVoted ? <HomeVoted /> : <HomeNotVoted />}
              </div>
            </div>
          </div>
          <PostTag />
        </div>
      </Link>
    </>
  );
}

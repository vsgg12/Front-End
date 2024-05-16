'use client';
import Link from 'next/link';
import PostTag from '../post/PostTag';
import { useEffect, useState } from 'react';
import HomeNotVoted from './HomeNotVoted';
import HomeVoted from './HomeVoted';
import { testMember, testPost, testVid } from '@/app/test/dummy';
import InfiniteScroll from 'react-infinite-scroll-component';
import { SubmitHandler, useForm } from 'react-hook-form';

// { postId, memberId }
export default function HomePostItems() {
  const [isVoted, setIsVoted] = useState(true);

  useEffect(() => {
    console.log('homeitem 렌더');
    //voting한 postId === postId면 해제하는 코드
  }, []);

  const [displayedPosts, setDisplayedPosts] = useState(testPost.slice(0, 5));
  const [hasMore, setHasMore] = useState(true);

  const fetchMoreData = () => {
    if (displayedPosts.length >= testPost.length) {
      setHasMore(false);
      return;
    }

    setTimeout(() => {
      const newPosts = testPost.slice(
        displayedPosts.length,
        displayedPosts.length + 5,
      );
      setDisplayedPosts([...displayedPosts, ...newPosts]);
    }, 500);
  };

  return (
    <div>
      <InfiniteScroll
        dataLength={displayedPosts.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<p>Loading...</p>}
      >
        {displayedPosts.map((post, index) => (
          <Link key={index} href={`/post/${index}/`}>
            <div className="p-content-pd p-content-mb h-fit w-full rounded-[1.875rem] bg-[#ffffff]">
              <div className="flex w-full flex-row  justify-between font-medium">
                <div className="p-content-s-mb text-[1.563rem]">
                  {post.title}
                </div>
                <div className="text-[0.75rem] text-[#C8C8C8]">
                  조회수 {post.viewCount}
                </div>
              </div>
              <div className="p-content-s-mb flex flex-row items-center justify-start font-medium">
                <div className="mr-[0.625rem] h-[2rem] w-[2rem] rounded-full bg-[#D9D9D9]"></div>
                <div>
                  <div className="flex flex-row">
                    <div className=" mr-[0.625rem] text-[0.75rem] text-[#333333]">
                      {testMember.nickname}
                    </div>
                    <div className="text-[0.75rem] text-[#909090]">
                      {testMember.tier}
                    </div>
                  </div>
                  <div className="text-[0.75rem] text-[#C8C8C8]">
                    {post.createDateTime}
                  </div>
                </div>
              </div>
              <div className="flex h-fit flex-row">
                <iframe
                  className="p-content-rounded p-content-s-mb p-content-mr aspect-video h-[30vh] w-[50%] max-w-[37.875rem]"
                  src={testVid.url}
                  title="롤 랭크 4:5 바론한타"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
                <div className="flex flex-col overflow-hidden">
                  <div className="mb-2 line-clamp-[8] cursor-pointer overflow-hidden text-ellipsis decoration-solid ">
                    {post.content}
                  </div>
                  <div className="to-[#DCDCDC} relative flex h-[8.563rem] items-center justify-center rounded-[1.875rem] bg-gradient-to-b from-[#ADADAD]/30 to-[#DCDCDC]/30 ">
                    {isVoted ? <HomeVoted /> : <HomeNotVoted />}
                  </div>
                </div>
              </div>
              <PostTag />
            </div>
          </Link>
        ))}
      </InfiniteScroll>
    </div>
  );
}

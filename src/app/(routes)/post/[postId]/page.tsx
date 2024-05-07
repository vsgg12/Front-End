'use client';
import Search from '@/app/components/Search';

import PostReturnBtn from '../PostReturnBtn';
import PostHeader from '../PostHeader';
import PostUploadInfo from '../PostUploadInfo';
import PostTag from '../PostTag';
import PostCommentInput from '../PostCommentInput';
import PostComment from '../PostComment';
import PostVotingChampList from '../PostVotingChampList';
import PostVotingGraph from '../PostVotingGraph';

import { IPostReadParams } from '@/app/types/post';
import { useEffect } from 'react';

export default function PostRead({
  params,
}: {
  params: IPostReadParams;
}): JSX.Element {
  useEffect(() => {
    console.log('post read page 렌더');
    //voting한 postId === postId면 해제하는 코드
  }, []);

  return (
    <>
      <main>
        <Search />
        <section className="flex justify-center">
          <div className="w-fit">
            <header className="mb-[44px] flex flex-row items-center justify-between">
              <PostReturnBtn>글 목록</PostReturnBtn>
              <div className="text-xs text-[#909090]">홈{' > '}게시글</div>
            </header>

            <div className="flex flex-row">
              <div className="p-content-pd p-content-mr p-content-rounded mb-11 h-[91.125rem] w-[56.0625rem] bg-white">
                <PostHeader />
                <PostUploadInfo />
                <iframe
                  className="p-content-rounded p-content-s-mb h-[29.3125rem] w-full"
                  src="https://www.youtube.com/embed/TByv13Yq4I4"
                  title="롤 랭크 4:5 바론한타"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
                <PostTag />
                <div className="my-[1.125rem] h-[23.375rem] w-full bg-[#D9D9D9]">
                  사진
                </div>
                <div className="whitespace-pre-wrap">본문내용...</div>
              </div>

              <div className="p-content-pd p-content-rounded scroll mb-11 h-[91.125rem] w-[31.3125rem] bg-white">
                <div>
                  <div className="p-content-s-mb text-lg">댓글</div>
                  <div className="flex flex-row">
                    <PostCommentInput />
                  </div>
                </div>
                <PostComment />
                <div className="border-l-2 border-[#8A1F21] pl-5">
                  <PostComment />
                  <PostComment />
                  <PostComment />
                  <PostComment />
                  <PostCommentInput />
                </div>
                <PostComment />
                <PostComment />
                <PostComment />
                <PostComment />
                <PostComment />
                <PostComment />
                <PostComment />
                <PostComment />
              </div>
            </div>

            <div className="p-content-pd p-content-rounded p-last-mb flex h-fit w-[90rem] flex-col bg-white">
              <div className="relative flex w-full flex-row items-center">
                <PostVotingChampList />
                <div className="flex grow flex-col items-center justify-center">
                  <div className="mb-[3rem] text-[20px]">
                    이 게임의 과실의 몇 대 몇~?
                  </div>
                  <PostVotingGraph />
                  <div className="text-[12px] text-[#7B7B7B]">
                    [챔피언명]의 과실을 선택해주세요
                  </div>
                </div>
              </div>
              <div className="flex justify-end">
                <button className="h-9 w-28 rounded-full bg-[#8A1F21] text-lg text-white hover:bg-red-800">
                  제출하기
                </button>
              </div>
            </div>
            <div></div>
          </div>
        </section>
      </main>
    </>
  );
}

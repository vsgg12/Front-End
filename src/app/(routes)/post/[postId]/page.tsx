'use client';
import Search from '@/app/components/Search';

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
  const ingameInfos = [
    { id: 0, champion: '챔1', position: 'top', tier: '그마' },
    { id: 1, champion: '챔1', position: 'top', tier: '그마' },
    { id: 2, champion: '챔1', position: 'top', tier: '그마' },
    { id: 3, champion: '챔1', position: 'top', tier: '그마' },
    { id: 4, champion: '챔1', position: 'top', tier: '그마' },
  ];

  const usePost = {
    memberId: 0,
    postId: params.postId,
    title: '제목입니다',
    content: `
    Lorem Ipsum is simply dummy text of the printing and typesetting
    industry. Lorem Ipsum has been the industry's standard dummy
    text ever since the 1500s, when an unknown printer took a galley
    of type and scrambled it to make a type specimen book. It has
    survived not only five centuries, but also the leap into
    electronic typesetting, remaining essentially unchanged. It was
    popularised in the 1960s with the release of Letraset sheets
    containing Lorem Ipsum passages, and more recently with desktop
    publishing software like Aldus PageMaker including versions of
    Lorem Ipsum.
    `,
  };

  useEffect(() => {
    console.log('post read page 렌더');
    //voting한 postId === postId면 해제하는 코드
  }, []);

  return (
    <>
      <main>
        <Search />
        <section className="flex justify-center">
          <div className="w-4/5 max-w-[1400px]">
            <header className="mb-[44px] flex flex-row items-center  justify-between">
              <button className=" mb-[44px] box-content flex h-[34px] w-[92px] items-center justify-center rounded-[150px] bg-[#8A1F21] text-white">
                <div className="text-[13px]">글 목록</div>
              </button>
              <div className="text-xs text-[#909090]">홈{' > '}게시글</div>
            </header>

            <div className="flex flex-row">
              <div className="p-content-pd p-content-mr p-content-rounded mb-11 h-[1400px] bg-white">
                <PostHeader />
                <PostUploadInfo />
                <iframe
                  className="p-content-rounded p-content-s-mb h-[40%] w-full"
                  src="https://www.youtube.com/embed/TByv13Yq4I4"
                  title="롤 랭크 4:5 바론한타"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>

                <video controls className="rounded-[30px]">
                  <source src="../../../../../cat.mp4" type="video/webm" />
                </video>

                <PostTag />
                <div className="my-[1.125rem] w-full bg-[#D9D9D9]">사진</div>
                <div className="whitespace-pre-wrap">본문내용...</div>
              </div>

              <div className="p-content-pd p-content-rounded scroll mb-11 h-[1400px] w-1/2 bg-white">
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

            <div className="p-content-pd p-content-rounded p-last-mb flex h-fit w-full flex-col bg-white">
              <div className="relative flex w-full flex-row items-center">
                <PostVotingChampList />
                <div className="flex grow flex-col items-center justify-center">
                  <div className="mb-[3rem] text-[20px]">
                    이 게임의 과실은 몇 대 몇~?
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

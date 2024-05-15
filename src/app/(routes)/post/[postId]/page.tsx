'use client';
import Search from '@/app/components/Search';

import PostTag from '../PostTag';
import PostCommentInput from '../PostCommentInput';
import PostComment from '../PostComment';

import { IPostReadParams } from '@/app/types/post';
import { useEffect } from 'react';

export default function PostRead({
  params,
}: {
  params: IPostReadParams;
}): JSX.Element {
  const ingameInfos = [
    { id: 0, champion: '챔1', position: 'top', tier: 'grandmaster' },
    { id: 1, champion: '챔2', position: 'jungle', tier: 'siver' },
    { id: 2, champion: '챔3', position: 'mid', tier: 'gold' },
    { id: 3, champion: '챔4', position: 'onedeal', tier: 'bronze' },
    { id: 4, champion: '챔5', position: 'support', tier: 'iron' },
  ];

  const userPost = {
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

  const changeIngameInfoColor = (index: number) => {
    switch (index) {
      case 0:
        return 'bg-[#000000]';
      case 1:
        return 'bg-[#9D2A2C]';
      case 2:
        return 'bg-[#CACACA]';
      case 3:
        return 'bg-[#656565]';
      case 4:
        return 'bg-[#6C0000]';
    }
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
              <div className="p-content-pd p-content-mr p-content-rounded scroll mb-11 h-[1400px] bg-white">
                <div className="flex w-full flex-row place-items-start justify-between font-medium">
                  <div className="p-content-s-mb text-[25px]">
                    {userPost.title}
                  </div>
                  <div className="text-[12px] text-[#C8C8C8]">조회수 9,999</div>
                </div>
                <div className="p-content-s-mb flex flex-row items-center justify-start font-medium">
                  <div className="mr-[10px] h-[32px] w-[32px] rounded-full bg-[#D9D9D9]"></div>
                  <div>
                    <div className="flex flex-row">
                      <div className=" mr-[6px] text-[12px] text-[#333333]">
                        닉네임
                      </div>
                      <div className="text-[12px] text-[#909090]">등급</div>
                    </div>
                    <div className="text-[12px] text-[#C8C8C8]">
                      2024.04.24. 13:34
                    </div>
                  </div>
                </div>
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
                <div className="whitespace-pre-wrap">{userPost.content}</div>
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
                <div className="mx-2 flex flex-col ">
                  {ingameInfos.map((ingameInfo, index) => (
                    <div className="mb-1 flex flex-row items-center  ">
                      <div
                        className={
                          'p-voting-champ-dot ' + changeIngameInfoColor(index)
                        }
                      ></div>
                      <div className="whitespace-nowrap">
                        {ingameInfo.champion}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex grow flex-col items-center justify-center">
                  <div className="mb-[3rem] text-[20px]">
                    이 게임의 과실은 몇 대 몇~?
                  </div>
                  <div className="flex  flex-col items-center">
                    <div className="p-content-s-mb flex flex-row">
                      <div className="p-voting-number-element text-[#000000] ">
                        2{' '}
                      </div>
                      <div className="p-voting-number-element "> : </div>
                      <div className="p-voting-number-element text-[#9D2A2C]">
                        2{' '}
                      </div>
                      <div className="p-voting-number-element "> : </div>
                      <div className="p-voting-number-element text-[#CACACA]">
                        2{' '}
                      </div>
                      <div className="p-voting-number-element "> : </div>
                      <div className="p-voting-number-element text-[#656565] ">
                        2{' '}
                      </div>
                      <div className="p-voting-number-element "> : </div>
                      <div className="p-voting-number-element text-[#6C0000] ">
                        2{' '}
                      </div>
                    </div>
                    <div className="p-content-s-mb flex flex-row">
                      <div className="p-voing-bar-element rounded-l-[30px] bg-[#000000]"></div>
                      <div className="p-voing-bar-element bg-[#000000]"></div>
                      <div className="p-voing-bar-element"></div>
                      <div className="p-voing-bar-element"></div>
                      <div className="p-voing-bar-element"></div>
                      <div className="p-voing-bar-element"></div>
                      <div className="p-voing-bar-element"></div>
                      <div className="p-voing-bar-element"></div>
                      <div className="p-voing-bar-element"></div>
                      <div className="p-voing-bar-element rounded-r-[30px]"></div>
                    </div>
                  </div>
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

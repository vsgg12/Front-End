'use client';
import { useEffect, useMemo, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import Search from '@/app/components/Search';
import PostTag from '../PostTag';
import PostCommentInput from '../PostCommentInput';
import PostComment from '../PostComment';
import VoteForm from '../VoteForm';

import { IPostReadParams } from '@/app/types/post';

import { testComments } from '@/app/test/dummy';
import { ICreateCommentProps, ICreateCommentsProps } from '@/app/types/form';

const userPost = {
  memberId: 0,
  postId: 0,
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

export default function PostRead({
  params,
}: {
  params: IPostReadParams;
}): JSX.Element {
  const [displayedPosts, setDisplayedPosts] = useState(
    testComments.slice(0, 5),
  );
  const [hasMore, setHasMore] = useState(true);

  const fetchMoreData = () => {
    if (displayedPosts.length >= testComments.length) {
      setHasMore(false);
      return;
    }

    setTimeout(() => {
      const newPosts = testComments.slice(
        displayedPosts.length,
        displayedPosts.length + 5,
      );
      setDisplayedPosts([...displayedPosts, ...newPosts]);
    }, 500);
  };

  // interface CommentWithChildren extends ICreateCommentsProps {
  //   children: CommentWithChildren[];
  // }

  // const organizeComments = (
  //   comments: ICreateCommentProps[],
  // ): CommentWithChildren[] => {
  //   const commentMap: { [key: number]: CommentWithChildren } = {};
  //   comments.forEach((comment) => {
  //     commentMap[comment.commentId] = { ...comment, children: [] };
  //   });

  //   const rootComments: CommentWithChildren[] = [];

  //   comments.forEach((comment) => {
  //     if (comment.parentCommentId === null) {
  //       rootComments.push(commentMap[comment.commentId]);
  //     } else if (commentMap[comment.parentCommentId]) {
  //       commentMap[comment.parentCommentId].children.push(
  //         commentMap[comment.commentId],
  //       );
  //     }
  //   });

  //   return rootComments;
  // };

  // const CommentThread = ({ comments }: { comments: CommentWithChildren[] }) => {
  //   return (
  //     <>
  //       {comments.map((comment) => (
  //         <div key={comment.commentId} className="mb-4">
  //           <PostComment postId={userPost.postId} comment={comment} />
  //           {comment.children.length > 0 && (
  //             <div className="border-l-2 border-[#8A1F21] pl-5">
  //               <CommentThread comments={comment.children} />
  //             </div>
  //           )}
  //         </div>
  //       ))}
  //     </>
  //   );
  // };

  // const organizedComments = useMemo(
  //   () => organizeComments(displayedPosts),
  //   [displayedPosts],
  // );

  //useEffect
  useEffect(() => {
    console.log('post read page 렌더');
    //voting한 postId === postId면 해제하는 코드
  }, []);

  // const [showReplyInput, setShowReplyInput] = useState(false);
  const [showReply, setShowReply] = useState<number>();

  return (
    <>
      <main>
        <Search />
        <section className="flex justify-center">
          <div className="w-4/5 max-w-[1400px]">
            <header className="mb-[44px] flex flex-row items-center  justify-between">
              <button
                onClick={() => {
                  history.back();
                }}
                className=" mb-[44px] box-content flex h-[34px] w-[92px] items-center justify-center rounded-[150px] bg-[#8A1F21] text-white"
              >
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

              <div className="p-content-rounded scroll relative mb-11 h-[1400px] w-1/2 bg-white px-[63px] pb-[44px]">
                <div className="sticky top-[-1px] bg-[#ffffff] pt-[44px]">
                  <div className="p-content-s-mb text-lg">댓글</div>
                  <div className="flex flex-row">
                    <PostCommentInput
                      postId={userPost.postId}
                      parentId={null}
                    />
                  </div>
                </div>

                <InfiniteScroll
                  dataLength={displayedPosts.length}
                  next={fetchMoreData}
                  hasMore={hasMore}
                  loader={<p>Loading...</p>}
                >
                  {/* <CommentThread comments={organizedComments} /> */}
                  {testComments.map((testComment, index) => (
                    <div className="mb-[20px] text-[13px]">
                      <PostComment
                        postId={userPost.postId}
                        comment={testComment}
                      />
                      <button
                        key={index}
                        type="button"
                        onClick={() => {
                          if (index === showReply) {
                            setShowReply(undefined);
                          } else {
                            setShowReply(index);
                          }
                        }}
                        className="mb-[10px] text-[10px] font-medium text-[#8A1F21]"
                      >
                        {index === showReply ? '닫기' : '답글'}
                      </button>
                      {index === showReply && (
                        <div className="text-[12px]">
                          <PostCommentInput
                            postId={userPost.postId}
                            parentId={testComment.id}
                          />
                          <div className="mb-[30px] border-l-2 border-[#8A1F21] pl-6">
                            {testComment.children.map((reply, index) => (
                              <div className="mb-[10px]">
                                <PostComment
                                  postId={userPost.postId}
                                  comment={reply}
                                />
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </InfiniteScroll>
              </div>
            </div>
            <VoteForm />
          </div>
        </section>
      </main>
    </>
  );
}

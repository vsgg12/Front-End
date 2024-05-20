'use client';
import { useEffect, useMemo, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import Search from '@/app/components/Search';
import PostTag from '../PostTag';
import PostCommentInput from '../PostCommentInput';
import PostComment from '../PostComment';
import VoteForm from '../VoteForm';
import DOMPurify from 'dompurify';

import { IPostReadParams } from '@/app/types/post';

import VoteResult from '../VoteResult';
import { getPost } from '@/app/service/post';
import { getComments } from '@/app/service/comment';
import Loading from '@/app/components/Loading';
import Header from '@/app/layout/Header';
import { useRouter } from 'next/navigation';

export default function PostRead({
  params,
}: {
  params: IPostReadParams;
}): JSX.Element {
  const sanitizeHTML = (html: string) => {
    return DOMPurify.sanitize(html);
  };

  const router = useRouter();
  const [post, setPost] = useState<any>(null);
  const [comments, setComments] = useState<any[]>([]);
  const [displayedPosts, setDisplayedPosts] = useState<any[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [ingameInfos, setIngameInfos] = useState<any[]>([]);
  const [isVoted, setIsVoted] = useState(false);
  const [commentCreated, setCommentCreated] = useState(false);

  const fetchMoreData = () => {
    if (displayedPosts.length >= comments.length) {
      setHasMore(false);
      return;
    }

    setTimeout(() => {
      const newPosts = comments.slice(
        displayedPosts.length,
        displayedPosts.length + 5,
      );
      setDisplayedPosts([...displayedPosts, ...newPosts]);
    }, 500);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${year}.${month}.${day}. ${hours}:${minutes}`;
  };

  useEffect(() => {
    async function getOnePost() {
      try {
        const onePost = await getPost(Number(params.postId));
        if (onePost.resultMsg === 'OK') {
          setPost(onePost.postDTO);
          setIngameInfos(onePost.inGameInfo);
        }
      } catch (error) {
        console.error('Failed to fetch post:', error);
      }
    }

    async function getPostComments() {
      try {
        const postComments = await getComments(Number(params.postId));
        if (postComments.resultMsg === 'OK') {
          setComments(postComments.comments);
          const uploadedComments = [...comments].slice(0, 5);
          setDisplayedPosts(uploadedComments); // comments 가져온 후 displayedPosts 초기화
        } else {
          setDisplayedPosts([]);
        }
      } catch (error) {
        console.error('Failed to fetch comments:', error);
      }
    }

    getOnePost();
    getPostComments();
  }, [params.postId]);

  useEffect(() => {
    if (comments.length > 0) {
      setDisplayedPosts(comments);
    }
  }, [comments]);

  useEffect(() => {
    async function getPostComments() {
      try {
        const postComments = await getComments(Number(params.postId));
        if (postComments.resultMsg === 'OK') {
          setComments(postComments.comments);
          const uploadedComments = [...comments].slice(0, 5);
          setDisplayedPosts(uploadedComments); // comments 가져온 후 displayedPosts 초기화
        } else {
          setDisplayedPosts([]);
        }
      } catch (error) {
        console.error('Failed to fetch comments:', error);
      }
    }

    if (commentCreated) {
      console.log('댓글작성' + commentCreated);
      router.refresh();
      getPostComments();
      setCommentCreated(false);
    }
  }, [commentCreated, router]);

  useEffect(() => {
    setCommentCreated(false);
  }, []);

  const [showReply, setShowReply] = useState<number>();

  if (!post) {
    return (
      <div className="flex flex-col">
        <Search />
        <Loading />
      </div>
    );
  }

  return (
    <>
      <Header />
      <main>
        <Search />
        <section className="flex justify-center">
          <div className="w-4/5 max-w-[1400px]">
            <header className="mb-[44px] flex flex-row items-center justify-between">
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
              {post && (
                <div className=" p-content-mr p-content-rounded scroll relative mb-11 max-h-[1000px] w-2/3 bg-white  px-[63px] pb-[44px]">
                  <div className="sticky top-[-1px] bg-[#ffffff] pb-[30px] pt-[44px]">
                    <div className="flex w-full flex-row place-items-start justify-between font-medium">
                      <div className="p-content-s-mb text-[25px]">
                        {post?.title}
                      </div>
                      <div className="text-[12px] text-[#C8C8C8]">
                        조회수 {post.viewCount}
                      </div>
                    </div>
                    <div className="p-content-s-mb flex flex-row items-center justify-start font-medium">
                      <div className="mr-[10px] h-[32px] w-[32px] rounded-full bg-[#D9D9D9]"></div>
                      <div>
                        <div className="flex flex-row">
                          <div className=" mr-[6px] text-[12px] text-[#333333]">
                            {post.memberDTO.nickname}
                          </div>
                          <div className="text-[12px] text-[#909090]">등급</div>
                        </div>
                        <div className="text-[12px] text-[#C8C8C8]">
                          {formatDate(post.createdAt)}
                        </div>
                      </div>
                    </div>
                  </div>

                  {post.video.type === 'FILE' ? (
                    <video
                      controls
                      className="p-content-s-mb h-[50%] w-full overflow-hidden rounded-[30px]  "
                    >
                      <source src={post.video.url} type="video/webm" />
                    </video>
                  ) : (
                    <iframe
                      className="p-content-rounded p-content-s-mb h-[50%] w-full"
                      src="https://www.youtube.com/embed/TByv13Yq4I4"
                      title="롤 랭크 4:5 바론한타"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    ></iframe>
                  )}

                  {/* <PostTag /> */}
                  <div
                    dangerouslySetInnerHTML={{
                      __html: sanitizeHTML(post.content),
                    }}
                    className="w-full"
                  ></div>
                </div>
              )}
              <div className="p-content-rounded scroll relative mb-11 max-h-[1000px] w-1/3 bg-white px-[63px] pb-[44px]">
                <div className="sticky top-[-1px] bg-[#ffffff] pt-[44px]">
                  <div className="p-content-s-mb text-lg">댓글</div>
                  <div className="flex flex-row">
                    <PostCommentInput
                      postId={params.postId}
                      parentId={null}
                      setCommentCreated={setCommentCreated}
                    />
                  </div>
                </div>
                <InfiniteScroll
                  dataLength={displayedPosts.length}
                  next={fetchMoreData}
                  hasMore={hasMore}
                  loader={<Loading />}
                >
                  {displayedPosts.map((comment, index) => (
                    <div key={index} className="mb-[20px] text-[13px]">
                      <PostComment postId={params.postId} comment={comment} />
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
                            postId={params.postId}
                            parentId={comment.id}
                            setCommentCreated={setCommentCreated}
                          />
                          <div className="mb-[30px] border-l-2 border-[#8A1F21] pl-6">
                            {comment.children &&
                              comment.children.map((reply: any, index: any) => (
                                <div key={index} className="mb-[10px]">
                                  <PostComment
                                    postId={params.postId}
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
            {!isVoted && (
              <VoteForm setIsVoted={setIsVoted} ingameInfos={ingameInfos} />
            )}
            {isVoted && (
              <VoteResult postId={params.postId} ingameInfos={ingameInfos} />
            )}
            {/* <VoteResult postId={params.postId} ingameInfos={ingameInfos} /> */}
          </div>
        </section>
      </main>
    </>
  );
}

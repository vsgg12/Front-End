'use client';
import Link from 'next/link';
import PostTag from '../post/PostTag';
import { useEffect, useMemo, useState } from 'react';
import HomeNotVoted from './HomeNotVoted';
import HomeVoted from './HomeVoted';
import { getPostsSortedByDate, getPostsSortedByView } from '@/app/service/post';
import InfiniteScroll from 'react-infinite-scroll-component';
import DOMPurify from 'dompurify';

import { IoPersonCircleSharp } from 'react-icons/io5';
import Loading from '@/app/components/Loading';
import { useRouter } from 'next/navigation';
import { signIn, signOut, useSession } from 'next-auth/react';
import { checkToken, deleteToken } from '@/app/service/auth';
import LoadingFull from '@/app/components/LoadingFull';

export default function HomePostItems() {
  const router = useRouter();
  const { data: session } = useSession();

  const [sortOption, setSortOption] = useState('latest');
  const [isVoted, setIsVoted] = useState(false);
  const [posts, setPosts] = useState<any[]>([]);
  const [displayedPosts, setDisplayedPosts] = useState<any[]>([]);
  const [hasMore, setHasMore] = useState(true);

  const fetchMoreData = () => {
    if (displayedPosts.length >= posts.length) {
      setHasMore(false);
      return;
    }

    setTimeout(() => {
      const newPosts = posts.slice(
        displayedPosts.length,
        displayedPosts.length + 5,
      );
      setDisplayedPosts((prevPosts) => [...prevPosts, ...newPosts]);
    }, 500);
  };

  const removeImagesFromHTML = (html: string) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const images = doc.querySelectorAll('img');
    images.forEach((img) => img.remove());
    return doc.body.innerHTML;
  };

  const sanitizeHTML = (html: string) => {
    return DOMPurify.sanitize(html);
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
    async function getPostsByDates() {
      const postsSortedByDate = await getPostsSortedByDate();
      if (postsSortedByDate.resultMsg === 'OK') {
        const fetchedPosts = postsSortedByDate?.postDTO || [];
        setDisplayedPosts(fetchedPosts.slice(0, 5));
      } else if (postsSortedByDate?.postDTO?.length === 0) {
        return;
      } else {
        alert('게시글 로드에 오류가 생겼습니다.');
        console.log(postsSortedByDate);
        return;
      }
    }

    async function getPost() {
      const res = await checkToken();
      if (res) {
        await getPostsByDates();
      } else {
        router.push('/auth/signIn');
      }
    }
    getPost();
  }, []);

  return (
    <div>
      {displayedPosts.length === 0 ? (
        <div className="flex h-full w-full items-center justify-center">
          <div>등록된 게시글이 없습니다.</div>
        </div>
      ) : (
        <InfiniteScroll
          dataLength={displayedPosts.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={<Loading />}
        >
          {displayedPosts.map((post, index) => (
            <div
              key={index}
              className="p-content-pd p-content-mb h-fit w-full rounded-[1.875rem] bg-[#ffffff]"
            >
              <div className="flex w-full flex-row justify-between font-medium">
                <div className="p-content-s-mb text-[1.563rem]">
                  {post.title}
                </div>
                <div className="text-[0.75rem] text-[#C8C8C8]">
                  조회수 {post.viewCount}
                </div>
              </div>
              <div className="p-content-s-mb flex flex-row items-center justify-start font-medium">
                <IoPersonCircleSharp className="mr-[0.625rem] h-[2.5rem] w-[2.5rem] rounded-full  text-[#D9D9D9]" />
                <div>
                  <div className="flex flex-row">
                    <div className="mr-[0.625rem] text-[0.75rem] text-[#333333]">
                      {post?.memberDTO.nickname}
                    </div>
                    <div className="text-[0.75rem] text-[#909090]">
                      {post?.memberDTO.tier}
                    </div>
                  </div>
                  <div className="text-[0.75rem] text-[#C8C8C8]">
                    {formatDate(post.createdAt)}
                  </div>
                </div>
              </div>
              <div className="flex h-fit flex-row">
                {post.video.type === 'FILE' ? (
                  <video
                    muted
                    controls
                    className="p-content-rounded p-content-s-mb p-content-mr aspect-video h-[30vh] w-[50%] max-w-[37.875rem]"
                  >
                    <source src={post.video.url} type="video/webm" />
                  </video>
                ) : (
                  // <img
                  //   src={post?.video.url}
                  //   alt={post.title}
                  //   className="p-content-rounded p-content-s-mb p-content-mr aspect-video h-[30vh] w-[50%] max-w-[37.875rem]"
                  // ></img> :
                  <iframe
                    className="p-content-rounded p-content-s-mb p-content-mr aspect-video h-[30vh] w-[50%] max-w-[37.875rem]"
                    src={post.video.url}
                    title={post.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                )}
                <div className="flex w-full flex-col overflow-hidden">
                  <Link
                    href={`/post/${post.id}/`}
                    className="flex h-full flex-col"
                  >
                    <div
                      dangerouslySetInnerHTML={{
                        __html: sanitizeHTML(
                          removeImagesFromHTML(post.content),
                        ),
                      }}
                      className="mb-2 line-clamp-[8] h-[50%] cursor-pointer overflow-hidden text-ellipsis decoration-solid"
                    ></div>
                    <div className="relative flex h-[8.563rem] items-center justify-center rounded-[1.875rem] bg-gradient-to-b from-[#ADADAD]/30 to-[#DCDCDC]/30">
                      {/* {post?.isVote ? <HomeVoted /> : <HomeNotVoted />} */}
                      <HomeNotVoted />
                    </div>
                  </Link>
                </div>
              </div>
              <PostTag hashtags={post?.hashtagList} />
            </div>
          ))}
        </InfiniteScroll>
      )}
    </div>
  );
}

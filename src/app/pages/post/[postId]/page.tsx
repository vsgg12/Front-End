import Search from '@/app/components/Search';
import PostReturnBtn from '@/app/components/post/PostReturnBtn';
import PostHeader from '@/app/components/post/PostHeader';
import PostUploadInfo from '@/app/components/post/PostUploadInfo';
import PostTag from '@/app/components/post/PostTag';
import PostComment from '@/app/components/post/PostComment';
import PostCommentInput from '@/app/components/post/PostCommentInput';
import PostVotingChampList from '@/app/components/post/PostVotingChampList';
import PostVotingGraph from '@/app/components/post/PostVotingGraph';

import { IPostReadParams } from '@/app/types/post';

export default function PostRead({
  params,
}: {
  params: IPostReadParams;
}): JSX.Element {
  return (
    <>
      <main>
        <Search />
        <section className="flex justify-center">
          <div className="w-fit">
            <header className=" flex flex-row items-center justify-between">
              <PostReturnBtn>글 목록</PostReturnBtn>
              <div className="text-[12px] text-[#909090]">홈{' > '}게시글</div>
            </header>

            <div className="contnet-mb flex flex-row">
              <div className="p-content-pd p-content-mr p-content-rounded my-[44px] h-[1458px] w-[897px] bg-[#ffffff]">
                <PostHeader />
                <PostUploadInfo />
                <iframe
                  className="p-content-rounded p-content-s-mb h-[469px] w-[100%] "
                  src="https://www.youtube.com/embed/TByv13Yq4I4"
                  title="롤 랭크 4:5 바론한타"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
                <PostTag />
                <div className="p-content-s-mb h-[374px] w-[100%] bg-[#D9D9D9]">
                  사진
                </div>
                <div className="whitespace-pre-wrap">
                  8분26초에 열린 바론 한타 0/12/0인 미드가 참여해야했을까요
                  어쩌고 저쩌고 본문내용 들어가기 퀸하고 싸움 어쩌고 저쩌고
                  본문내용 들어가기 어쩌고 저쩌고 본문내용 들어가기 어쩌고
                  저쩌고 본문내용 들어가기어쩌고 저쩌고 본문내용 들어가기 어쩌고
                  저쩌고 본문내용 들어가기 어쩌고 저쩌고 본문내용 들어가기
                  어쩌고 저쩌고 본문내용 들어가기 어쩌고 저쩌고 본문내용
                  들어가기 8분26초에 열린 바론 한타 0/12/0인 미드가
                  참여해야했을까요 어쩌고 저쩌고 본문내용 들어가기 퀸하고 싸움
                  어쩌고 저쩌고 본문내용 들어가기 어쩌고 저쩌고 본문내용
                  들어가기 어쩌고 저쩌고 본문내용 들어가기어쩌고 저쩌고 본문내용
                  들어가기 어쩌고 저쩌고 본문내용 들어가기 어쩌고 저쩌고
                  본문내용 들어가기 어쩌고 저쩌고 본문내용 들어가기 어쩌고
                  저쩌고 본문내용 들어가기 8분2초에 열린 바론 한타 0/12/0인
                  미드가 참여해야했을까요 어쩌고 저쩌고 본문내용 들어가기 퀸하고
                  싸움 어쩌고 저쩌고 본문내용 들어가기 어쩌고 저쩌고 본문내용
                  들어가기 어쩌고 저쩌고 본문내용 들어가기어쩌고 저쩌고 본문내용
                  들어가기 어쩌고 저쩌고 본문내용 들어가기 어쩌고 저쩌고
                  본문내용 들어가기 어쩌고 저쩌고 본문내용 들어가기 어쩌고
                  저쩌고
                </div>
              </div>

              <div className="p-content-pd p-content-rounded scroll my-[44px] h-[1458px] w-[501px] bg-[#ffffff]">
                <div>
                  <div className="p-content-s-mb text-[16px]">댓글</div>
                  <div className="flex flex-row">
                    <div className="mr-[10px] h-[38px] w-[38px] rounded-full bg-[#D9D9D9]"></div>
                    <PostCommentInput />
                  </div>
                </div>
                <PostComment />
                <div className="border-l-2 border-[#8A1F21] pl-[20px]">
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

            <div className="p-content-pd p-content-rounded p-last-mb flex h-[407px] w-[1440px] flex-col bg-[#ffffff]">
              <div className="relative flex w-[100%] flex-row">
                <PostVotingChampList />
                <PostVotingGraph />
              </div>
              <div className="flex justify-end">
                <button className="h-[37px] w-[112px] rounded-[150px] bg-[#8A1F21] text-[15px] text-white hover:bg-red-800">
                  제출하기
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

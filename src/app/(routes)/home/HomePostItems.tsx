import Link from 'next/link';
import PostHeader from '../post/PostHeader';
import PostUploadInfo from '../post/PostUploadInfo';
import PostVotingChampList from '../post/PostVotingChampList';
import PostVotingGraph from '../post/PostVotingGraph';
import PostTag from '../post/PostTag';

export default function HomePostItems() {
  return (
    <>
      <Link href={`/post/${1}/`}>
        <div className="p-content-pd p-content-mb h-fit w-[1440px] rounded-[30px] bg-[#ffffff]">
          <PostHeader />
          <PostUploadInfo />
          <div className="flex flex-row">
            <iframe
              className="p-content-rounded p-content-s-mb p-content-mr h-[340px] w-[37.875rem]"
              src="https://www.youtube.com/embed/TByv13Yq4I4"
              title="롤 랭크 4:5 바론한타"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
            <div className="flex w-[50%] flex-col">
              <div className="p-content-mb cursor-pointer decoration-solid hover:underline">
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
              </div>
              <div className="to-[#DCDCDC} relative h-[137px] rounded-[30px] bg-gradient-to-b from-[#ADADAD]/30 to-[#DCDCDC]/30 ">
                <div className="absolute right-[35%] top-5 flex h-[6rem] w-[13rem] flex-col items-center justify-center rounded-[5px] bg-[#ffffff] p-2 shadow-md">
                  <div className="mb-2 text-center text-[10px]">
                    판결이 궁금하시다구요? <br />
                    판결에 참여하고, 결과를 확인하세요
                  </div>
                  <button className="w-[10rem] rounded-[5px] bg-[#8A1F21] px-[10px] py-[5px] text-[10px] text-white">
                    지금 바로 판결하기
                  </button>
                </div>
                <div className="flex flex-row items-center p-[25px] text-[10px]">
                  <PostVotingChampList />
                  <PostVotingGraph />
                </div>
                <div className="h-[137px] rounded-[30px]">
                  <div className="flex flex-row items-center p-[25px] text-[10px]  ">
                    <div></div>
                    <PostVotingChampList />
                    <PostVotingGraph />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <PostTag />
        </div>
      </Link>
    </>
  );
}

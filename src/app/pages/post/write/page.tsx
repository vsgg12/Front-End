import PostReturnBtn from '@/app/components/post/PostReturnBtn';
import PostVidUploadTab from '@/app/components/post/PostVidUploadTab';
import { IoLinkOutline } from 'react-icons/io5';

export default function PostWrite() {
  const items = [
    {
      title: '파일 불러오기',
      content: (
        <div className="flex flex-row items-center justify-center">
          <div>파일을 끌어오거나 클릭 후 업로드 하세요</div>
        </div>
      ),
    },
    {
      title: '링크로 불러오기',
      content: (
        <div className="flex flex-row items-center ">
          <div className="flex flex-row items-center justify-center">
            <IoLinkOutline className="mr-[10px] text-[30px]" />
            링크를 붙여 넣어주세요
          </div>
        </div>
      ),
    },
    {
      title: '썸네일 업로드',
      content: (
        <div className="flex flex-row items-center justify-center">
          <div>파일을 끌어오거나 클릭 후 업로드 하세요</div>
        </div>
      ),
    },
  ];

  return (
    <>
      <main>
        <section className="flex justify-center">
          <div className="w-fit">
            <header className=" flex flex-row items-center justify-between">
              <PostReturnBtn>뒤로 가기</PostReturnBtn>
              <div className="text-[12px] text-[#909090]">홈{' > '}게시글</div>
            </header>

            <div className="p-content-pd p-content-rounded h-[2500px] w-[1440px] bg-[#ffffff]">
              <div>
                <PostVidUploadTab items={items} />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

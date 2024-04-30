export default function PostComment() {
  return (
    <>
      <div className="my-[30px]">
        <div className="flex flex-row font-medium">
          <div className="p-content-ss-mb mr-[6px] text-[10px] text-[#333333]">
            @ 방구쟁이 뿡뿡이
          </div>
          <div className="text-[10px] text-[#666666]">등급</div>
        </div>
        <div className="p-content-ss-mb text-[14px]">
          댓글 달기 선플을 달아서 클린한 인터넷 문화를 만들어요 댓글 참여는 투표
          참여 후 가능
        </div>
        <button className="text-[10px] font-medium text-[#8A1F21]">답글</button>
      </div>
    </>
  );
}

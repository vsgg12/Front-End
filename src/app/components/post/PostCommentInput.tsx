export default function PostCommentInput() {
  return (
    <>
      <div className="grow">
        <textarea className="p-content-ss-mb h-[35px] w-[100%] resize-none overflow-hidden rounded-[20px] border-2 border-[#8A1F21] px-[10px] py-[5px] text-[13px] focus:outline-none" />
        <div className="p-content-s-mr flex cursor-pointer flex-row justify-end text-[12px] text-[#8A1F21]">
          <div className="mr-[6px]">등록</div>
          <i className="bi bi-arrow-up-circle"></i>
        </div>
      </div>
    </>
  );
}

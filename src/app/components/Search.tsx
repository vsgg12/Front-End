export default function Search(): JSX.Element {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div className="mb-[32px] font-['SBAggroB'] text-[52px] text-[#8A1F21] ">
          VS.GG
        </div>
        <div>
          <div className=" flex flex-row">
            <input
              className="h-[38px] w-[358px] rounded-[43px] border-2 border-[#8A1F21] px-[30px] text-[13px] focus:outline-none"
              placeholder="제목 혹은 내용 검색"
            />
          </div>
        </div>
      </div>
    </>
  );
}

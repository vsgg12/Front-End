export default function PostVotingGraph() {
  return (
    <>
      <div className="flex grow flex-col items-center">
        <div className="mb-[80px] text-[20px]">이 게임의 과실의 몇 대 몇~?</div>
        <div className="p-content-s-mb flex flex-row">
          <div className="p-voting-number-element text-[#000000] ">2 </div>
          <div className="p-voting-number-element "> : </div>
          <div className="p-voting-number-element text-[#9D2A2C]">2 </div>
          <div className="p-voting-number-element "> : </div>
          <div className="p-voting-number-element text-[#CACACA]">2 </div>
          <div className="p-voting-number-element "> : </div>
          <div className="p-voting-number-element text-[#656565] ">2 </div>
          <div className="p-voting-number-element "> : </div>
          <div className="p-voting-number-element text-[#6C0000] ">2 </div>
        </div>
        <div className="p-content-s-mb flex flex-row">
          <button className="p-voing-bar-element rounded-l-[30px] bg-[#000000]"></button>
          <button className="p-voing-bar-element bg-[#000000]"></button>
          <button className="p-voing-bar-element"></button>
          <button className="p-voing-bar-element"></button>
          <button className="p-voing-bar-element"></button>
          <button className="p-voing-bar-element"></button>
          <button className="p-voing-bar-element"></button>
          <button className="p-voing-bar-element"></button>
          <button className="p-voing-bar-element"></button>
          <button className="p-voing-bar-element rounded-r-[30px]"></button>
        </div>
        <div className="text-[12px] text-[#7B7B7B]">
          [챔피언명]의 과실을 선택해주세요
        </div>
      </div>
    </>
  );
}

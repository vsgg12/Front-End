const nickNameMock = ['junyoung'];

export default function SignUpNickName() {
  return (
    <div className="flex flex-col gap-2">
      <p>닉네임</p>
      <div className="flex gap-2">
        <input
          type="text"
          className="rounded-full border-2 border-[#8A1F21] px-5 py-3 focus:outline-none"
        />
        <button className="rounded-full border-2 border-[#8A1F21] p-1 px-4 py-2 font-bold text-[#8A1F21]">
          중복확인
        </button>
      </div>
      <span className="pl-5 text-xs text-[#8A1F21]">중복된 닉네임입니다.</span>
    </div>
  );
}

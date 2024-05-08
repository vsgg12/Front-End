export default function SignUpPhone() {
  return (
    <div className="flex flex-col gap-2">
      <p>
        전화번호 <span className="text-red-500">*</span>
      </p>
      <div className="flex gap-2">
        <input
          type="text"
          className="rounded-full border-2 border-[#8A1F21] px-5 py-3 focus:outline-none"
        />
        <button className="rounded-full border-2 border-black px-5 py-3 font-bold">
          인증요청
        </button>
      </div>
      <div className="flex gap-2">
        <input
          type="text"
          className="block rounded-full border-2 border-[#8A1F21] px-5 py-3 focus:outline-none"
        />
        <button className="rounded-full border-2 bg-[#8A1F21] px-5 py-3 font-bold text-white">
          인증완료
        </button>
      </div>
      <span className="pl-5 text-xs text-[#8A1F21]">
        잘못된 인증번호입니다.
      </span>
    </div>
  );
}

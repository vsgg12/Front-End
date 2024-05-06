export default function SignUpEmail() {
  return (
    <div className="flex flex-col gap-2">
      <p>이메일</p>
      <input
        type="text"
        disabled
        value={'qwer1234@naver.com'}
        className="rounded-full bg-[#D9D9D9] px-5 py-3 text-[#7B7B7B]"
      />
    </div>
  );
}

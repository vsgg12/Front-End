export default function SignUpTerm() {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex items-center gap-5">
        <input type="checkbox" className="size-6 accent-[#8A1F21]" />
        <div className="flex flex-col gap-1">
          <p>만 14세 이상입니다. (필수)</p>
          <p className="text-xs text-[#8A1F21]">
            만 14세 이상만 가입이 가능합니다.
          </p>
        </div>
      </div>
      <div className="flex items-center gap-5">
        <input type="checkbox" className="size-6 accent-[#8A1F21]" />
        <p>
          <span className="font-bold text-[#8A1F21]">이용약관</span>에
          동의합니다. (필수)
        </p>
      </div>
      <div className="flex items-center gap-5">
        <input type="checkbox" className="size-6 accent-[#8A1F21]" />
        <p>
          <span className="font-bold text-[#8A1F21]">개인정보처리방침</span>에
          동의합니다. (필수)
        </p>
      </div>
      <div className="flex items-center gap-5">
        <input type="checkbox" className="size-6 accent-[#8A1F21]" />
        <p>
          서비스 홍보 및 마케팅 목적의{' '}
          <span className="font-bold text-[#8A1F21]">개인정보처리방침</span>에
          동의합니다. (선택)
        </p>
      </div>
      <div className="h-0.5 w-full bg-[#D9D9D9]"></div>
      <div className="flex items-center gap-5">
        <input type="checkbox" className="size-6 accent-[#8A1F21]" />
        <p>모두 동의합니다.</p>
      </div>
    </div>
  );
}

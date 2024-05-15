'use client';
import Logo from '@/app/components/Logo';
import PostForm from '../PostForm';

export default function PostWrite() {
  return (
    <>
      <main>
        <div className="flex items-center justify-center p-[100px]">
          <Logo />
        </div>
        <section className="flex justify-center">
          <div className="w-4/5 max-w-[1400px]">
            <header className="mb-[44px] flex flex-row items-center justify-between">
              <button
                onClick={() => {
                  history.back();
                }}
                className=" box-content flex h-[34px] w-[92px] items-center justify-center rounded-[150px] bg-[#8A1F21] text-white"
              >
                <div className="text-[13px]">뒤로가기</div>
              </button>
              <div className="text-[12px] text-[#909090]">홈{' > '}게시글</div>
            </header>
            <PostForm />
          </div>
        </section>
      </main>
    </>
  );
}

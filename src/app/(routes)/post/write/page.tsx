'use client';
import Logo from '@/app/components/Logo';
import PostReturnBtn from '../PostReturnBtn';
import PostForm from '../PostForm';

export default function PostWrite() {
  // useEffect(() => {
  //   if (status === 'loading') return;
  //   if (!session) {
  //     alert('로그인이 필요합니다');
  //     // signIn();
  //   }
  //   console.log('글쓰기 페이지 렌더');
  // }, [status, session]);

  // if (!session) return null;

  return (
    <>
      <main>
        <div className="flex items-center justify-center p-[100px]">
          <Logo />
        </div>
        <section className="flex justify-center">
          <div className="w-fit">
            <header className="mb-[44px] flex flex-row items-center justify-between">
              <PostReturnBtn>뒤로 가기</PostReturnBtn>
              <div className="text-[12px] text-[#909090]">홈{' > '}게시글</div>
            </header>
            <PostForm />
          </div>
        </section>
      </main>
    </>
  );
}

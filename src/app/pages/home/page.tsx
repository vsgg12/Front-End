import Link from 'next/link';

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <Link href="pages/post/read">
        <button className="btn btn-hover">게시글 페이지 이동</button>
      </Link>

      <Link href="/pages/auth/signIn">
        <button className="btn btn-hover">로그인 페이지 이동</button>
      </Link>
    </>
  );
}

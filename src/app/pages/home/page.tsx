import Link from 'next/link';

export default function Home(): JSX.Element {
  return (
    <>
      <h1>Home</h1>
      <a href={`/pages/post/${1}/`}>
        <button className="btn btn-hover">게시글 페이지 이동</button>
      </a>

      <a href={`/pages/post/write`}>
        <button className="btn btn-hover">글쓰기 페이지 이동</button>
      </a>

      <Link href="/pages/auth/signIn">
        <button className="btn btn-hover">로그인 페이지 이동</button>
      </Link>
    </>
  );
}

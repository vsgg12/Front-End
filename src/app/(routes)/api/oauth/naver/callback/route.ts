import { NextRequest, NextResponse } from 'next/server';
import cookie from 'cookie';

export async function GET(req: NextRequest) {
  const cookies = cookie.parse(req.headers.get('cookie') || '');

  const userInfoJson = cookies.userInfo;

  if (userInfoJson) {
    const userInfo = JSON.parse(decodeURIComponent(userInfoJson));
    const {
      token,
      isMemberYn,
      isMobileYn,
      nickname,
      email,
      profileImage,
      mobile,
      gender,
      age,
    } = userInfo;

    if (
      token &&
      isMemberYn &&
      isMobileYn &&
      nickname &&
      email &&
      profileImage &&
      mobile &&
      gender &&
      age
    ) {
      // 여기서 쿠키를 삭제하거나 필요한 작업을 수행할 수 있습니다.
      const response = NextResponse.redirect('/'); // 리다이렉트할 페이지로 변경
      // response.cookies.set('userInfo', '', { maxAge: -1 }); // 쿠키 삭제
      return response;
    }
  }

  return NextResponse.redirect('/auth/signIn'); // 유효하지 않은 경우 다시 로그인 페이지로 리다이렉트
}

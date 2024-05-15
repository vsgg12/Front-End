import { NextRequest, NextResponse } from 'next/server';
import { NAVER_CLIENT_ID, NAVER_CLIENT_SECRET } from '@/app/constants';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const code = searchParams.get('code');
  const state = searchParams.get('state');

  if (!code || !state) {
    return NextResponse.redirect('/error'); // 오류 페이지로 리디렉션
  }

  try {
    // 네이버 API로 액세스 토큰 요청
    const tokenResponse = await fetch(
      `https://nid.naver.com/oauth2.0/token?grant_type=authorization_code&client_id=${NAVER_CLIENT_ID}&client_secret=${NAVER_CLIENT_SECRET}&code=${code}&state=${state}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    const tokenData = await tokenResponse.json();

    if (!tokenResponse.ok || !tokenData.access_token) {
      return NextResponse.redirect('/error'); // 오류 페이지로 리디렉션
    }

    // 사용자 정보 요청
    const userInfoResponse = await fetch(
      'https://openapi.naver.com/v1/nid/me',
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${tokenData.access_token}`,
        },
      },
    );

    const userInfo = await userInfoResponse.json();

    if (!userInfoResponse.ok || !userInfo.response) {
      return NextResponse.redirect('/error'); // 오류 페이지로 리디렉션
    }

    // 세션 설정 또는 사용자 정보 저장 로직 추가

    // 로그인 성공 후 리디렉션할 페이지
    const redirectTo = '/dashboard'; // 리디렉션할 페이지 경로

    return NextResponse.redirect(redirectTo);
  } catch (error) {
    return NextResponse.redirect('/error'); // 오류 페이지로 리디렉션
  }
}

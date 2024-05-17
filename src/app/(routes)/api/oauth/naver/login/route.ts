import { NextRequest, NextResponse } from 'next/server';
import { NEXT_AUTH_API_URL } from '@/app/constants';

export async function GET(req: NextRequest) {
  const redirectUri = `http://localhost:3000/api/auth/callback`;
  const clientUrl = `${NEXT_AUTH_API_URL}/oauth2/authorization/naver?redirect_uri=${encodeURIComponent(redirectUri)}&mode=login`;

  // 리다이렉트 URL을 JSON으로 응답
  // return NextResponse.json({ redirectUrl: clientUrl });
  return NextResponse.redirect(clientUrl);
}

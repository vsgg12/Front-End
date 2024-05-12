// /api/oauth/naver/login/route.ts
import { redirect } from 'next/navigation';
import { NextRequest, NextResponse } from 'next/server';
import { NEXT_AUTH_API_URL } from '@/app/constants';

export async function GET(req: NextRequest) {
  const redirectUri = 'http://localhost:3000/api/auth/callback/naver';
  const clientUrl = `${NEXT_AUTH_API_URL}/oauth2/authorization/naver?redirect_uri=${encodeURIComponent(redirectUri)}&mode=login`;

  // return NextResponse.redirect(clientUrl);
  redirect(clientUrl);
}

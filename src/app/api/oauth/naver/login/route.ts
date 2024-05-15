import { NextRequest, NextResponse } from 'next/server';
import { NEXT_AUTH_API_URL } from '@/app/constants';

export async function GET(req: NextRequest) {
  const redirectUri = `http://localhost:3000/api/auth/callback`;

  const clientUrl = `${NEXT_AUTH_API_URL}/oauth2/authorization/naver?redirect_uri=${encodeURIComponent(redirectUri)}&mode=login`;

  // Redirect the user to Naver's OAuth2 authorization endpoint
  return NextResponse.redirect(clientUrl);
}

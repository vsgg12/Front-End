// /api/oauth/naver/login/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const redirectUri = 'http://localhost:3000/api/auth/callback/naver';
  const clientUrl = `http://ec2-13-236-153-246.ap-southeast-2.compute.amazonaws.com/oauth2/authorization/naver?redirect_uri=${encodeURIComponent(redirectUri)}&mode=login`;

  return NextResponse.redirect(clientUrl);
}

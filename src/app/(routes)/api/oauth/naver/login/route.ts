// src/app/api/auth/naver.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { NextRequest, NextResponse } from 'next/server';
import { redirect } from 'next/navigation';

export async function GET(req: NextRequest, res: NextResponse) {
  const redirectUri = 'http://localhost:3000/api/auth/callback/naver'; // 콜백 URL
  const clientUrl = `http://ec2-13-236-153-246.ap-southeast-2.compute.amazonaws.com/oauth2/authorization/naver?redirect_uri=${encodeURIComponent(redirectUri)}&mode=login`;

  if (res) {
  } else {
  }

  redirect(clientUrl);
}

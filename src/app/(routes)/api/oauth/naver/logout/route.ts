// src/app/api/auth/naver.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { redirect } from 'next/navigation';

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  const redirectUri = 'https://nid.naver.com/nidlogin.logout'; // 콜백 URL
  const clientUrl = `http://localhost:3000/home`;

  redirect(redirectUri);
}

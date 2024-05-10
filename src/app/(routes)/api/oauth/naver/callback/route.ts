// src/app/api/auth/callback/naver.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { redirect } from 'next/navigation';

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  const { code, state } = req.query; // 네이버에서 반환된 데이터

  try {
    // 토큰 요청 및 사용자 정보 요청 로직
    // 성공 시 리디렉션
    redirect('/');
  } catch (error) {
    console.error('Authentication failed:', error);
    redirect('/login?error=authFailed');
  }
}

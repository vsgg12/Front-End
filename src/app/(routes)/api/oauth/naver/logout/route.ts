import type { NextApiRequest, NextApiResponse } from 'next';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest, res: NextResponse) {
  const redirectUri = 'https://nid.naver.com/nidlogin.logout'; // 콜백 URL
  const clientUrl = `http://localhost:3000/home`;

  const logoutUrl = `${redirectUri}?retUrl=${encodeURIComponent(clientUrl)}`;

  return NextResponse.redirect(logoutUrl);
}

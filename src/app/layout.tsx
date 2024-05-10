import { Inter } from 'next/font/google';
import './globals.css';
import Header from './layout/Header';
import Footer from './layout/Footer';
import 'react-quill/dist/quill.snow.css';

import AuthSession from './api/auth/[...nextauth]/AuthSession';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'VS.GG',
  description: '리그 오브 레전드 과실 판결 커뮤니티',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="root-bg">
      <head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/react-quill@1.3.3/dist/quill.snow.css"
        />
        {/* <Script
          defer
          src="https://cdn.swygbro.com/public/widget/swyg-widget.js"
        ></Script> */}
      </head>
      <body className={inter.className}>
        {/* <AuthSession> */}
        <Header />
        {children}
        <Footer />
        {/* </AuthSession> */}
      </body>
    </html>
  );
}

import { Inter } from 'next/font/google';
import './globals.css';
import Header from './layout/Header';
import Footer from './layout/Footer';
import AuthSession from './api/auth/[...nextauth]/AuthSession';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'VS.GG',
  description: '리그 오브 레전드 과실 판결 커뮤니티',
  content: '',
  openGraph: {},
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="root-bg">
      <head>
        <script
          defer
          src="https://cdn.swygbro.com/public/widget/swyg-widget.js"
        ></script>
        <meta
          http-equiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        ></meta>
      </head>
      <body className={inter.className}>
        <AuthSession>
          <Header />
          {children}
          <Footer />
        </AuthSession>
      </body>
    </html>
  );
}

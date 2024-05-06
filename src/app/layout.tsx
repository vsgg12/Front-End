import { Inter } from 'next/font/google';
import './globals.css';
import Header from './layout/Header';
import Footer from './layout/Footer';
import AuthSession from './api/auth/[...nextauth]/AuthSession';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'VS.GG',
  description: 'Generated by Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="root-bg">
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



import HeaderTop from '@/components/HeaderTop';
import HeaderMain from '@/components/HeaderMain';
import Navbar from '@/components/Navbar';
import MobNavbar from '@/components/MobNavbar';
import './globals.css'; 
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';


import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



const inter = Inter({ subsets: ['latin'] });


export const metadata: Metadata = {
  title: 'Shopping Website',
  description: 'A modern shopping experience powered by Next.js',
  openGraph: {
    title: 'Shopping Website',
    description: 'Find the best products on our shopping site.',
    url: 'https://example.com',
    images: [
      {
        url: '/og-image.png',
        width: 800,
        height: 600,
        alt: 'Shopping Website OG Image',
      },
    ],
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
    
      </head>
      <body className={inter.className}>
  
        <HeaderTop />
        <HeaderMain />
        <Navbar />
        <MobNavbar />

        <main>{children}</main>

      </body>
    </html>
  );
}

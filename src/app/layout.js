import './globals.css';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });
import Script from 'next/script';

export const metadata = {
  title: 'Slots',
  description:
    'where convenience meets efficiency in the world of appointment booking.y',
};

export default function RootLayout({ children }) {
  return (
    <>
      <html lang='en'>
        <body className={inter.className}>{children}</body>
      </html>
      <Script src='https://checkout.razorpay.com/v1/checkout.js' />
    </>
  );
}

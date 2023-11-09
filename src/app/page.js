import BuyProduct from '@/components/razorpay/BuyProduct';
import Image from 'next/image';

export default function Home() {
  return (
    <main className='w-full h-screen'>
      <BuyProduct />
    </main>
  );
}

'use client';
import React, { Suspense } from 'react';
import Buy from './Buy';
import { useRouter } from 'next/navigation';
import Loading from '@/app/loading';
import {
  COMPANY_PHONE_NO,
  COMPANY_PHONE_GMAIL,
  COMPANY_NAME,
} from '../../../constants';

const BuyProduct = () => {
  const router = useRouter();

  const makePayment = async ({
    productId = null,
    productName = 'na',
    userId = 'na',
    amount = '200',
  }) => {
    console.log('xxxxxxx');
    // "use server"
    const key = process.env.NEXT_PUBLIC_RAZORPAY_API_KEY;
    console.log(key);
    // Make API call to the serverless API
    const data = await fetch('/api/razorpay', {
      method: 'POST',
      body: JSON.stringify({
        amount,
        userId,
        productId,
        productName,
      }),
    });
    console.log('data', data);
    const { order } = await data.json();
    console.log(order.id);
    const options = {
      key: key,
      name: 'slots',
      currency: order.currency,
      amount: order.amount,
      order_id: order.id,
      description: `${COMPANY_NAME} RazorPay Integration`,

      handler: async function (response) {
        console.log(response);

        const data = await fetch('/api/paymentverify', {
          method: 'POST',

          body: JSON.stringify({
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_order_id: response.razorpay_order_id,
            razorpay_signature: response.razorpay_signature,
          }),
        });

        const res = await data.json();

        console.log('response verify==', res);

        if (res?.message == 'success') {
          console.log('redirected.......');
          router.push(
            '/paymentsuccess?paymentid=' + response.razorpay_payment_id
          );
          setTimeout(() => {
            router.replace('/');
          }, 3000);
        }
      },
      prefill: {
        name: COMPANY_NAME,
        email: COMPANY_PHONE_GMAIL,
        contact: COMPANY_PHONE_NO,
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();

    paymentObject.on('payment.failed', function (response) {
      alert('Payment failed. Please try again. Contact support for help');
    });
  };

  return (
    <>
      <Suspense fallback={<Loading />}>
        <Buy makePayment={makePayment} />
      </Suspense>
    </>
  );
};

export default BuyProduct;

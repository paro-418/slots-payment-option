import { NextResponse } from 'next/server';
import Razorpay from 'razorpay';
import shortid from 'shortid';

const instance = new Razorpay({
  key_id: process.env.NEXT_PUBLIC_RAZORPAY_API_KEY,
  key_secret: process.env.NEXT_PUBLIC_RAZORPAY_APT_SECRET,
});

export async function POST(req) {
  const body = await req.json();
  const { amount, productId, productName, userId } = body;
  const payment_capture = 1;
  const options = {
    amount: (Number(amount) * 100).toString(),
    currency: 'INR',
    receipt: shortid.generate(),
    payment_capture,
    notes: {
      // These notes will be added to your transaction. So you can search it within their dashboard.
      // Also, it's included in webhooks as well. So you can automate it.
      paymentFor: `${productId} - ${productName}`,
      userId,
      productId,
    },
  };

  const order = await instance.orders.create(options);
  return NextResponse.json({ msg: 'success', order });
}

// export async function POST(req) {
//   const body = await req.json();

//   return NextResponse.json({ msg: body });
// }

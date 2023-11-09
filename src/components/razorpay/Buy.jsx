'use client';
import React, { useState } from 'react';

const Buy = ({ makePayment }) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className='flex flex-col items-center justify-center h-full w-full'>
      <h1 className='text-2xl'>Slots payment integration</h1>
      <button
        onClick={() => {
          makePayment({
            productId: 'example_ebook',
            productName: 'shoes',
            userId: 'user123',
            amount: 500,
          });
        }}
        disabled={isLoading}
        className={`bg-blue-500 text-white font-semibold mt-20 py-2 px-4 rounded ${
          isLoading ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      >
        {isLoading ? 'Processing...' : 'Pay Now'}
      </button>
    </div>
  );
};

export default Buy;

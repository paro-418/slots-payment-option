// components/AboutUs.js

export const metadata = {
  title: 'Slots:About Us',
  description:
    'where convenience meets efficiency in the world of appointment booking.y',
};

const AboutUs = () => {
  return (
    <div className='w-full text-black h-screen p-10 bg-gray-200 rounded-md shadow-md'>
      <h1 className='text-3xl font-bold mb-6'>About Us: Slots</h1>

      <p className='mb-4'>
        Welcome to Slots, where convenience meets efficiency in the world of
        appointment booking. At Slots, our goal is simple: to provide you with a
        seamless and user-friendly platform to manage your appointments
        effortlessly.
      </p>

      <h2 className='text-2xl font-bold mb-4'>Who We Are:</h2>

      <p className='mb-4'>
        Slots is more than just an app; we're a dedicated team passionate about
        simplifying your scheduling experience. We've crafted a platform that
        connects users with service providers, making appointment management a
        breeze.
      </p>

      <h2 className='text-2xl font-bold mb-4'>What Sets Us Apart:</h2>

      <ul className='list-disc ml-6 mb-4'>
        <li>
          <strong>User-Centric Approach:</strong> Our intuitive design puts you
          in control, ensuring a straightforward and stress-free booking
          process.
        </li>
        <li>
          <strong>Empowering Service Providers:</strong> We're not just here for
          users. Slots provides service providers with tools to efficiently
          manage their appointments and focus on delivering top-notch service.
        </li>
        <li>
          <strong>Transparent and Fair:</strong> We believe in transparent
          pricing. Slots ensures clear communication and fair appointment fees,
          setting the standard for straightforward transactions.
        </li>
      </ul>

      <h2 className='text-2xl font-bold mb-4'>Our Values:</h2>

      <ul className='list-disc ml-6 mb-4'>
        <li>
          <strong>Efficiency:</strong> We value your time. Slots is designed to
          streamline the appointment process, so you can spend less time
          scheduling and more time doing what matters.
        </li>
        <li>
          <strong>Reliability:</strong> Count on Slots for a reliable platform
          that meets your appointment needs, every time.
        </li>
        <li>
          <strong>Innovation:</strong> We stay ahead with innovative solutions,
          continually enhancing your booking experience.
        </li>
      </ul>

      <p className='mb-4'>
        <strong>Join the Slots Community:</strong> Whether you're a user seeking
        hassle-free appointments or a service provider aiming for efficiency,
        Slots welcomes you to a community that redefines scheduling. Let's make
        every appointment a smooth and enjoyable experience together.
      </p>

      <p>
        Thank you for choosing Slots. Your time matters, and we're here to make
        managing appointments a breeze.
      </p>
    </div>
  );
};

export default AboutUs;

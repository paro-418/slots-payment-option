// components/PrivacyPolicy.js
import {
  COMPANY_PHONE_NO,
  COMPANY_PHONE_GMAIL,
  COMPANY_NAME,
} from '../../../constants';
const PrivacyPolicy = () => {
  return (
    <div className='w-full text-black mx-auto mt-8 p-6 bg-white rounded-md shadow-md'>
      <h1 className='text-3xl font-bold mb-6'>Privacy Policy</h1>

      <p className='text-gray-700 mb-4'>Effective Date: [10/11/23]</p>

      <p className='mb-4'>
        Welcome to Slots, the appointment booking application. Your privacy is
        important to us, and we are committed to protecting the information you
        share with us. This Privacy Policy outlines the types of information we
        collect and how we use, share, and protect that information.
      </p>

      <h2 className='text-2xl font-bold mb-4'>Information We Collect:</h2>

      <ul className='list-disc ml-6 mb-4'>
        <li className='font-semibold'>Customer&apos;s Basic Information:</li>
        <ul className='list-disc ml-6 mb-2'>
          <li>Name</li>
          <li>Phone number</li>
          <li>Email address</li>
        </ul>
        <li className='font-semibold'>User&apos;s Location</li>
        <p className='ml-6 mb-4'>
          We may collect your device&apos;s location information to provide
          location-based services, such as finding nearby service providers.
        </p>

        <li className='font-semibold'>
          Notification / GPS Data and Permissions:
        </li>
        <p className='ml-6 mb-4'>
          We may request and use notification and GPS data to send you relevant
          updates, reminders, and notifications related to your appointments.
        </p>
        <li className='font-semibold'>User&apos;s Media::</li>
        <p className='ml-6 mb-4'>
          We may collect media files (such as photos or videos) that you choose
          to upload or share within the application for appointment-related
          purposes.
        </p>
      </ul>
      <h2 className='text-2xl font-bold mb-4'>How We Use Your Information:</h2>

      <ul>
        <li className='font-semibold'> Provide Services:</li>
        <p className='ml-6 mb-4'>
          We use your basic information to facilitate appointment bookings and
          provide you with the requested services.
        </p>
        <li className='font-semibold'>Location-Based Services:</li>
        <p className='ml-6 mb-4'>
          Your location information helps us offer location-based features, such
          as finding nearby service providers and optimizing appointment
          scheduling.
        </p>
        <li className='font-semibold'>Notifications and Updates:</li>
        <p className='ml-6 mb-4'>
          We use notification and GPS data to send you timely updates,
          reminders, and relevant information about your appointments
        </p>
        <li className='font-semibold'>User&apos;s Media:</li>
        <p className='ml-6 mb-4'>
          Media files shared within the application are used for
          appointment-related purposes, such as sharing visual information with
          service providers.
        </p>
        <li className='font-semibold'>Service Providers</li>
        <p className='ml-6 mb-4'>
          We may share your basic information with service providers to
          facilitate appointment bookings and service delivery
        </p>
        <li className='font-semibold'>Legal Compliance:</li>
        <p className='ml-6 mb-4'>
          We may disclose your information if required by law or in response to
          legal requests
        </p>
        <li className='font-semibold'>Data Security:</li>
        <p className='ml-6 mb-4'>
          We implement security measures to protect your information from
          unauthorized access, alteration, disclosure, or destruction. However,
          no data transmission over the internet or electronic storage is
          completely secure; therefore, we cannot guarantee absolute security
        </p>
        <li className='font-semibold'>your choices</li>
        <p className='ml-6 mb-4'>
          You can manage your privacy settings within the application, including
          location and notification preferences. You also have the right to
          access, correct, or delete your personal information.
        </p>
        <li className='font-semibold'>Updates to this Privacy Policy:</li>
        <p className='ml-6 mb-4'>
          We may update this Privacy Policy to reflect changes in our practices.
          Please review this policy periodically for any updates.
        </p>
      </ul>

      <div className='border-t-2 pt-6'>
        <p className='mb-4 font-bold'>
          By using Slots, you agree to the collection and use of your
          information as outlined in this Privacy Policy.
        </p>

        <p>
          If you have any questions or concerns about this Privacy Policy,
          please contact us at
        </p>
        <p className='capitalize'>{COMPANY_NAME}</p>
        <p>{COMPANY_PHONE_NO}</p>
        <a href={`mailto:${COMPANY_PHONE_GMAIL}`} className='cursor-pointer '>
          {COMPANY_PHONE_GMAIL}
        </a>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

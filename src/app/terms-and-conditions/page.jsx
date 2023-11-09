// components/  TermsConditions.js
import {
  COMPANY_PHONE_NO,
  COMPANY_PHONE_GMAIL,
  COMPANY_NAME,
} from '../../../constants';

export const metadata = {
  title: 'Slots:Terms & Conditions',
  description:
    'where convenience meets efficiency in the world of appointment booking.y',
};

const TermsConditions = () => {
  return (
    <div className='w-full text-black  min-h-screen p-10 bg-white rounded-md shadow-md'>
      <h1 className='text-2xl font-bold mb-4'>
        Terms and Conditions for Slots - Appointment Booking Application
      </h1>
      <p className='text-gray-700 mb-4'>Effective Date: [10/11/23]</p>
      <p>
        Welcome to Slots, the appointment booking application. These Terms and
        Conditions govern your use of our services. By using Slots, you agree to
        comply with these terms.
      </p>

      <ul>
        <li className='font-semibold'>1. Appointment Fee:</li>
        <p className='ml-6 mb-4'>
          Users will be charged an appointment fee for utilizing our appointment
          booking services. The full payment for the service rendered will be
          directly made to the service provider by the user.
        </p>
        <li className='font-semibold'>2. Shop Owners and Appointment Fee:</li>
        <p className='ml-6 mb-4'>
          Shop owners are not required to pay for appointments made through the
          application. The appointment fee is solely the responsibility of the
          users and belongs to Slots.
        </p>
        <li className='font-semibold'>3. Appointment Service Amount:</li>
        <div className='ml-6 mb-4 flex flex-col gap-4'>
          <p>
            The appointment service amount is set at 7 percent of the total
            service cost, and this percentage is subject to change by Slots
            through the admin panel. However, there will be a cap on the
            appointment fee as follows:
          </p>
          <ul>
            <li className='list-disc'>
              If the service cost is less than or equal to 5000 RS, the cap is
              100 RS
            </li>
            <li className='list-disc'>
              If the service cost is more than 5000 RS but less than or equal to
              10000 RS, the cap is 500 RS
            </li>
            <li className='list-disc'>
              If the service cost exceeds 10000 RS, the cap will be determined
              by Slots and communicated through the admin panel.
            </li>
          </ul>
        </div>
        <li className='font-semibold'>4. Payment to Service Providers:</li>
        <p className='ml-6 mb-4'>
          Users are responsible for making the full payment for the services
          directly to the service provider. Slots only charges the appointment
          fee and does not handle the transaction between the user and the
          service provider.
        </p>
        <li className='font-semibold'>5. Cap Modification:</li>
        <p className='ml-6 mb-4'>
          Slots reserves the right to modify the cap on the appointment fee
          based on service costs. Any changes to the cap will be communicated
          through the admin panel and will apply to future appointments
        </p>
        <li className='font-semibold'>6. User Responsibilities:</li>
        <p className='ml-6 mb-4'>
          Users are responsible for providing accurate information during the
          appointment booking process. Any discrepancies may result in the
          cancellation of the appointment.
        </p>
        <li className='font-semibold'>
          7. Modifications to Terms and Conditions:
        </li>
        <p className='ml-6 mb-4'>
          Slots reserves the right to update or modify these Terms and
          Conditions at any time. Users will be notified of such changes, and
          continued use of the application implies acceptance of the revised
          terms.
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

export default TermsConditions;

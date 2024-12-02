// ---------- Imports ----------
import React from 'react';
import { Footer } from '../../components/molecules';
import { Images } from '../../constant';

const ContactUs: React.FC = () => {
  return (
    <div className='relative flex flex-col w-full'>

      {/* Header Banner */}
      <section className='w-full'>
        <div 
            className='ml-[20%] py-10 px-8 flex items-start  justify-center h-[50vh] flex-col'
            style={{
                backgroundImage: `url(${Images.contactUs})`,
                backgroundSize:"cover",
                backgroundPosition: 'center',  
            }}
        >
          <h1 className='text-2xl font-semibold lg:text-5xl'>Contact Flexcept</h1>
          <p className='px-5 mt-5 text-lg'>How can we help you today?</p>
        </div>
      </section>

      {/* Contact Details */}
      <section className='flex flex-col items-center justify-center w-full py-10'>
        <div className='w-[80%] flex flex-col md:flex-row gap-5'>
          <div className='w-full md:w-1/2'>
            <h2 className='py-5 text-xl font-bold text-center md:text-left'>Local Contact or Reseller</h2>
            <div className='px-5 text-center md:text-left'>
              <p className='mb-2'><span className='font-bold'>Tele:</span> 011 555 5555</p>
              <p className='mb-2'><span className='font-bold'>Fax:</span> 011 555 5555</p>
              <p className='mb-2'><span className='font-bold'>Hours:</span> 7 AM to 5 PM MT<br />
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Monday to Friday</p>
                <p className="mb-2">
                  <span className="font-bold">Address:</span>
                  <span className="ml-1">1900 Garden of the Gods Road</span>
                  <br />
                  <span className="ml-8">Colorado Springs, CO 80907-3423</span>
                  <br />
                  <span className="ml-8">United States</span>
                </p>
              <p className='mb-2'><span className='font-bold'>Email:</span> flexcept@gmail.com</p>
            </div>
          </div>
          <div className='w-full md:w-1/2'>
            <h2 className='py-5 text-xl font-bold'>Help with new product or solution</h2>
            <div className='px-5'>
              <p>Inquiry Type <span className='text-lg text-red-600'>*</span></p>
              <select className='w-full p-2 mb-2 border border-gray-300'>
                <option>--Please Select--</option>
                <option>Select 1</option>
                <option>Select 2</option>
                <option>Select 3</option>
                <option>Select 4</option>
              </select>
              <p>Product of Interest<span className='text-lg text-red-600'> *</span></p>
              <select className='w-full p-2 mb-2 border border-gray-300'>
                <option>--Please Select--</option>
                <option>Select 1</option>
                <option>Select 2</option>
                <option>Select 3</option>
                <option>Select 4</option>
              </select>
              <p>Type of Engagement<span className='text-lg text-red-600'> *</span></p>
              <div className='mb-2'>
                <input type='radio' id='technical-support' name='engagement' className='mr-2' />
                <label htmlFor='technical-support'>Need technical support</label><br />
                <input type='radio' id='sales-discussion' name='engagement' className='mr-2' />
                <label htmlFor='sales-discussion'>Discuss purchase options with sales</label>
              </div>
              <p className='mt-2'>Email<span className='text-lg text-red-600'> *</span></p>
              <input type='text' className='w-full p-2 mb-2 border border-gray-300' /><br />
              <div className='mb-2'>
                <input type='checkbox' id='updates' className='mr-2' />
                <label htmlFor='updates'>Yes, keep me updated on the latest products, resources, and events with personalized email updates.</label>
              </div>
              <button className='w-full px-4 py-2 text-white transition-colors duration-300 bg-red-600 rounded hover:bg-red-500'>Continue</button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className='mt-[250px]'>
        <Footer />
      </section>
    </div>
  );
}

export default ContactUs;

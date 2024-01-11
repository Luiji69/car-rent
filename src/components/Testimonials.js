import React from 'react';
import pic1 from '../assets/testimonials/pfp1.jpg';
import pic2 from '../assets/testimonials/pfp2.jpg';

const Testimonials = () => {
  return (
    <div className="bg-gray-lighter">
      <div className="block mx-4 md:mx-14 mt-20 ">
        <div className="justify-center px-4 md:px-8 pt-8">
          <h3 className="text-lg mt-8 font-bold">Reviewed by People</h3>
          <h1 className="text-4xl md:text-6xl my-4 font-bold">Client's Testimonials</h1>
          <p className="text-gray-dark mb-6 md:mb-12 text-center">
            Discover the positive impact we've made on our clients by
            reading through their testimonials. Our clients have experienced our
            service and results, and they're eager to share their positive
            experiences with you.
          </p>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 mb-8 bg-white p-4 md:mx-2 md:mx-12 shadow-lg">
            <div className="p-4">
              <div>
                <p className="font-bold text-center mb-6 md:mb-12 text-lg">
                  "We rented a car from this website and had an amazing
                  experience! The booking was easy and the rental rates were
                  very affordable."
                </p>
              </div>
              <div className="flex justify-center items-center">
                <img
                  className="rounded-full border-4 mr-4 border-orange h-16 md:h-20"
                  src={pic1}
                  alt=""
                />
                <div className="block">
                  <h3 className="font-bold ml-2 md:ml-4 text-lg">Parry Hotter</h3>
                  <p className="text-left ml-2 md:ml-4">Belgrade</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 mb-8 bg-white p-4 md:mx-2 md:mx-12 shadow-lg">
            <div className="p-4">
              <div>
                <p className="font-bold text-center mb-6 md:mb-12 text-lg">
                  "The car was in great condition and made our trip even better.
                  Highly recommend this car rental website!"
                </p>
              </div>
              <div className="flex justify-center items-center">
                <img
                  className="rounded-full border-4 mr-4 border-orange h-16 md:h-20"
                  src={pic2}
                  alt=""
                />
                <div className="block">
                  <h3 className="font-bold ml-2 md:ml-4 text-lg">Won Rizzly</h3>
                  <p className="text-left ml-2 md:ml-4">Novi Sad</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

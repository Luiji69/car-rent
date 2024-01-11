import React from 'react';
import maincar from '../assets/hero/main-car.png';
import { CheckCircleOutlined, DownOutlined } from '@ant-design/icons';

const Hero = () => {
  return (
    <div>
      <div className="container mx-auto flex flex-col md:flex-row py-2">
        <div className="w-full md:w-1/2 p-8 py-16">
        
          <h3 className="text-black text-lg text-left ml-8 font-bold">
            Plan your trip now
          </h3>
          <h1 className="text-6xl font-bold mt-2 text-left ml-8 py-4">
            Save <span className="text-orange">big</span> with our car rental
          </h1>
          <p className="text-gray-dark mt-4 text-left ml-8">
            Rent the car of your dreams. Unbeatable prices, unlimited miles,
            flexible pick-up options and much more.
          </p>
          <div className="mt-8 flex flex-col md:flex-row md:items-center ml-8">
            <button className="bg-orange text-white rounded px-8 py-4 font-bold flex items-center mb-4 md:mb-0 md:mr-4">
              Book Ride <CheckCircleOutlined className="ml-2" />
            </button>
            <button className="bg-black text-white rounded px-8 py-4 font-bold flex items-center">
              Learn More <DownOutlined className="ml-2" />
            </button>
          </div>
        </div>
        <div className=" hidden md:block ">  
        <div className="relative -z-50">
            <div className="absolute top-0 left-20 w-80 h-80 bg-red-300 rounded-full mix-blend-multiply filter blur-xl opacity-90 animate-blob"></div>
            <div className="absolute top-0 right-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute -top-10 right-20 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-3000"></div>
            <div className="absolute bottom-100 left-50 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
          </div>
          <img
            src={maincar}
            alt=""
            className="mx-auto mt-10 z-10 max-w-full  "
            style={{ maxWidth: '800px' }}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;

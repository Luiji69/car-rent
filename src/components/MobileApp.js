import React from 'react';
import appstore from '../assets/download/appstore.svg';
import googleapp from '../assets/download/googleapp.svg';
import phone from '../assets/banners/bg02.png';

const div4Style = {
  backgroundImage: `url(${phone})`,
  alignItems: 'center',
  backgroundSize: 'unset',
  backgroundRepeat: 'no-repeat',
};

const MobileApp = () => {
  return (
    <div className="mt-20 bg-gray-lighter" style={div4Style}>
      <div className="mx-14 mt-20">
        <div className="flex ">
          <div className="w-full md:w-1/2 my-12">
            <h1 className="text-4xl font-bold text-left">
              Download our app to get most out of it
            </h1>
            <p className="text-gray-dark text-left my-12">
              Thrown shy denote ten ladies though ask saw. Or by to he going
              think order event music. Incommode so intention defective at
              convinced. Led income months itself and houses you.
            </p>
            <div className="flex justify-center">
              <a href="/">
                <img src={appstore} alt="" />
              </a>
              <a href="/">
                <img src={googleapp} alt="" />
              </a>
            </div>
          </div>
          <div className="hidden md:block md:w-1/2"></div>
        </div>
      </div>
    </div>
  );
};

export default MobileApp;

import React from 'react';
import { RightOutlined } from '@ant-design/icons';
import threecars from '../assets/chooseUs/main.png';
import bg from '../assets/chooseUs/bg.png';
import icon1 from '../assets/chooseUs/icon1.png';
import icon2 from '../assets/chooseUs/icon2.png';
import icon3 from '../assets/chooseUs/icon3.png';

const div2Style = {
  backgroundImage: `url(${bg})`,
  alignItems: 'center',
  backgroundRepeat: 'no-repeat',
};

const ChooseUs = () => {
  return (
    <div className="mx-4 md:mx-14 mt-12 md:mt-20" style={div2Style}>
      <div className="max-w-full h-auto flex justify-center">
        <img src={threecars} alt="" className="w-full" />
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center">
        <div className="w-full md:w-1/2 p-4 md:p-12">
          <h3 className="md:text-left text-lg font-bold">Why Choose Us</h3>
          <h1 className="md:text-left text-4xl md:text-6xl font-bold my-4">
            Best valued deals you will ever find
          </h1>
          <p className="md:text-left text-gray-dark">
            Discover the best deals you'll ever find with our unbeatable offers.
            We're dedicated to providing you with the best value for your money,
            so you can enjoy top-quality services and products without breaking
            the bank. Our deals are designed to give you the ultimate renting
            experience, so don't miss out on your chance to save big.
          </p>
          <button className="bg-orange text-white font-bold rounded py-3 px-8 my-4 lg:float-left sm:mx-auto">
            Find Detail <RightOutlined className='align-text-bottom'/>
          </button>
        </div>
        <div className="w-full md:w-1/2 block p-4 md:p-12">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/3 flex justify-center mb-4 md:mb-0">
              <img src={icon1} alt="" className="w-20 h-auto" />
            </div>
            <div className="w-full md:w-2/3">
              <h2 className="text-lg font-bold md:text-left  my-2">
                Cross Country Drive
              </h2>
              <p className="text-gray-dark md:text-left ">
                Take your driving experience to the next level with our
                top-notch vehicles for your cross-country adventures.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/3 flex justify-center mb-4 md:mb-0">
              <img src={icon2} alt="" className="w-20 h-auto" />
            </div>
            <div className="w-full md:w-2/3">
              <h2 className="text-lg font-bold md:text-left  my-2">
                All Inclusive Pricing
              </h2>
              <p className="text-gray-dark md:text-left ">
                Get everything you need in one convenient, transparent price
                with our all-inclusive pricing policy.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/3 flex justify-center">
              <img src={icon3} alt="" className="w-20 h-auto" />
            </div>
            <div className="w-full md:w-2/3">
              <h2 className="text-lg font-bold md:text-left  my-2">
                No Hidden Charges
              </h2>
              <p className="text-gray-dark md:text-left ">
                Enjoy peace of mind with our no hidden charges policy. We
                believe in transparent and honest pricing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;

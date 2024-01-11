import React from 'react';
import img1 from '../assets/plan/icon1.png';
import img2 from '../assets/plan/icon2.png';
import img3 from '../assets/plan/icon3.png';

const PlanTrip = () => {
  return (
    <div className="mx-4 md:mx-14 mt-8 md:mt-20">
      <div className="block">
        <div className="text-center">
          <h3 className="text-black text-lg font-bold">Plan your trip now</h3>
        </div>
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold my-4 md:my-8">
            Quick & easy car rental
          </h1>
        </div>
        <div className="flex flex-col md:flex-row justify-center md:justify-between">
          <div className="w-full md:w-1/3 flex flex-col items-center m-4 p-4">
            <img src={img1} alt="" />
            <h3 className="text-black text-lg font-bold">Select Car</h3>
            <p className="text-gray-dark mt-4 text-center max-w-72">
              We offer a wide range of vehicles to meet your driving needs.
              Choose the perfect car for your trip.
            </p>
          </div>
          <div className="w-full md:w-1/3 flex flex-col items-center m-4 p-4">
            <img src={img2} alt="" />
            <h3 className="text-black text-lg font-bold">Contact Operator</h3>
            <p className="text-gray-dark mt-4 text-center max-w-72">
              Our knowledgeable and friendly operators are available to assist
              with any questions or concerns you may have.
            </p>
          </div>
          <div className="w-full md:w-1/3 flex flex-col items-center m-4 p-4">
            <img src={img3} alt="" />
            <h3 className="text-black text-lg font-bold">Let's Drive</h3>
            <p className="text-gray-dark mt-4 text-center max-w-72">
              Explore the open road with our diverse range of cars, perfect for
              your travel adventures.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanTrip;

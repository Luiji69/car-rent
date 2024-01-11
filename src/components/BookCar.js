import React from 'react';
import {
  CarOutlined,
  EnvironmentOutlined,
  CalendarOutlined,
  SearchOutlined,
} from '@ant-design/icons';
import bookbg from '../assets/book-car/book-bg.png';

const divStyle = {
  backgroundImage: `url(${bookbg})`,
  alignItems: 'center',
};

const BookCar = () => {
  return (
    <div className="mx-14 my-12">
      
      <div
        className="flex flex-wrap justify-center shadow-xl md:p-10 rounded	"
        style={divStyle}
      >
        
        <div className="w-full">
          <h3 className="text-black text-lg text-left ml-8 font-bold">
            Book Car
          </h3>
        </div>
        <form className="flex flex-wrap justify-between" action="">
          <div className="w-full lg:w-1/3 md:w-1/2 px-4 mb-4">
            <label
              htmlFor="select1"
              className="flex items-center text-lg text-left mb-2"
            >
               <CarOutlined className="text-orange mr-2" /> Select Your Car Type
            </label>
            <select
              id="select1"
              className="w-full px-4 py-2 border rounded"
              required
            >
                <option value="" selected disabled>
              Select your Car Type
            </option>
            <option value="Audi A1 S-Line">Audi A1 S-Line</option>
            <option value="VW Passat CC">VW Passat CC</option>
            <option value="Mercedes-Benz GLK">Mercedes-Benz GLK</option>
            <option value="VW Golf 6">VW Golf 6</option>
            <option value="Toyota Camry">Toyota Camry</option>
            <option value="BMW 320 ModernLine">BMW 320 ModernLine</option>
            </select>
          </div>
          <div className="w-full lg:w-1/3 md:w-1/2 px-4 mb-4">
            <label
              htmlFor="select2"
              className="flex items-center text-lg text-left mb-2"
            >
              <EnvironmentOutlined className="text-orange mr-2" /> Pick-up
            </label>
            <select
              id="select2"
              className="w-full px-4 py-2 border rounded"
              required
            >
               <option value="" selected disabled >
              Select your Pick-up location
            </option>
            <option value="Pick-Tunis">Tunis</option>
            <option value="Pick-Sfax">Sfax</option>
            <option value="Pick-Djerba">Djerba</option>
            <option value="Pick-Souse">Souse</option>
            <option value="Pick-Gabes">Gabes</option>
            <option value="Pick-Mednine">Mednine</option>
            </select>
          </div>
          <div className="w-full lg:w-1/3 md:w-1/2 px-4 mb-4">
            <label
              htmlFor="select3"
              className="flex items-center text-lg text-left mb-2"
            >
              <EnvironmentOutlined className="text-orange mr-2" /> Drop-of
            </label>
            <select
              id="select3"
              className="w-full px-4 py-2 border rounded"
              required
            >
              <option value="" selected disabled>
              Select your Drop-of location
            </option>
            <option value="Drop-Tunis">Tunis</option>
            <option value="Drop-Sfax">Sfax</option>
            <option value="Drop-Djerba">Djerba</option>
            <option value="Drop-Souse">Souse</option>
            <option value="Drop-Gabes">Gabes</option>
            <option value="Drop-Mednine">Mednine</option>
            </select>
          </div>
          <div className="w-full lg:w-1/3 md:w-1/2 px-4 mb-4">
            <label
              htmlFor="startDate"
              className="flex items-center text-lg text-left mb-2"
            >
              <CalendarOutlined className="text-orange mr-2" /> Start Date
            </label>
            <input
              type="date"
              required
              id="startDate"
              className="w-full px-4 py-2 border rounded"
            />
          </div>
          <div className="w-full lg:w-1/3 md:w-1/2 px-4 mb-4">
            <label
              htmlFor="endDate"
              className="flex items-center text-lg text-left mb-2"
            >
              <CalendarOutlined className="text-orange mr-2" /> End Date
            </label>
            <input
              type="date"
              required
              id="endDate"
              className="w-full px-4 py-2 border rounded"
            />
          </div>
          {/* Search Button */}
          <div className="w-full lg:w-1/3 md:w-1/2 px-4 mb-4">
            <label
              htmlFor="searchBtn"
              className="block text-transparent select-none text-lg text-left mb-2"
            >
              .
            </label>
            <button id='searchBtn' className="bg-orange text-white rounded font-bold flex items-center justify-center w-full h-12">
              <SearchOutlined className='mr-2' /> Search
            </button>
          </div>
        </form>
      </div>
      
    </div>
  );
};

export default BookCar;

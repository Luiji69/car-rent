import React, { useState } from 'react';
import car1 from '../assets/cars-big/audia1.jpg';
import Data from './Data';

const VehicleModels = () => {
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [selectedItemData, setSelectedItemData] = useState(null);

  const onClickHandler = (itemId) => {
    setSelectedItemId(itemId);
    const selectedData = Data.find((item) => item.id === itemId);
    setSelectedItemData(selectedData);
  };

  return (
    <div className="mx-4 md:mx-14 mt-8 md:mt-20">
      <div className="block">
        <div className="text-center">
          <h3 className="text-black text-lg font-bold">Vehicle Models</h3>
        </div>
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold my-4 md:my-8">
            Our rental fleet
          </h1>
        </div>
        <div className="text-center">
          <p className="text-gray-dark mt-4">
            Choose from a variety of our amazing vehicles to rent for your next
            adventure or business trip
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center md:justify-around items-stretch md:items-start mt-4">
        <div className="w-full md:w-1/4 bg-gray-300 flex flex-col md:justify-between md:p-4">
          {Data.map((item) => (
            <button
              key={item.id}
              className="bg-gray-light hover:bg-orange hover:text-white text-black rounded px-8 py-4 font-bold flex items-center justify-center my-2"
              onClick={() => onClickHandler(item.id)}
            >
              {item.name}
            </button>
          ))}
        </div>
        <div className="w-full md:w-1/2 flex items-center justify-center p-4">
          <img className="lg:h-72 md:mt-12 md:h-52" src={selectedItemId ? selectedItemData?.img : car1} alt="" />
        </div>
        <div className="w-full md:w-1/4 p-4">
          <table className="border-collapse w-full border-2 border-gray-dark">
            <tbody>
              <tr className="border-2 border-x-gray-dark">
                <td
                  className="border-2 h-14 bg-orange text-lg font-bold text-white border-orange"
                  colSpan="2"
                >
                 <span className='text-4xl'> $ {selectedItemId ? selectedItemData?.price : 45}/</span> rent per
                  day
                </td>
              </tr>
              <tr className="border-2 h-12 border-gray-dark">
                <td className="border-2 border-gray-dark">Model</td>
                <td className="border-2 border-gray-dark">
                  {selectedItemId ? selectedItemData?.model : 'Audi'}
                </td>
              </tr>
              <tr className="border-2 h-12 border-gray-dark">
                <td className="border-2 border-gray-dark">Mark</td>
                <td className="border-2 border-gray-dark">
                  {selectedItemId ? selectedItemData?.mark : 'A1'}
                </td>
              </tr>
              <tr className="border-2 h-12 border-gray-dark">
                <td className="border-2 border-gray-dark">Year</td>
                <td className="border-2 border-gray-dark">
                  {selectedItemId ? selectedItemData?.year : 2012}
                </td>
              </tr>
              <tr className="border-2 h-12 border-gray-dark">
                <td className="border-2 border-gray-dark">Doors</td>
                <td className="border-2 border-gray-dark">
                  {selectedItemId ? selectedItemData?.doors : '4/5'}
                </td>
              </tr>
              <tr className="border-2 h-12 border-gray-dark">
                <td className="border-2 border-gray-dark">AC</td>
                <td className="border-2 border-gray-dark">
                  {selectedItemId ? selectedItemData?.ac : '4/Yes'}
                </td>
              </tr>
              <tr className="border-2 h-12 border-gray-dark">
                <td className="border-2 border-gray-dark">Transmission</td>
                <td className="border-2 border-gray-dark">
                  {selectedItemId ? selectedItemData?.transmission : 'Manual'}
                </td>
              </tr>
              <tr className="border-2 h-12 border-gray-dark">
                <td className="border-2 border-gray-dark">Fuel</td>
                <td className="border-2 border-gray-dark">
                  {selectedItemId ? selectedItemData?.fuel : 'Gasoline'}
                </td>
              </tr>
            </tbody>
          </table>
          <button className="bg-orange w-full hover:bg-gray-light hover:text-black text-white rounded px-8 py-4 font-bold flex items-center justify-center mt-2">
            Reserve Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default VehicleModels;

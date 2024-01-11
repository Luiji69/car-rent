import React from 'react';
import Accordion from './Accordion';
import voiture from '../assets/faq/car.png';

const div3Style = {
  backgroundImage: `url(${voiture})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'unset',
  backgroundPosition: 'left bottom',
};

const Faq = () => {
  return (
    <div style={div3Style} className="bg-center bg-no-repeat md:bg-cover">
      <div className="mx-4 md:mx-14 mt-20">
        <div className="justify-center px-4 md:px-8 ">
          <h3 className="text-lg mt-8 font-bold">FAQ</h3>
          <h1 className="text-4xl md:text-6xl my-4 font-bold">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-dark mb-6 md:mb-12 text-center">
            Frequently Asked Questions About the Car Rental Booking Process on
            Our Website: Answers to Common Concerns and Inquiries.
          </p>
        </div>
        <div className="p-4 md:w-3/5 justify-center mx-4 md:mx-72 bg-gray-light shadow-lg rounded-lg">
          <Accordion
            title="1. What is special about comparing rental car deals?"
            answer="Comparing rental car deals is important as it helps find the best deal that fits your budget and requirements, ensuring you get the most value for your money. By comparing various options, you can find deals that offer lower prices, additional services, or better car models. You can find car rental deals by researching online and comparing prices from different rental companies."
          />
          <Accordion
            title="2. How do I find the car rental deals?"
            answer="You can find car rental deals by researching online and comparing prices from different rental companies. Websites such as Expedia, Kayak, and Travelocity allow you to compare prices and view available rental options. It is also recommended to sign up for email newsletters and follow rental car companies on social media to be informed of any special deals or promotions."
          />
          <Accordion
            title="3. How do I find such low rental car prices?"
            answer="Book in advance: Booking your rental car ahead of time can often result in lower prices. Compare prices from multiple companies: Use websites like Kayak, Expedia, or Travelocity to compare prices from multiple rental car companies. Look for discount codes and coupons: Search for discount codes and coupons that you can use to lower the rental price. Renting from an off-airport location can sometimes result in lower prices."
          />
        </div>
      </div>
    </div>
  );
};

export default Faq;

import React from 'react';
import logo from '../assets/logo/logo.png';
import { PhoneOutlined, MailOutlined } from '@ant-design/icons';

function Footer() {
  return (
    <div className="lg:flex md:block p-4 md:p-24">
      <div className="w-full md:w-1/2 lg:w-1/4 md:m-4 flex flex-col">
        {/* Section 1 content */}
        <img className="w-32" src={logo} alt="" />
        <p className="text-gray-dark text-left my-4">
          We offer a wide range of vehicles for all your driving needs. We have the perfect car to meet your needs.
        </p>
        <a href="tel:+216 55 682 011"
        className="text-gray-dark flex items-center hover:text-orange mb-2 font-bold text-left">
          <PhoneOutlined className="mr-2" />
          +216 55 682 011
        </a>
        <a href="mailto:islembaaziz@yahoo.fr"
        className="text-gray-dark flex items-center hover:text-orange mb-2 font-bold text-left">
          <MailOutlined className="mr-2" /> islembaaziz@yahoo.fr
        </a>
        <a className="hover:text-orange text-left mb-2" href="https://islembaaziz.netlify.app/">
          Design by islem Baaziz
        </a>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/4 md:m-4 flex flex-col">
        {/* Section 2 content */}
        <h3 className="text-left font-bold mb-4">COMPANY</h3>
        <a className="hover:text-orange mb-2 text-left" href="/">
          New York
        </a>
        <a className="hover:text-orange mb-2 text-left" href="/">
          Careers
        </a>
        <a className="hover:text-orange mb-2 text-left" href="/">
          Mobile
        </a>
        <a className="hover:text-orange mb-2 text-left" href="/">
          Blog
        </a>
        <a className="hover:text-orange mb-2 text-left" href="/">
          How we work
        </a>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/4 md:m-4 flex flex-col">
        {/* Section 3 content */}
        <h3 className="text-left font-bold mb-4">WORKING HOURS</h3>
        <p className="text-gray-dark text-left mb-2">Mon - Fri: 9:00AM - 9:00PM</p>
        <p className="text-gray-dark text-left mb-2">Sat: 9:00AM - 19:00PM</p>
        <p className="text-gray-dark text-left mb-2">Sun: Closed</p>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/4 md:m-4 flex flex-col">
        {/* Section 4 content */}
        <h3 className="text-left font-bold mb-4">SUBSCRIPTION</h3>
        <p className="text-gray-dark text-left mb-2">
          Subscribe your Email address for latest news & updates.
        </p>
        <form className="flex flex-col" action="">
          <input className="bg-gray-light py-3" required type="email" placeholder="Enter your email" name="" id="" />
          <button className="bg-orange text-white font-bold mt-4 py-3">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Footer;

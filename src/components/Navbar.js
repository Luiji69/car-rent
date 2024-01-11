import React, { useState } from 'react';
import { CloseOutlined, MenuOutlined } from '@ant-design/icons';
import logo from '../assets/logo/logo.png';
import bookbg from '../assets/book-car/book-bg.png';


const navStyle = {
  backgroundImage: `url(${bookbg})`,
  alignItems: 'center',
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: 'about', label: 'About' },
    { href: 'vehicleslist', label: 'Vehicle Models' },
    { href: 'testimonial', label: 'Testimonials' },
    { href: 'ourteam', label: 'Our Team' },
    { href: 'contact', label: 'Contact' },
  ];
  return (
    <>
      <header className="sm:px-8 px-4 py-2 z-50 w-full">
        <nav className="flex justify-between items-center max-container">
          <a href="/" className="text-3xl font-bold">
            <img
              src={logo}
              className="h-12 fill-current cursor-pointer"
              alt=""
            />
          </a>
          <ul className="flex-1 flex justify-center items-center  gap-6 max-lg:hidden">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className=" hover:text-orange leading-normal font-bold "
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24">
            <button className="bg-transparent text-black mr-4 hover:text-orange ">
              Sign In
            </button>
            <button className="bg-orange text-white rounded px-8 py-2.5 ">
              Register
            </button>
          </div>
          <div
            className="hidden max-lg:block cursor-pointer"
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
          >
            <MenuOutlined className="text-4xl" />
          </div>
        </nav>
      </header>
      {isMenuOpen && (
        <div>
          <nav className="fixed top-0 right-0 left-0 z-50 bottom-0 lg:bottom-auto bg-slate-100  " style={navStyle}>
            <div
              className="hidden max-lg:block fixed right-0  px-8 py-4 cursor-pointer"
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
              }}
            >
              <CloseOutlined className="text-4xl" />
            </div>
            <ul className=" lg:hidden flex flex-col  justify-center mx-12  gap-2  h-full ">
              {navLinks.map((item) => (
                <li key={item.label} className='bg-white p-4 border rounded '>
                  <a
                    href={item.href}
                    className=" leading-normal  text-lg text-slate-gray"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <button className=" bg-orange p-4 text-white rounded font-bold">
                Sign In
              </button>
              <button className="bg-orange p-4  text-white rounded font-bold">
                Register
              </button>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};
export default Navbar;

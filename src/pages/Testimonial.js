import React from 'react';
import Testimonials from '../components/Testimonials';
import heroesbg from '../assets/about/heroes-bg.png';
import banner from '../assets/about/book-banner.png';
import { PhoneOutlined } from '@ant-design/icons';

const bgStyle = {
  backgroundImage: `url(${heroesbg})`,
  alignItems: 'center',
  backgroundSize: 'unset',
};

const Testimonial = () => {
  return (
    <div>
      <div className="relative h-72 -mt-16 -z-10">
        <div
          className="absolute inset-0 bg-white opacity-10"
          style={{ ...bgStyle, zIndex: -1 }}
        ></div>
      </div>
      <nav aria-label="Breadcrumb" className="flex mx-14 -mt-36">
        <ol className="flex overflow-hidden rounded-lg  border border-gray-dark  text-gray-dark">
          <li className="flex items-center">
            <a
              href="/"
              className="flex h-10 items-center gap-1.5 bg-gray-light px-4 transition hover:text-gray-dark"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              <span className="ms-1.5 text-xs font-medium"> Home </span>
            </a>
          </li>
          <li className="relative flex items-center">
            <span className="absolute inset-y-0 -start-px h-10 w-4 bg-gray-light [clip-path:_polygon(0_0,_0%_100%,_100%_50%)] rtl:rotate-180"></span>
            <a
              href="/testimonials"
              className="flex h-10 items-center bg-orange pe-4 ps-8 text-xs font-medium transition hover:text-gray-dark"
            >
              Testimonials
            </a>
          </li>
        </ol>
      </nav>
      <Testimonials />
      <div className="relative">
        <div className="bg-[#2d2d2d] opacity-80">
          <img src={banner} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
          <h1 className="md:text-4xl font-bold ">
            Get in touch with us{' '}
            <span className="text-orange">
              {' '}
              <PhoneOutlined /> +216 55 682 011
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

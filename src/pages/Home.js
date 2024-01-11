import React from 'react';

import Hero from '../components/Hero';
import BookCar from '../components/BookCar';
import PlanTrip from '../components/PlanTrip';
import VehicleModels from '../components/VehicleModels';
import Banner from '../components/Banner';
import ChooseUs from '../components/ChooseUs';
import Testimonials from '../components/Testimonials';
import Faq from '../components/Faq';
import MobileApp from '../components/MobileApp';

const Home = () => {
  return (
    <div>
      <Hero />
      <BookCar />
      <PlanTrip />
      <VehicleModels />
      <Banner />
      <ChooseUs />
      <Testimonials />
      <Faq />
      <MobileApp />
    </div>
  );
};

export default Home;

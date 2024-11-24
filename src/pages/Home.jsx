import React from 'react';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import Cards from '../components/Cards/Cards';
import Sports from '../components/Sports/Sports';
import Coments from '../components/Coments/Coments';
import Email from '../components/Email/Email';

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Cards />
      <Sports/>
      <Coments/>
      <Email/>
    </>
  );
};

export default Home;

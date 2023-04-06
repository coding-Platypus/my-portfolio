import React from 'react';
import Navbar from '../components/Navbar';
import Cover from '../components/Cover';
import Footer from '../components/Footer';
import Work from '../components/Work';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Cover />
      <Work />
      <Footer />
    </div>
  );
};

export default Home;

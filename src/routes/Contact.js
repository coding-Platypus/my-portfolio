import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Cover2 from '../components/Cover2';
import Form from '../components/Form';

const Contact = () => {
  return (
    <div>
      <Navbar />
      <Cover2 heading="CONTACT." text="Let's have a chat." />
      <Form />
      <Footer />
    </div>
  );
};

export default Contact;

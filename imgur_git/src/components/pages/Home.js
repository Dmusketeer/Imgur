import React from 'react';
import Footer from '../Footer';
import Navbar from '../Navbar';
import Heading from '../Heading';
import Card from '../Card';
import './r.css';

function Home() {
  return (
    <>
      <div className="container">
        <Navbar />
        <Heading />
        <Card />
        <Footer />
      </div>
    </>
  );
}

export default Home;

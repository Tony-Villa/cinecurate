import React from 'react';
import Carousel from '../../components/home/Carousel/Carousel';

function Home() {
  return (
    <div>
      <h1 className="header-font">WELCOME</h1>

      <Carousel list={'popular'} />
    </div>
  );
}

export default Home;

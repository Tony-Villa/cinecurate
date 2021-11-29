import React from 'react';
import Carousel from '../../components/home/Carousel/Carousel';

function Home() {
  const carouselOptions = [
    {
      api: 'popular',
      label: 'Popular',
    },
    {
      api: 'top_rated',
      label: 'Top Rated',
    },
    {
      api: 'upcoming',
      label: 'Upcoming',
    },
  ];

  return (
    <div>
      <h1 className="header-font">WELCOME</h1>

      <Carousel list={carouselOptions[0]} />
      <Carousel list={carouselOptions[1]} />
      <Carousel list={carouselOptions[2]} />
    </div>
  );
}

export default Home;

import React, { useContext } from 'react';
import Carousel from '../../components/home/Carousel/Carousel';
import { UserContext } from '../../Context/UserContext';

function Home() {
  const { user } = useContext(UserContext);
  // const { first_name } = user;

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
      {user && <h1 className="header-font">WELCOME {user.first_name}!</h1>}

      <Carousel list={carouselOptions[0]} />
      <Carousel list={carouselOptions[1]} />
      <Carousel list={carouselOptions[2]} />
    </div>
  );
}

export default Home;

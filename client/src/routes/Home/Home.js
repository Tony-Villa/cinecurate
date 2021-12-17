import React, { useContext } from 'react';
import Carousel from '../../components/home/Carousel/Carousel';
import { UserContext } from '../../Context/UserContext';
import './Home.scss';

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
    <div className="home">
      {user ? (
        <div className="home__welcome">{user && <h1 className="header-font">WELCOME {user.first_name}!</h1>}</div>
      ) : (
        <div className="home__welcome">
          <h1 className="header-font">WELCOME!</h1>
        </div>
      )}

      {/* <div className="home__welcome">{user && <h1 className="header-font">WELCOME {user.first_name}!</h1>}</div> */}

      <Carousel list={carouselOptions[0]} />
      <Carousel list={carouselOptions[1]} />
      <Carousel list={carouselOptions[2]} />
    </div>
  );
}

export default Home;

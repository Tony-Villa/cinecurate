import React, { useContext, useState } from 'react';
import ShowWatchlist from '../../components/profile/ShowWatchlist/ShowWatchlist';
import UserReviews from '../../components/shared/Reviews/UserReviews';
import { UserContext } from '../../Context/UserContext';
import './Profile.scss';

function Profile() {
  const [activeTab, setActiveTab] = useState('');
  const { user } = useContext(UserContext);

  const tabs = [{ display: 'My Reviews' }, { display: 'Watchlist' }];

  const getActiveCategory = (active, display) => {
    let opacityNav =
      (active === 'My Reviews' && display === 'My Reviews') || (active === 'Watchlist' && display === 'Watchlist')
        ? { opacity: '1' }
        : { opacity: '.5' };

    return opacityNav;
  };

  // console.log(activeTab);

  return (
    <div className="profile">
      {user?.username && <h1 className="header-font mt-2 text-center">Hello {user.first_name}</h1>}
      <div className="profile__nav flex">
        {tabs.map((el, idx) => (
          <button
            key={idx}
            style={getActiveCategory(activeTab, el.display)}
            className="btn btn-category content-font"
            onClick={() => setActiveTab(el.display)}
          >
            {el.display}
          </button>
        ))}
      </div>

      <div className="profile__container flex">
        {activeTab === 'My Reviews' && <UserReviews />}
        {activeTab === 'Watchlist' && <ShowWatchlist />}
        {/* {activeTab === 'Preferences' && <h1>Preferences</h1>} */}
      </div>
    </div>
  );
}

export default Profile;

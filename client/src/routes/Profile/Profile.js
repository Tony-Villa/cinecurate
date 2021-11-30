import React, { useState } from 'react';
import UserReviews from '../../components/shared/Reviews/UserReviews';
import './Profile.scss';

function Profile() {
  const [activeTab, setActiveTab] = useState('');

  const tabs = [{ display: 'My Reviews' }, { display: 'Watchlist' }, { display: 'Preferences' }];

  console.log('hello');

  return (
    <div className="profile">
      <h1>This is profile</h1>
      <p>hello</p>
      <div className="profile__nav flex">
        {tabs.map((el, idx) => (
          <button key={idx} className="tab-link" onClick={() => setActiveTab(el.display)}>
            {el.display}
          </button>
        ))}
      </div>

      <div className="container">
        {activeTab === 'My Reviews' && <UserReviews />}
        {activeTab === 'Watchlist' && <h1>Watchlist</h1>}
        {activeTab === 'Preferences' && <h1>Preferences</h1>}
      </div>
    </div>
  );
}

export default Profile;

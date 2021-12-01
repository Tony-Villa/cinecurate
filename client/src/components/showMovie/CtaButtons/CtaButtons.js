import React, { useContext, useState } from 'react';
import { UserContext } from '../../../Context/UserContext';
import AddWatchlist from '../AddWatchlist/AddWatchlist';
import './CtaButtons.scss';

function CtaButtons(props) {
  const { user } = useContext(UserContext);
  // const [isUser, setIsUser] = useState(user);

  return (
    <div className="cta-container flex">
      {user?.username && <AddWatchlist {...props} />}
      <button className="btn btn-cta-sm">Compare</button>
    </div>
  );
}

export default CtaButtons;

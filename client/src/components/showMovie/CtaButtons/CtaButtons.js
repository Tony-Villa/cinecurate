import React, { useContext, useState } from 'react';
import { UserContext } from '../../../Context/UserContext';
import AddWatchlist from '../AddWatchlist/AddWatchlist';
import './CtaButtons.scss';

function CtaButtons(props) {
  const { user } = useContext(UserContext);
  // const [isUser, setIsUser] = useState(user);

  return (
    <div className=" cta cta-container flex">
      <div className="cta__option">{user?.username && <AddWatchlist {...props} />}</div>
      <button className="btn btn-cta  content-font">Compare</button>
    </div>
  );
}

export default CtaButtons;

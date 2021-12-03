import React, { useContext, useState } from 'react';
import { UserContext } from '../../../Context/UserContext';
import AddWatchlist from '../AddWatchlist/AddWatchlist';
import CompareBtn from '../CompareBtn/CompareBtn';
import './CtaButtons.scss';

function CtaButtons(props) {
  const { user } = useContext(UserContext);
  // const [isUser, setIsUser] = useState(user);

  return (
    <div className=" cta cta-container flex">
      <div className="cta__option">{user?.username && <AddWatchlist {...props} />}</div>
      <CompareBtn {...props} />
    </div>
  );
}

export default CtaButtons;

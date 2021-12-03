import React from 'react';
import { useNavigate } from 'react-router';

const CompareBtn = ({ title, poster_path, id }) => {
  const navigate = useNavigate();

  const handleCompareBtn = () => {
    navigate('/set-compare', { state: { id, title, poster_path } });
  };

  return (
    <div>
      <button
        className="btn btn-search  content-font"
        onClick={() => {
          handleCompareBtn();
        }}
      >
        Compare
      </button>
    </div>
  );
};

export default CompareBtn;

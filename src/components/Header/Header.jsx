import React from 'react';
import Search from './Search';
import { Avatar } from '@mui/material';
import './Header.css'
const Header = () => {
  return (
    <>

      <div className="d-flex  align-items-center mt-3">
        <div className="p-2 flex-grow-1 "><Search /></div>
        <div className="p-2 profile-name"><span>David Anderson</span></div>
        <div className="p-2 "><Avatar alt="Remy Sharp" src="profile.png"  className='profile'/></div>
      </div>
    </>
  );
};

export default Header;

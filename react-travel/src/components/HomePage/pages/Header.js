import React from 'react';

//====== img start ======//
import banner from '../../../image/banner.png';
//====== img end ======//

function Header() {
  return (
    <>
      <div className="banner">
        <div className="flex flex-col flex-wrap header_font">
          <span>探索。 </span>
          <span>福爾摩沙</span>
        </div>
        <div className="header_pic">
          <img
            src={banner}
            alt="header pic"
            className="2xl:w-full 2xl:ml-0 xl:w-full xl:ml-0 lg:w-10/12 lg:ml-20"
          />
        </div>
      </div>
    </>
  );
}

export default Header;

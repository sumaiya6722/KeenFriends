import React, { Suspense } from 'react';
import BannerPage from './banner/BannerPage';
import FriendsPage from './friends/FriendsPage';
// import { Audio } from 'react-loader-spinner';

const HomePageContents = () => {
  return (
    <div>
      <div>
        <BannerPage></BannerPage>
      </div>
      <div>
        <Suspense fallback={<div className='text-center text-4xl'><span className="loading loading-spinner text-primary"></span>
          <span className="loading loading-spinner text-secondary"></span>
          <span className="loading loading-spinner text-accent"></span>
          <span className="loading loading-spinner text-neutral"></span>
          <span className="loading loading-spinner text-info"></span>
          <span className="loading loading-spinner text-success"></span>
          <span className="loading loading-spinner text-warning"></span>
          <span className="loading loading-spinner text-error"></span></div>}>

          <FriendsPage></FriendsPage>
        </Suspense>
      </div>
    </div>
  );
};

export default HomePageContents;
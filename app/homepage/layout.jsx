import React from 'react';

const HomePageLayout = ({children}) => {
  return (
    <div>
      <main>
        {children}
      </main>
    </div>
  );
};

export default HomePageLayout;
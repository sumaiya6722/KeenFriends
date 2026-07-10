// import React from 'react';

import { Button } from "@heroui/react";


const BannerPage = () => {
  return (
    <div className="text-center p-25">
      <div>
        <h3 className="font-bold text-5xl">Friends to keep close in your life</h3>
        <p className="text-[#64748B] my-10">Your personal shelf of meaningful connections. Browse, tend, and nurture the <br /> relationships that matter most.</p>
      </div>

      <div>
        <Button className='bg-[#244D3F] text-white rounded'>+ Add a Friend</Button>
      </div>

      <div className="grid grid-cols-4 gap-5 py-10">
        <div className="flex flex-col items-center py-15 rounded-xl bg-white shadow-md">
          <h3 className="font-semibold text-3xl">10</h3>
          <p className="text-[#64748B]">Total Friends</p>
        </div>
        <div className="flex flex-col items-center py-15 rounded-xl  bg-white shadow-md">
          <h3 className="font-semibold text-3xl">12</h3>
          <p className="text-[#64748B]">On Track</p>
        </div>
        <div className="flex flex-col items-center py-15 rounded-xl bg-white shadow-md">
          <h3 className="font-semibold text-3xl">6</h3>
          <p className="text-[#64748B]">Need Attention</p>
        </div>
        <div className="flex flex-col items-center py-15 rounded-xl bg-white shadow-md">
          <h3 className="font-semibold text-3xl">10</h3>
          <p className="text-[#64748B]">Interactions This Month</p>
        </div>
      </div>

    </div>
  );
};

export default BannerPage;
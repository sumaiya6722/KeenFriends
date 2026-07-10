import React from 'react';
import { FaSquareFacebook, FaSquareInstagram } from 'react-icons/fa6';
import { IoLogoDiscord } from 'react-icons/io5';

const Footer = () => {
  return (
    <div className='bg-[#244D3F] text-white p-20 text-center'>
      <div>
        <h2 className='text-5xl font-bold'>KeenKeeper</h2>
        <p className='opacity-70 my-4'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
      </div>
      <div className='flex flex-col items-center mb-7'>
        <h3 className='text-xl'>Social Links</h3>
        <div className='flex gap-3 text-[#244D3F] my-3'>
          <div className='p-2 rounded-full bg-white'><FaSquareFacebook /></div>
          <div className='p-2 rounded-full bg-white'><FaSquareInstagram /></div>
          <div className='p-2 rounded-full bg-white'><IoLogoDiscord /></div>
        </div>
      </div>
      <div className='flex justify-between pt-7 border-t opacity-70'>
        <h3>© 2026 KeenKeeper. All rights reserved.</h3>
        <div>
          <ul className='flex gap-3'>
            <li>Privacy policy</li>
            <li>Terms of services</li>
            <li>Cookies</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
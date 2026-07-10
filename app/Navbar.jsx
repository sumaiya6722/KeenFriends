// import React from 'react';
'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoHomeOutline } from "react-icons/io5";
import { MdAccessTime } from "react-icons/md";
import { TfiStatsUp } from "react-icons/tfi";

const Navbar = () => {

  const pathname = usePathname();

  const links = (
  <>
    <li className="text-lg">
      <Link 
        href="/homepage" 
        className={pathname === '/homepage' ? 'bg-[#244D3F] text-white active' : 'opacity-60'}
      >
        <IoHomeOutline /> Home
      </Link>
    </li>
    <li className="text-lg">
      <Link 
        href="/timeline" 
        className={pathname === '/timeline' ? 'bg-[#244D3F] text-white active' : 'opacity-60'}
      >
        <MdAccessTime /> Timeline
      </Link>
    </li>
    <li className="text-lg">
      <Link 
        href="/stats" 
        className={pathname === '/stats' ? 'bg-[#244D3F] text-white active' : 'opacity-60'}
      >
        <TfiStatsUp /> Stats
      </Link>
    </li>
  </>
);

  // const links = <>
  //   <li className="text-lg"><Link href={'/homepage'} className={`${pathname === '/homepage' ? 'bg-[#244D3F] text-white' : 'btn btn-ghost text-lg opacity-60'}`}><IoHomeOutline />Home</Link></li>
  //   <li className="text-lg"><Link href={'/timeline'} className={`${pathname === '/timeline' ? 'bg-[#244D3F] text-white' : 'btn btn-ghost text-lg opacity-60'}`}><MdAccessTime />Timeline</Link></li>
  //   <li className="text-lg"><Link href={'/stats'} className={`${pathname === '/stats' ? 'bg-[#244D3F] text-white' : 'btn btn-ghost text-lg opacity-60'}`}><TfiStatsUp />Stats</Link></li>
  // </>
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-1">
          <a className="btn btn-ghost text-2xl font-bold"><span>Keen<span className="text-[#244D3F] font-semibold">Keeper</span></span></a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-3 gap-1">

            {links}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
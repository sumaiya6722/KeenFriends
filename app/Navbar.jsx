// import React from 'react';
'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMenu } from "react-icons/fi";
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

  return (
    <div>
      {/* <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-1">
          <a className="btn btn-ghost text-2xl font-bold"><span>Keen<span className="text-[#244D3F] font-semibold">Keeper</span></span></a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-3 gap-1">

            {links}
          </ul>
        </div>
      </div> */}


      <div className="navbar bg-base-100 shadow-sm px-4 md:px-8">
        {/* LEFT SECTION: Hamburger for mobile & Site Logo branding */}
        <div className="flex-1 gap-2">
          {/* Mobile & Tablet Dropdown Trigger Menu */}
          <div className="dropdown lg:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden p-2">
              <FiMenu className="h-6 w-6" />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-50 p-2 shadow bg-base-100 rounded-box w-52 gap-1 border border-slate-100"
            >
              {links}
            </ul>
          </div>

          {/* Site Branding Title Link */}
          <Link href="/homepage" className="btn btn-ghost text-xl md:text-2xl font-bold px-1 normal-case">
            <span>Keen<span className="text-[#244D3F] font-semibold">Keeper</span></span>
          </Link>
        </div>

        {/* RIGHT SECTION: Standard menu elements for larger screens */}
        <div className="flex-none hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-1 text-base font-medium">
            {links}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import DesktopLogo from '../../public/airbnb-logo-desktop.png';
import MobileLogo from '../../public/Airbnb-Emblem.png';
import UserNav from './UserNav';
import { SearchModalComponent } from './SearchComponent';

const Navbar = () => {
  return (
    <nav className='w-full border-b'>
      <div className='flex items-center justify-between container mx-auto px-5 lg:px-10 py-5'>
        <Link href={`/`}>
          <Image
            src={DesktopLogo}
            alt='Desktop Logo'
            className='w-32 hidden lg:block'
          ></Image>
          <Image
            src={MobileLogo}
            alt='Molbie Logo'
            className='max-h-10  w-auto lg:hidden block'
          ></Image>
        </Link>

        <SearchModalComponent />

        <UserNav />
      </div>
    </nav>
  );
};

export default Navbar;

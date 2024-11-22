import React from 'react';
import Link from 'next/link';

function TopHeader() {
  return (
    <header className='top-0 sticky py-1 bg-[#F0F1F1] z-50'>
      <div className='flex justify-between items-center px-5 md:px-16 pl:px-28 xl:px-26 2xl:px-56'>
        <div className='flex justify-start items-center gap-5 text-xs'>
          <Link href={`/`} className='text-[#F97316]'>English</Link>
          <Link href={`/`}>Help Center</Link>
          <Link href={`/`}>Helpline:123456</Link>
        </div>
        <div className='flex justify-end items-center gap-3 text-xs'>
          <Link href={`/`} >Become a Seller</Link>
          <Link href={`/`}>Order Track</Link>
          <Link href={`/`} className='text-[#F97316]'>Sing Up / Login</Link>
        </div>
      </div>
    </header>
  );
}

export default TopHeader;



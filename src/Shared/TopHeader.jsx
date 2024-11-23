import React from 'react';
import Link from 'next/link';

function TopHeader() {
  return (
    <header className='top-0 sticky py-1 bg-[#F0F1F1] z-50 hidden lg:block'>
      <div className='flex justify-between items-center px-5 md:px-16 pl:px-28 xl:px-26 2xl:px-56'>
        <div className='flex justify-start items-center gap-5 text-xs'>
          <Link href={`/`} className='text-[#F97316] flex justify-start items-center gap-2'>
            English
            <svg width="8" height="4" viewBox="0 0 8 4" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.311459 2.98135C0.11707 3.17749 0.118482 3.49407 0.314613 3.68845C0.510745 3.88284 0.827324 3.88143 1.02171 3.6853L2.18659 2.50999C2.65934 2.03299 2.9847 1.70579 3.26039 1.48439C3.52819 1.26932 3.7002 1.19554 3.85425 1.17591C3.95098 1.16358 4.04886 1.16358 4.14559 1.17591C4.29964 1.19554 4.47165 1.26932 4.73945 1.48439C5.01513 1.70579 5.34049 2.03299 5.81325 2.50999L6.97812 3.6853C7.17251 3.88143 7.48909 3.88284 7.68522 3.68845C7.88136 3.49407 7.88277 3.17749 7.68838 2.98136L6.50252 1.78487C6.05589 1.33422 5.69086 0.965902 5.36561 0.704698C5.0274 0.433079 4.6841 0.236457 4.27203 0.183933C4.09134 0.160903 3.90849 0.160903 3.72781 0.183933C3.31574 0.236457 2.97244 0.433079 2.63422 0.704698C2.30898 0.965903 1.94395 1.33422 1.49732 1.78486L0.311459 2.98135Z" fill="#F97316" />
            </svg>

          </Link>
          <Link href={`/`} className='text-[#434343]'>Help Center</Link>
          <Link href={`/`} className='text-xs text-[#434343]'>Helpline: 0964781656</Link>
        </div>
        <div className='flex justify-end items-center gap-3 text-xs'>
          <Link href={`/`} className='text-[#434343]'>Become a Seller</Link>
          <Link href={`/`} className='text-[#434343]'>Order Track</Link>
          <Link href={`/`} className='text-[#F97316]'>Sing Up / Login</Link>
        </div>
      </div>
    </header>
  );
}

export default TopHeader;



import Image from 'next/image';
import React, { useEffect, useState, useRef } from 'react';
import image from "@/assets/images/alfaz2.png"
import CloudServiceIcon from '@/Icon/CloudServiceIcon';
import ChildrenItem from '@/Shared/ChildrenItem';
import SearchIcon from '@/components/Icon/SearchIcon';
import CartIcon from '@/components/Icon/CartIcon';

function Header() {
  const divRef = useRef(null);
  const [data, setData] = useState([]);
  const [children, setChilderen] = useState([]);
  const [subChildren, setSubChilderen] = useState([]);
  const [subSubChildren, setSubSubChilderen] = useState([]);
  const [subSubSubChildren, setSubSubSubChilderen] = useState([]);
  const [showModal, setShowModal] = useState(true);
  const [link, setLink] = useState([]);

  const LinkSetup = (links) => {
    const linkSegments = links.split('/').filter(Boolean);
    setLink(linkSegments);
  }

  const FetchData = async () => {
    try {
      const response = await fetch(`https://api.shope.com.bd/api/v1/public/hero-categories`);
      const data = await response.json();
      setData(data)
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    FetchData()
  }, [])



  const handleClickOutside = (event) => {
    if (divRef.current && !divRef.current.contains(event.target)) {
      setShowModal(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);




  return (
    <header className='top-0 lg:top-[24px] sticky bg-[#FFFFFF] z-50 py-2'>
      <div className='flex justify-between items-center gap-4 md:gap-5 lg:gap-8 px-2 md:px-16 pl:px-28 xl:px-26 2xl:px-56 z-50 bg-[#FFFFFF]'>
        <div>
          <Image src={image} height={100} width={129} alt='fjghdius' className='h-[38px] w-[129px]' onClick={() => setShowModal(!showModal)} />
        </div>
        <div className='relative w-full'>
          <input placeholder='Search Product' className='bg-[#EFF0F5] rounded-lg h-[36px] lg:h-[44px] w-full py-[7px] lg:py-[11px] px-1.5 lg:px-3 focus:outline-none' />
          <SearchIcon className='absolute top-0 right-[-3px] lg:right-0 h-[36px] lg:h-[44px]' />
        </div>
        <div>
          <CartIcon className='' />
        </div>
        <div className='hidden lg:block'>
          <CloudServiceIcon />
        </div>
      </div>
      <div className='px-5 md:px-16 pl:px-28 xl:px-26 2xl:px-56 relative z-40'>
        <div className='absolute p-2 z-40'>
          {
            showModal && data?.length > 0 && <div className='flex justify-start gap-2 bg-white p-2.5'>
              {data && data?.length > 0 && <ChildrenItem menuItem={data} onChangeData={(childrens, links) => { setChilderen(childrens); LinkSetup(links) }} link={link?.[0]} />}

              {children && children?.length > 0 && <ChildrenItem menuItem={children} onChangeData={(childrens, links) => { setSubChilderen(childrens); LinkSetup(links) }} link={`${link?.[0]}/${link?.[1]}`} />}

              {children && subChildren && subChildren?.length > 0 && <ChildrenItem menuItem={subChildren} onChangeData={(childrens, links) => { setSubSubChilderen(childrens); LinkSetup(links) }} link={`${link?.[0]}/${link?.[1]}/${link?.[2]}`} />}

              {children && subChildren && subSubChildren && subSubChildren?.length > 0 && <ChildrenItem menuItem={subSubChildren} onChangeData={(childrens, links) => { setSubSubSubChilderen(childrens); LinkSetup(links) }} link={`${link?.[0]}/${link?.[1]}/${link?.[2]}/${link?.[3]}`} />}

              {children && subChildren && subSubSubChildren && subSubSubChildren?.length > 0 && <ChildrenItem menuItem={subSubSubChildren} onChangeData={(childrens, links) => { LinkSetup(links) }} link={`${link?.[0]}/${link?.[1]}/${link?.[2]}/${link?.[3]}/${link?.[4]}`} />}
            </div>
          }
        </div>
      </div>
      <div onClick={() => setShowModal(false)} className='bg-red-100 h-screen w-full opacity-0 absolute'>
        smhegfawhegf
      </div>
    </header>
  );
}


export default Header;


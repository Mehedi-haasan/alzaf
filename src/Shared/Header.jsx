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
    <header className='top-0 lg:top-[34px] sticky bg-[#FFFFFF] z-50 pb-2'>
      <div className='flex justify-between items-center gap-8 px-5 md:px-16 pl:px-28 xl:px-26 2xl:px-56'>
        <div>
          <Image src={image} height={100} width={129} alt='fjghdius' className='h-[38px] w-[129px]' />
        </div>
        <div className='relative w-full'>
          <input placeholder='Search Product' className='bg-[#EFF0F5] rounded-lg h-[44px] w-full py-[11px] px-3 focus:outline-none' />
          <SearchIcon className='absolute top-0 right-0' />
        </div>
        <div>
          <CartIcon className='' />
        </div>
        <div>
          <CloudServiceIcon />
        </div>
      </div>
      <div className='px-5 md:px-16 pl:px-28 xl:px-26 2xl:px-56 relative'>
        <div className='absolute p-2'>
          {
            showModal && data?.length > 0 && <div ref={divRef} className='flex justify-start gap-2 bg-white p-2.5'>
              {data && data?.length > 0 && <ChildrenItem menuItem={data} onChangeData={(childrens, links) => { setChilderen(childrens); LinkSetup(links) }} link={link?.[0]} />}

              {children && children?.length > 0 && <ChildrenItem menuItem={children} onChangeData={(childrens, links) => { setSubChilderen(childrens); LinkSetup(links) }} link={`${link?.[0]}/${link?.[1]}`}  />}

              {children && subChildren && subChildren?.length > 0 && <ChildrenItem menuItem={subChildren} onChangeData={(childrens, links) => { setSubSubChilderen(childrens); LinkSetup(links) }} link={`${link?.[0]}/${link?.[1]}/${link?.[2]}`} />}

              {children && subChildren && subSubChildren && subSubChildren?.length > 0 && <ChildrenItem menuItem={subSubChildren} onChangeData={(childrens, links) => { setSubSubSubChilderen(childrens); LinkSetup(links) }} link={`${link?.[0]}/${link?.[1]}/${link?.[2]}/${link?.[3]}`} />}

              {children && subChildren && subSubSubChildren && subSubSubChildren?.length > 0 && <ChildrenItem menuItem={subSubSubChildren} onChangeData={(childrens, links) => { LinkSetup(links) }} link={`${link?.[0]}/${link?.[1]}/${link?.[2]}/${link?.[3]}/${link?.[4]}`} />}
            </div>
          }
        </div>
      </div>
    </header>
  );
}


export default Header;


import React from 'react';
import RightArrow from '@/Icon/RightArrow';
import Link from 'next/link';

const ChildrenItem = ({ menuItem, onChangeData, link }) => {
    function removeFirstSlash(input) {
        return input.replace('/', '');
      }

    return (
        <div className='w-[230px]'>
            {
                menuItem?.map((item, i) => {
                    return <div key={i} className={`flex justify-between items-center py-1 group ${link === removeFirstSlash(item?.link) ? 'text-red-300' : ''}`}
                        onMouseEnter={() => { onChangeData(item?.childrens, item?.link) }}
                    >
                        <Link href={item?.link} className='text-sm'>{item?.title}</Link>
                        <RightArrow className="hidden group-hover:block" />
                    </div>
                })
            }
        </div>
    );
};

export default ChildrenItem;
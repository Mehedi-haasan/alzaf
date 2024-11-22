import FacebookIcon from '@/components/Icon/FacebookIcon';
import InstargamIcon from '@/components/Icon/InstagramIcon';
import LinkedinIcon from '@/components/Icon/LinkedinIcon';
import WhatsAppIcon from '@/components/Icon/WhatsAppIcon';
import React from 'react';

const Footer = () => {
    return (
        <div className='bg-white relative'>

            <hr />

            <div className='lg:flex justify-between items-start w-full lg:w-[95%] gap-4 mx-auto pb-5'>

                <div className='mb-6 pb-5 ml-5'>
                    <div className='flex py-3 mt-5'>
                        <h1 className='font-semibold text-2xl'>Name</h1>
                    </div>
                    <p className="pt-1">Alzaf Shop is an Online Shopping Mall .</p>
                    <p>in Bangladesh We deliver various types of Unique &</p>
                    <p> Quality products all over Bangladesh.</p>


                    <div className="mt-">
                        <h1 className="font-semibold text-xl py-2">See Our New Updates</h1>
                        <div className="flex gap-3">
                            <FacebookIcon />
                            <InstargamIcon />
                            <WhatsAppIcon />
                            <LinkedinIcon />
                        </div>
                    </div>
                </div>


                <div className=' ml-5'>
                    <h1 className=' text-2xl text-black font-semibold pt-8 '>Importants</h1>
                    <a href='jiuds' className='hover:text-red-500 flex pt-4 pb-1'>Case Study</a>
                    <h1 to="/liveChat" className='hover:text-red-500 flex py-1'>Live chat</h1>
                    <h1 to={`/productrequest`} className='hover:text-red-500 flex py-1'>Product Request</h1>
                    <h1 to="/privacypolicy" className='hover:text-red-500 flex py-1'>Privacy Policy</h1>
                </div>



                <div className='ml-5'>
                    <h1 className=' text-2xl font-semibold pt-8'>Offer Box</h1><br />
                    <h1 className='text-sm'>Use coupon NEWDAY <br />Get 15/- Discount!</h1>
                </div>


            </div>
            <hr />

        </div>
    );
};

export default Footer;
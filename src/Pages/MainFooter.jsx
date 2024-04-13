import React from 'react';
import { IoLanguageSharp } from "react-icons/io5";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";


const MainFooter = () => {
    return (
        <>
            <div className='w-[100%] bg-[#141414]  sm:pt-[80px] pt-[50px] pb-6 mx-[120px]'>
                <div className=' max-w-[1170px] mx-auto  text-neutral-400'>
                    <div className='flex gap-5 text-2xl text-white'>
                        <FaFacebookF/>
                        <FaInstagram/>
                        <FaTwitter/>
                        <FaYoutube/>
                    </div>
                    <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 pt-[20px] pb-4 text-[13px]'>
                        <div className='pb-4'>
                            <ul className='space-y-3 '>
                                <li className='hover:underline'><a href="">Audio Description</a></li>
                                <li className='hover:underline '><a href="">Investor Relations</a></li>
                                <li className='hover:underline '><a href="">Legal Notice</a></li>
                            </ul>
                        </div>
                        <div className='pb-4'>
                            <ul className=' space-y-3 '>
                                <li className='hover:underline'><a href="">Help Centre</a></li>
                                <li className='hover:underline '><a href="">Jobs</a></li>
                                <li className='hover:underline '><a href="">Cookie Preferences</a></li>
                            </ul>
                        </div>
                        <div className='pb-4'>
                            <ul className=' space-y-3 '>
                                <li className='hover:underline'><a href="">Gift Cards</a></li>
                                <li className='hover:underline '><a href="">Terms of Use</a></li>
                                <li className='hover:underline '><a href="">Corporate Information</a></li>
                            </ul>
                        </div>
                        <div className='pb-4'>
                            <ul className=' space-y-3 '>
                                <li className='hover:underline'><a href="">Media Centre</a></li>
                                <li className='hover:underline '><a href="">Privacy</a></li>
                                <li className='hover:underline '><a href="">Contact Us</a></li>

                            </ul>
                        </div>
                    </div>
                        <button className="bg-transparent bg-opacity-40  border border-bdrclr text-[13px] hover:text-white px-2 py-1 ">Service Code
                        </button>
                    <div className='pt-4 text-[13px]'>
                        <span>© 1997-2024 Netflix, Inc.</span>
                    </div>
                </div>
            </div >
        </>
    )
}

export default MainFooter
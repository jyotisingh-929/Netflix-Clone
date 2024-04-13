import React from 'react';
import { IoLanguageSharp } from "react-icons/io5";

const Footer = () => {
    return (
        <>
            <div className='w-[100%] bg-black border-t-[8px] border-t-gray sm:py-[60px] py-[50px] '>
                <div className=' max-w-[1170px] mx-auto  text-neutral-400'>
                    <h3 className='text-[17px]'>Questions? Call <a href="tel:000-800-919-1694" className='underline'>000-800-919-1694</a></h3>
                    <div className='grid sm:grid-cols-4 grid-cols-1 pt-[20px] pb-8 '>
                        <div>
                            <ul className='underline space-y-3 '>
                                <li><a href="">FAQ</a></li>
                                <li><a href="">Investor Relations</a></li>
                                <li><a href="">Privacy</a></li>
                                <li><a href="">Speed Test</a></li>
                            </ul>
                        </div>
                        <div>
                            <ul className='underline space-y-3 '>
                                <li><a href="">Help Centre</a></li>
                                <li><a href="">Jobs</a></li>
                                <li><a href="">Cookie Preferences</a></li>
                                <li><a href="">Legal Notices</a></li>
                            </ul>
                        </div>
                        <div>
                            <ul className='underline space-y-3 '>
                                <li><a href="">Account</a></li>
                                <li><a href="">Ways to Watch</a></li>
                                <li><a href="">Corporate Information</a></li>
                                <li><a href="">Only on Netflix</a></li>
                            </ul>
                        </div>
                        <div>
                            <ul className='underline space-y-3 '>
                                <li><a href="">Media Centre</a></li>
                                <li><a href="">Terms of Use</a></li>
                                <li><a href="">Contact Us</a></li>

                            </ul>
                        </div>
                    </div>
                    <div className="relative ">
                        <IoLanguageSharp className='text-white absolute top-2 left-1' />
                        <select className="bg-transparent bg-opacity-40 rounded-md border border-bdrclr text-white text-sm px-5 py-1 ">
                            <option className='text-black'>English</option>
                            <option className='text-black'>Hindi</option>
                        </select>
                    </div>
                    <div className='pt-4'>
                        <span>Netflix India</span>
                    </div>
                </div>
            </div >

        </>
    )
}

export default Footer
import React, { useEffect, useState } from 'react';
import Img from '../assets/user-img.png';
import { FaBell } from "react-icons/fa6";
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { IoMdArrowDropdown } from "react-icons/io";
import Logo from '../assets/NetFlixLogo.png';

const API_URL = `https://image.tmdb.org/t/p/original/?apikey=${process.env.REACT_APP_API}`;

const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [query, setQuery] = useState("kung");

    useEffect(() => {

    })

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <>
            <header className={`fixed top-0 z-50 flex w-full items-center justify-between px-4  lg:px-14  transition-all ${isScrolled && 'bg-[#141414] '}`}>
                <div className='flex items-center space-x-2 md:space-x-10'>
                    <img
                        width={120}
                        src={Logo}
                        className='cursor-pointer object-contain'
                        alt=""
                    />
                    <ul className='hidden space-x-4 md:flex'>
                        <li className='cursor-pointer text-sm font-medium text-[#e5e5e5] transition duration-[.4s] '><a href="">TV Show</a></li>
                        <li className='cursor-pointer text-sm font-medium text-[#e5e5e5] transition duration-[.4s] '><a href="">Movies</a></li>
                        <li className='cursor-pointer text-sm font-medium text-[#e5e5e5] transition duration-[.4s] '><a href="">Home</a></li>
                        <li className='cursor-pointer text-sm font-medium text-[#e5e5e5] transition duration-[.4s] '><a href="">New & Popular</a></li>
                        <li className='cursor-pointer text-sm font-medium text-[#e5e5e5] transition duration-[.4s] '><a href="">My List</a></li>
                        <li className='cursor-pointer text-sm font-medium text-[#e5e5e5] transition duration-[.4s] '><a href="">Browse By Language</a></li>
                    </ul>
                </div>
                <div className='flex items-center space-x-4 text-sm font-medium'>
                    <div className='flex bg-white text-neutral-500 font-medium rounded-[3px] px-2 py-1'>
                        <FaSearch className='mt-1 w-5 h-4 mr-3 cursor-pointer' />
                        <input
                            type="text"
                            placeholder="search movie"
                            className='outline-none'
                        // value={query}
                        // onChange={(e) => setQuery(e.target.value)}
                        />
                    </div>
                    {/* <FaSearch className='h-6 w-6 sm:inline cursor-pointer' /> */}
                    <p className='hidden lg:inline cursor-pointer'>Children</p>
                    <FaBell className='h-6 w-6 cursor-pointer' />
                    <Link to="">
                        <img src={Img} alt="" className='w-8 h-8 rounded cursor-pointer' />
                    </Link>
                    <IoMdArrowDropdown className='hidden h-6 w-6 sm:inline cursor-pointer' />
                </div>
            </header>
        </>
    )
}

export default NavBar
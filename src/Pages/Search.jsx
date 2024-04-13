import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Img from '../assets/user-img.png';
import { FaBell } from "react-icons/fa6";
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { IoMdArrowDropdown } from "react-icons/io";
import Logo from '../assets/NetFlixLogo.png';

const API_KEY ="aa204ffa3409506ff1022d7454897e6a";
const API_URL = `/search/movie?api_key=${API_KEY}&language=en-US&query=`;
const DEBOUNCE_DELAY = 500;

const Search = ({ onSelectItem }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (inputValue.trim() !== '') {
            const timeoutId = setTimeout(() => {
                fetchSuggestions();
            }, DEBOUNCE_DELAY);

            return () => {
                clearTimeout(timeoutId);
            };
        } else {
            setSuggestions([]);
        }
    }, [inputValue]);

    const fetchSuggestions = async () => {
        try {
            setLoading(true);
            const response = await axios.get(`${process.env.REACT_APP_API}${API_URL}${inputValue}`);
            setSuggestions(response.data);

        } catch (error) {
            console.error('Error fetching suggestions:', error);
        } finally {
            setLoading(false);
        }
    };
    const handleSelectItem = (item) => {
        onSelectItem(item);
    };



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
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                        />
                    </div>
                    {loading && <div>Loading...</div>}
                    {suggestions.length > 0 && (
                        <div className="list">
                            {suggestions.map((item, index) => (
                                <a
                                    key={index}
                                    className="list-item"
                                    onClick={() => handleSelectItem(item)}
                                >
                                    {item}
                                </a>
                            ))}
                        </div>
                    )}
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

export default Search
import React, { useEffect, useState } from 'react';
import NetflixImg from '../assets/netflix.png';
import { FaPlay } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";
// import Row from './Row';
import requests from '../Utils/requests';
import axios from 'axios';

const Banner = () => {

    const [movie, setMovie] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`${process.env.REACT_APP_API}${requests.fetchNetflixOriginals}`);
            setMovie(
                response.data.results[
                Math.floor(Math.random() * response.data.results.length - 1)
                ]
            );
            return response;
        };
        fetchData();
    }, []);

    const truncate = (str, n) => {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    };

    return (
        <>
            <div className='text-white object-contain h-[680px] mb-10 scrollbar-hide overflow-y-hidden overflow-x-scroll'
                style={{
                    backgroundSize: 'cover',
                    backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path || movie?.poster_path}")`,
                    backgroundPosition: 'center center',
                }}>
                <div className='md:ml-[60px] ml-6 pt-[200px] h-[190px]  max-w-[1170px] mx-auto'>
                    <div className='flex items-center -ml-3'>
                        <img src={NetflixImg} alt="" className='w-12 h-14' /><span className='text-neutral-400 text-2xl font-semibold tracking-widest'>SERIES</span>
                    </div>
                    <h1 className='sm:text-[50px] text-[30px] font-semibold pb-4'>
                        {movie?.title || movie?.name || movie?.original_name}
                    </h1>

                    <h1 className=' leading-normal md:text-[1.4vw] text-[15px] font-normal  max-w-[480px] '>
                        {truncate(movie?.overview, 150)}
                    </h1>
                    <div className='flex gap-4 pt-8'>
                        <div className='flex bg-white text-black font-medium rounded-md px-6 py-2'>
                            <FaPlay className='mt-1 w-5 h-6 mr-3 cursor-pointer' />
                            <button className='sm:text-xl text-sm'>Play</button>
                        </div>
                        <div className='flex bg-moreclr text-white font-medium rounded-md px-6 py-2'>
                            <AiOutlineInfoCircle className='mt-1 w-6 h-6 mr-3 cursor-pointer' />
                            <button className='sm:text-xl text-sm'>More Info</button>
                        </div>
                    </div> 
                </div>  
                
                {/* <div className='banner-fadeBottom mt-96'></div> */}
                <dir className='bg-gradient-to-b h-screen relative '></dir>
            </div>
            
        


            {/* <div className="relative h-screen">

                <video
                    className="absolute top-0 left-0 w-full h-full object-cover z-0"
                    autoPlay
                    loop
                    muted
                >
                    <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 z-10"></div>
                <div className="absolute w-full h-full  justify-start text-left pl-11 pt-56  z-20">
                    <div className='flex'>
                        <img src={NetflixImg} alt="" className='w-12 h-14' /><span className='text-neutral-400 text-2xl font-semibold pt-3 tracking-widest'>SERIES</span>
                    </div>
                    <div className='text-white flex text-center text-5xl font-mediumbold leading-tight tracking-wider pl-5'>
                        <h1>ACTION <br /><span className='text-red-custom'>&</span><br /> MOVIES</h1>
                    </div>
                    <div className='pl-5 text-white pt-4'>
                        <span className='text-xl'>Stream unlimited movies and TV shows on your<br /> phone, tablet, laptop, and TV.</span>
                    </div>
                    <div className='flex gap-4 pl-5 pt-8'>
                        <div className='flex bg-white text-black font-medium rounded-md px-6 py-2'>
                            <FaPlay className='mt-1 w-7 h-7 mr-3 cursor-pointer' />
                            <button className='text-xl'>Play</button>
                        </div>
                        <div className='flex bg-moreclr text-white font-medium rounded-md px-6 py-2'>
                            <AiOutlineInfoCircle className='mt-1 w-7 h-7 mr-3 cursor-pointer' />
                            <button className='text-xl'>More Info</button>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    )
}

export default Banner
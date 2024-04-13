import React from 'react';
import TvImg from '../../assets/tvimage.png';
import MobileImg from '../../assets/mobile.jpg';
import Img1 from '../../assets/boxshot.png';
import Img2 from '../../assets/download-icon.gif';
import DeviceImg from '../../assets/device-pile-in.png';
import ChildImg from '../../assets/children.png';

const TvShow = () => {
    return (
        <>
            {/* first section */}
            <div className='w-[100%] bg-black border-t-[8px] border-t-gray sm:py-[80px] py-[50px] '>
                <div className=' max-w-[1170px] mx-auto px-[15px] '>
                    <div className='grid sm:grid-cols-2 grid-cols-1 items-center'>
                        <div className='text-white '>
                            <h1 className='sm:text-[50px] text-[40px] font-black tracking-wide pb-6'>Enjoy on your TV</h1>
                            <span className='sm:text-[25px] text-[20px]'>Watch on smart TVs, PlayStation, Xbox, Chromecast,<br /> Apple TV, Blu-ray players and more.</span>
                        </div>
                        <div className="relative">

                            {/* Video */}
                            <video className="absolute  w-[80%] left-[10%] bottom-[20%] z-[1] " autoPlay loop muted>
                                <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v" type="video/mp4" />

                            </video>
                            {/* Background Image */}
                            <img
                                className="relative z-[2]"
                                src={TvImg}
                                alt="Background"
                            />

                        </div>
                    </div>
                </div>
            </div>

            {/* second section */}

            <div className='w-[100%] bg-black border-t-[8px] border-t-gray sm:py-[80px] py-[70px] '>
                <div className=' max-w-[1170px] mx-auto px-[15px] '>
                    <div className='grid sm:grid-cols-2 grid-cols-1 items-center'>
                        <div className="relative sm:order-1 order-2">
                            <img
                                className="relative z-[1]"
                                src={MobileImg}
                                alt="Background"
                            />
                            <div className='absolute sm:w-[60%] w-[70%] sm:left-[20%] left-[15%] bottom-[5%] z-[2] items-center border-[2px] rounded-md border-gray  grid grid-cols-[70%_auto] bg-black '>
                                <div className='grid grid-cols-[30%_auto] p-[10px] items-center gap-4'>
                                    <img src={Img1} alt="" className='' />
                                    <div>
                                    <h3 className='text-white text-[14px] font-bold'>Stranger Things</h3>
                                    <span className='text-blue text-sm'>Downloading...</span>
                                    </div>
                                </div>
                                <div className='max-w-[50px] mx-auto'>
                                    <img src={Img2} alt="" />
                                </div>
                            </div>

                        </div>
                        <div className='text-white sm:order-2 order-1'>
                            <h1 className='sm:text-[50px] text-[40px] font-black tracking-wide sm:leading-[65px] leading-[50px] pb-6'>Download your shows to watch offline</h1>
                            <span className='sm:text-[25px] text-[20px]'>Save your favourites easily and always have<br /> something to watch.</span>
                        </div>
                    </div>
                </div>
            </div>


            {/* third section */}

            <div className='w-[100%] bg-black border-t-[8px] border-t-gray sm:py-[80px] py-[50px] '>
                <div className=' max-w-[1170px] mx-auto px-[15px] '>
                    <div className='grid sm:grid-cols-2 grid-cols-1 items-center'>
                        <div className='text-white '>
                            <h1 className='sm:text-[50px] text-[40px] font-black tracking-wide pb-6'>Watch everywhere</h1>
                            <span className='sm:text-[25px] text-[20px]'>Stream unlimited movies and TV shows on your<br /> phone, tablet, laptop, and TV.</span>
                        </div>
                        <div className="relative">

                            {/* Video */}
                            <video className="absolute  w-[65%] left-[17%] bottom-[45%] z-[1] " autoPlay loop muted>
                                <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v" type="video/mp4" />

                            </video>
                            {/* Background Image */}
                            <img
                                className="relative z-[2]"
                                src={DeviceImg}
                                alt="Background"
                            />

                        </div>
                    </div>
                </div>
            </div>


            {/* fourth section */}

            <div className='w-[100%] bg-black border-t-[8px] border-t-gray sm:py-[80px] py-[50px] '>
                <div className=' max-w-[1170px] mx-auto px-[15px] '>
                    <div className='grid sm:grid-cols-2 grid-cols-1 items-center'> 
                        <div className=" sm:order-1 order-2 ">
                            <img
                                className=""
                                src={ChildImg}
                                alt="Background"
                            />

                        </div>
                        <div className='text-white sm:order-2 order-1'>
                            <h1 className='sm:text-[50px] text-[40px] font-black tracking-wide sm:leading-[65px] leading-[50px] pb-6'>Create profiles for kids</h1>
                            <span className='sm:text-[25px] text-[20px]'>Send children on adventures with their favourite<br />characters in a space made just for them—free with<br /> your membership.</span>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default TvShow
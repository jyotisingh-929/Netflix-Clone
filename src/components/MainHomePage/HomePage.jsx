import React from 'react';
import img1 from '../../assets/Banner.jpg';

const HomePage = () => {
    return (
        <div className="overflow-hidden w-[100%] h-[100vh] bg-[rgba(0,0,0,0.5)] flex justify-center items-center">
            <div className=" absolute text-white text-center max-w-[1170px] mx-auto sm:py-[150px] py-[50px]  z-10">

                <h1 className="leading-tight text-[35px] sm:text-[50px] font-black" >Unlimited movies, TV shows and more.</h1>

                <h2 className="py-5 text-[25px]">Watch anywhere. Cancel anytime.</h2>

                <p className=" text-[20px]">Ready to watch? Enter your email to create or restart your membership.</p>

                <div className=" max-w-[690px] sm:px-[10px] px-[40px] mx-auto mt-[25px] ">
                    <form action="" className='grid grid-cols-1 sm:grid-cols-[70%_auto] gap-2'>
                        <input type="text" className="bg-black bg-opacity-60 h-[50px] px-4 border border-bdrclr rounded-md " placeholder="Email Address" />

                        <button className=" text-white text-2xl font-bold px-[10px] h-[50px]  border border-transparent rounded-md bg-red-custom hover:bg-[rgba(193,17,25)] duration-700 hover:text-white focus:outline-none">
                            Get Started 
                        </button>
                        
                    </form>

                </div>
            </div>
            <div className="shadow absolute top-0 w-full h-full bg-black opacity-55 "></div>
            <img src={img1} alt="" className=" bg-cover w-full h-full  " />
        </div>
    )
}

export default HomePage
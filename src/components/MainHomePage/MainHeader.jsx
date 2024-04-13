import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IoLanguageSharp } from "react-icons/io5";
import Logo from '../../assets/NetFlixLogo.png';




const MainHeader = () => {
  const navigate = useNavigate();

  const clickHandler = (e) => {
    e.preventDefault();
    navigate('/signin');
  }
  return (
    <>
      <div className='absolute w-[100%]  bg-cover  z-10'>
        <div className=' max-w-[1170px] mx-auto'>
          <div className='grid sm:grid-cols-2 grid-cols-[30%_auto] px-3 items-center'>
            <div className=''>
              <Link to="/">
                <img width={185} src={Logo} alt="" />
              </Link>
            </div>
            <div className='justify-end flex gap-4'>
              <div className="relative">
                <IoLanguageSharp className='text-white absolute top-2 left-1' />
                <select className="bg-transparent bg-opacity-40 rounded-md border border-bdrclr text-white text-sm px-5 py-1 ">
                  <option className='text-black'>English</option>
                  <option className='text-black'>Hindi</option>
                </select>
              </div>
              <button className="bg-red-custom px-4 rounded-md hover:bg-[rgba(193,17,25)] duration-700 text-white" onClick={clickHandler} >Sign In</button>
            </div>
          </div>

        </div>
      </div>
    </>
    // <header className="topNav absolute w-full bg-gradient-to-b from-black via-transparent to-transparent h-screen z-10">
    //   <nav className="navbar grid grid-cols-2 justify-between flex-wrap  p-6">
    //     <div className="flex ">
    //       <Link to="/" className="flex ml-36">
    //         <img className=" w-[150px] " src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="" />
    //       </Link>
    //     </div>
    //     <div className="flex ml-96">
    //       <form className="flex text-white gap-6" role="search">

    //         <select className="bg-transparent bg-opacity-40 rounded-md border border-bdrclr text-white text-sm px-4 py-0 ">
    //           <option className='text-black'>English</option>
    //           <option className='text-black'>Hindi</option>
    //         </select>
    //         <button className="bg-red-custom px-4 rounded-md hover:bg-red-600 duration-700" onClick={clickHandler} >Sign In</button>

    //       </form>
    //     </div>
    //   </nav>
    // </header>
  )
}

export default MainHeader


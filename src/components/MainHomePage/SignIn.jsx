import React, { useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
import { FirebaseConfig } from './FirebaseConfig.jsx';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import img1 from '../../assets/signpage.jpg';
import { IoIosCloseCircleOutline } from "react-icons/io";


const SignIn = () => {

    initializeApp(FirebaseConfig);
    const navigate = useNavigate();
    const location = useLocation();
    const page = location.pathname === '/signin' ? true : false;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isUserExist, setUserExist] = useState(false);
    const [isEmailUsed, setIsEmailUsed] = useState(false);
    const [emailValid, setEmailValid] = useState(true);
    const [passwordValid, setPasswordValid] = useState(true);

    const auth = getAuth();

    const validation = (fieldName, value) => {
        switch (fieldName) {
            case 'email':
                return value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
            case 'password':
                return value.length >= 6;
            default:
                break;
        }
    };

    const clickHandler = (e) => {
        e.preventDefault();

        if (!validation('email', email) || !validation('password', password)) {
            setEmailValid(validation('email', email));
            setPasswordValid(validation('password', password));
            return;
        }

        if (page) {
            signInWithEmailAndPassword(auth, email, password)
                .then(auth => {
                    if (auth) {
                        navigate('/dashboard');
                    }
                })
                .catch(error => setUserExist(true));
        } else {
            createUserWithEmailAndPassword(auth, email, password)
                .then(auth => {
                    if (auth) {
                        navigate('/dashboard');
                    }
                })
                .catch(error => setIsEmailUsed(true))
        }
    };

    useEffect(() => {
        setUserExist(false);
        setIsEmailUsed(false);
    }, [location]);

    const emailOnChangeHandler = (e) => {
        setEmail(e.target.value);
    };



    return (
        <>
            <div className="overflow-hidden w-[100%] h-screen bg-[rgba(0,0,0,0.5)] flex justify-center items-center ">
                <div className=" absolute text-white text-left max-w-[690px] sm:px-[60px] px-[30px] mx-auto sm:py-[40px]  py-[40px] bg-black bg-opacity-80 mt-[100px]  z-10">
                    <h1 className='text-3xl  text-white font-bold'>{page ? 'Sign In' : 'Register'}</h1>
                    <br />
                    <div className=''>
                    <form action="" className=' flex-col justify-center items-center grid grid-cols-1 '>
                        <input
                            type="email"
                            placeholder='Email or Phone Number'
                            value={email}
                            onChange={emailOnChangeHandler}
                            className='bg-#121010 bg-opacity-85 mb-5 text-white  h-[50px] px-4 ring-1 ring-bdrclr rounded-md ' />
                        {!emailValid && <p className='text-sm flex text-left gap-2 -mt-3 pb-2 text-red-custom'><IoIosCloseCircleOutline className='w-6 h-5' />Please enter a valid email address or phone number.</p>}
                        <input
                            type="password"
                            placeholder='Password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className='bg-#121010 bg-opacity-85 mb-5 text-white  h-[50px] h-14 px-4 border border-bdrclr rounded-md' />
                        {!passwordValid && <p className='text-sm flex gap-2 -mt-3 pb-2 text-red-custom'><IoIosCloseCircleOutline className='w-6 h-5' />Your password must contain between 4 and 60 characters.</p>}

                        <button onClick={clickHandler} className='bg-red-custom hover:bg-red-600 duration-700 mb-4 text-white  h-[50px]  px-4 border border-transparent hover:border- rounded-md'>{page ? 'Sign in' : 'Register'}</button>
                        <span className='text-gray-400 font-medium text-center'>OR</span>
                        <button onClick={clickHandler} className='bg-slate-400 bg-opacity-30 duration-700 mb-4  text-white  h-[50px]  px-4 border border-transparent hover:border- rounded-md'>{page ? 'Use sign in code' : 'Password'}</button>
                        <span className='hover:underline text-gray-300 font-medium mb-4 text-center'><Link>Forgot password?</Link></span>
                        {
                            page && <div className='text-white space-x-2 '>
                                <input type="checkbox" value="" id='flexCheckDefault' className='h-4 w-4' />
                                <label htmlFor="flexCheckDefault">Remember me</label>
                            </div>
                        }
                    </form>
                    </div>
                    {
                        isUserExist && <p className=' bg-red-custom text-center rounded-md p-2'>User does not exist | Go for Sign Up</p>
                    }
                    {
                        isEmailUsed && <p className='bg-red-custom text-center rounded-md p-2'>Email already in use | Go for Sign In</p>
                    }
                    <div className='text-lg font-medium mt-4 '>
                        <div className='text-gray-400   font-medium mt-4'>
                            {page ? 'New to Netflix?' : 'Existing User'}
                            <Link className='text-white pl-3 underline' to={page ? '/register' : '/signin'}>
                                {page ? 'Sign up now' : 'Sign In'}
                            </Link>.
                        </div>
                    </div>
                    <div className='text-xs  mt-4 text-gray-400 tracking-wide'>
                        <p>This page is protected by Google reCAPTCHA to ensure<br /> you're not a bot. <Link className='text-blue hover:underline'>Learn more</Link>.</p>
                    </div>
                </div>
                <div className="shadow absolute top-0 w-full h-full bg-black opacity-55 "></div>
                <img src={img1} alt="" className="w-full h-full" />
            </div>
        </>
    )
}

export default SignIn
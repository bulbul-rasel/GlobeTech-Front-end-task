import React from 'react';
import navigator from '../asset/Vector 1.svg'
import eye from '../asset/Eye.svg'
import './Login.css'

const Login = () => {
    return (
        <div class="grid grid-cols-4  bg-slate-300">
            <div class=" col-span-1 bg-blue-900 ">
                <h1 className='uppercase text-center text-blue-500 font-Montserrat font-bold text-2xl'>Glovetech</h1>
                <h1 className='uppercase text-center text-blue-500 font-Montserrat font-bold text-2xl'>Companey Limited</h1>
                <p className='text-white text-xs text-center py-14 font-Montserrat tracking-widest'>Make yourself digitalized & more effecient</p>
                <button className='pt-96 px-28 '>

                    <img src={navigator} alt="" />
                </button>
            </div>
            <div class="col-span-3 ">
                <div className='h-screen flex bg-gray-bg1'>
                    <div className='w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-6'>
                        <h1 className='text-3xl font-light text-black my-6 text-center font-Montserrat'>
                            Welcome
                        </h1>
                        <p className='text-xs font-light text-center font-Montserrat my-4 text-gray-400'>Sign in to your account</p>

                        <form >
                            <div>
                                <input
                                    type='email'
                                    className={`w-full p-2 text-primary border rounded-lg outline-none text-sm transition duration-150 ease-in-out mb-4`}
                                    id='email'
                                    placeholder='Email'
                                />
                            </div>
                            {/* <div class="relative">
                                <input
                                    type='password'
                                    className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                                    id='password'
                                    placeholder='Password'
                                />
                                <img className='fa-eye' src={eye} alt="" />
                            </div> */}
                            <div class="relative"> <input class="pass1 h-10 w-full border mt-3 text-sm rounded-lg outline-none p-2" type="password" placeholder="Password" /> <img className='fa-eye' src={eye} alt="" /> </div>

                            <div className='flex justify-center items-center mt-6'>
                                <button
                                    className="btn bg-sky-500 border-none font-bold rounded-md w-full px-8 text-white"
                                >
                                    Login
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* <div class="col-end-7 col-span-2 ...">03</div>
            <div class="col-start-1 col-end-7 ...">04</div> */}
        </div>
    );
};

export default Login;
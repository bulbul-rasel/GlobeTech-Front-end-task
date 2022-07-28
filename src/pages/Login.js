import React from 'react';
import navigator from '../asset/Vector 1.svg'

const Login = () => {
    return (
        <div class="grid grid-cols-4  bg-slate-300">
            <div class=" col-span-1 bg-blue-900 ">
                <h1 className='uppercase text-center text-blue-500 font-Montserrat font-bold text-2xl'>Glovetech</h1>
                <h1 className='uppercase text-center text-blue-500 font-Montserrat font-bold text-2xl'>Companey Limited</h1>
                <p className='text-white text-xs text-center py-14 font-Montserrat tracking-widest'>Make yourself digitalized & more effecient</p>
                <button className='pt-96 px-28'>

                    <img src={navigator} alt="" />
                </button>
            </div>
            <div class="col-span-3 ">
                <div className='h-screen flex bg-gray-bg1'>
                    <div className='w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16'>
                        <h1 className='text-2xl font-medium text-primary mt-4 mb-12 text-center'>
                            Log in to your account 🔐
                        </h1>

                        <form >
                            <div>
                                <label htmlFor='email'>Email</label>
                                <input
                                    type='email'
                                    className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                                    id='email'
                                    placeholder='Your Email'
                                />
                            </div>
                            <div>
                                <label htmlFor='password'>Password</label>
                                <input
                                    type='password'
                                    className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                                    id='password'
                                    placeholder='Your Password'
                                />
                            </div>

                            <div className='flex justify-center items-center mt-6'>
                                <button
                                    className={`bg-green py-2 px-4 text-sm text-white rounded border border-green focus:outline-none focus:border-green-dark`}
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
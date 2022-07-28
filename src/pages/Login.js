import React from 'react';

const Login = () => {
    return (
        <div class="grid grid-cols-4 gap-4">
            <div class="col-start-1 col-span-1 bg-blue-900">
                <h1 className='uppercase text-center text-blue-500 font-Montserrat font-bold text-2xl'>Glovetech</h1>
                <h1 className='uppercase text-center text-blue-500 font-Montserrat font-bold text-2xl'>Companey Limited</h1>
                <p className='text-white text-xs text-center py-14 font-Montserrat tracking-widest'>Make yourself digitalized & more effecient</p>
            </div>
            <div class="col-start-2 col-end-3 ...">02</div>
            {/* <div class="col-end-7 col-span-2 ...">03</div>
            <div class="col-start-1 col-end-7 ...">04</div> */}
        </div>
    );
};

export default Login;
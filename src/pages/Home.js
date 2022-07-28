import React from 'react';
import PrimaryColor from './PrimaryColor';
import Vector from './Vector';


const Home = () => {
    return (
        <div>
            <Vector></Vector>
            <div class="hero min-h-screen bg-blue-900 px-52 ">

                <div class="hero-content ">

                    <div>
                        <h1 class="text-7xl font-bold text-blue-500  font-Poppins">Welcome to </h1>
                        <h1 class="font-bold font-Poppins text-transparent text-7xl bg-clip-text bg-gradient-to-r from-yellow-300 to-lime-300">Globetech</h1>
                        <p class="py-6  text-blue-500  font-Poppins">We are committed to deliver <span className='text-yellow-300'> best IT services</span>. Our Consultants have experience in working with clients. We have extensive experience in the software application space and also offer a broad range and depth of technology.</p>
                        {/* <button class="btn btn-primary">Get Started</button> */}
                        <PrimaryColor>Support Us</PrimaryColor>
                        <button class="btn btn-outline btn-primary capitalize  font-Poppins rounded-none font-bold mx-10">Our Mission</button>
                    </div>
                    <img src="https://placeimg.com/260/400/arch" class="max-w-sm rounded-lg shadow-2xl" />
                </div>
            </div>
        </div>
    );
};

export default Home;
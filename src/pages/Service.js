import React from 'react';

const Service = (props) => {
    const { name, img, description } = props.service;
    return (
        <div class="card w-80 bg-base-100 shadow-xl ">
            <figure class="px-10 pt-10 w-full">
                <img src={img} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title text-sky-500 font-Montserrat font-medium pb-9">{name}</h2>
                <p className='font-thin text-justify font-Poppins'>{description}</p>
                <div class="card-actions">
                    <button class="btn bg-sky-500 border-none font-bold rounded-2xl px-8 text-white">More</button>
                </div>
            </div>
        </div>
    );
};

export default Service;
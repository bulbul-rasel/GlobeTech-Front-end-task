import React from 'react';

const PrimaryColor = ({ children }) => {
    return (
        <button className="btn btn-primary  font-Poppins px-5 border-none capitalize bg-gradient-to-r from-yellow-300 to-lime-300 font-bold text-black ">{children}</button>
    );
};

export default PrimaryColor;
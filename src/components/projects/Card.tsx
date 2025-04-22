import React from "react";

const Card = ({title, subtitle}) => {
    return (
        <div className="p-2">
            <div className=" w-200 h-100 flex flex-col items-center justify-center bg-gradient-to-br from-[#2a2a33] to-[#1c1c21] p-6 rounded-3xl text-white shadow-lg  transition"
            style={{background: 'linear-gradient(200deg,rgba(152, 255, 206, 1) 0%, rgba(131, 143, 255, 1) 49%, rgba(96, 178, 255, 1) 100%)'}}>
                <h3 className="text-5xl font-bold mb-1">{title}</h3>
                <p className="text-lg text-white-400 mb-2">{subtitle}</p>
            </div>
        </div>
    );
};

export default Card;
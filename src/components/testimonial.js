import React from 'react';

/**
 * 
 * @param {{lable:string,image:string,job:string,name:string}} props 
 * @returns 
 */
const Testimonial = (props) => {
    return (
        <div className='flex text-center items-center px-10 md:px-5 flex-col'>
            <img className='rounded-full w-16 my-10' src={props.image} alt={props.name} />
            <p className='font-bold text-l text-gray-600 font-sans'>{props.lable}</p>
            <p className="mt-8 text-l text-gray-800 font-bold font-['Fraunces']">{props.name}</p>
            <p className='text-xs mt-3 font-semibold text-gray-400 font-sans'>{props.job}</p>
        </div>
    );
};

export default Testimonial;
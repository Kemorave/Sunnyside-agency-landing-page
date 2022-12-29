import React from 'react';

import '../index.css';

/**
 * 
 * @param {{title:string,flavor:string,activeFlavor:string,subtitle:string,link:string}} props 
 * @returns 
 */
function TextCard(props) {
    return (
        <div className='flex flex-col justify-center items-center 
text-center md:items-start  md:text-start      gap-5 p-10   lg:p-20'>
            <p className="font-['Fraunces'] pr-4  md:text-3xl  text-4xl font-black text-gray-800">{props.title}</p>
            <p className=' text-sm font-semibold text-gray-500'>{props.subtitle}</p>
            <div className='col-1 group cursor-pointer'>
                <p className={"font-serif px-2 text-l font-bold uppercase"}>{props.link ?? "Learn more"}</p>
                <div className={`rounded-lg  -mt-[6px] mx-1 h-2 ${props.flavor} ${props.activeFlavor}`} />
            </div>
        </div>
    );
}

export default TextCard;
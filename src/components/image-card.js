import React from 'react';
/**
 * 
 * @param {{title:string,background:string,flavor:string,subtitle:string}} props 
 * @returns 
 */
const ImageCard = (props) => {
    return (
        <div className={`flex h-[28rem] text-center flex-col bg-cover bg-top ${props.background} ${props.flavor} items-center justify-end gap-5 p-5`}>
            <p className="font-['Fraunces']  text-xl font-black ">{props.title}</p>
            <p className='text-sm mx-3  md:mx-10 mb-10 font-semibold '>{props.subtitle}</p>
            
        </div>
    );
};

export default ImageCard;
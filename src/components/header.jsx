import React from 'react';


const HeaderComponent = () => {
    return (
        <div className='font-Source flex h-20 bg-gray-800 text-white p-4'>
            <div className='flex items-center ml-20 space-x-32 cursor-pointer'>
               <h2 className='text-2xl'>Home</h2>
               <h2 className='text-2xl'>Team</h2>
               <h2 className='text-2xl'>About</h2>
               <h2 className='text-2xl'>Projects</h2>
            </div>
        <h2 className='ml-auto items-center'> Join Now</h2>
        </div>
    );
    }



export default HeaderComponent;

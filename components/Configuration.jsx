import React from 'react'

const Configuration = () => {
    return (
        <div className='text-white  md:ml-5 lg:ml-15 text-md lg:text-lg'>
            <h1 className='font-bold lg:text-4xl md:3xl'>Elan The Statement</h1>
            <p className='font-bold'>Sector 49, Gurgaon</p>
            <div className='flex md:flex-col lg:flex-row gap-1 lg:gap-5'>
                <div className='flex flex-row lg:gap-5 md:gap-3 font-bold  mt-3'>
                    <div><h1 className='text-yellow-300'>PRICE</h1><p className='mt-2'>10 Cr* Onwards</p> </div><div className='h-15 w-[1.5px] bg-slate-400'></div>
                    <div><h1 className='text-yellow-300'>SIZE</h1><p className='mt-2'>4300 Sq.ft.*</p> </div><div className='h-15 w-[1.5px] bg-slate-400'></div>
                    <div><h1 className='text-yellow-300'>CONFIGURATION</h1><p className='mt-2'>4BHK Apartments/Penthouses</p> </div><div className='h-15 w-[1.5px] bg-slate-400'></div>
                    <div><h1 className='text-yellow-300'>STATUS</h1><p className='mt-2'>New Launche</p> </div><div className='h-15 w-[1.5px] bg-slate-400'></div>
                    <div><h1 className='text-yellow-300'>RERA NO.</h1><p className='mt-2'>Applied</p></div>
                </div>
                <div className='items-center flex'><button className=' mt-2 bg-[#F5C542] px-5 py-2 font-bold ml-5'>SCHEDULE SITE VISIT</button></div>
            </div>
        </div>
    )
}

export default Configuration

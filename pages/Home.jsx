import React from 'react'
import Navbar from '../components/Navbar'
import Configuration from '../components/Configuration'


const Home = () => {
    return (
        <div id="home">
            <div className="w-full h-130 lg:h-screen bg-[url('/elan-banner.jpg')] bg-cover bg-center relative">
                {/* small screen */}
                <div className='absolute lg:hidden top-70 left-0 w-full h-full font-bold text-center text-white'>
                    <h1 className='w-full text-4xl '>Elan The Statement</h1>
                    <p className='w-full text-2xl'>Sector 49, Gurgaon</p>
                </div>
                {/* large screen */}
                <div className='absolute left-0 top-[75vh] hidden lg:flex text-slate-400'>
                    <Configuration />
                </div>
            </div>
        </div>
    )
}

export default Home

import React from 'react'
import Navbar from '../components/Navbar'
import Configuration from '../components/Configuration'


const Home = () => {
    return (
        <div id="home">
            <div className="w-full h-screen bg-[url('/elan-banner.jpg')] bg-cover bg-center">

                <div className='absolute left-0 top-[75vh] hidden lg:flex text-slate-400'>
                    <Configuration />
                </div>
            </div>
        </div>
    )
}

export default Home

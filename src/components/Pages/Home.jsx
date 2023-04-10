import React from 'react';
import headerImg from '../../assets/All Images/P3OLGJ1 copy 1.png'

const Home = () => {
    return (
        <div className='grid grid-cols-2 gap-10 px-[8rem] items-center'>
            <div className='space-y-5 '>
                <h1 className='text-6xl font-bold leading-tight'>One Step <br/> Closer To Your <br/> <span className='text-[#7e90fe]'>Dream Job</span></h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className='bg-[#7E90FE] hover:bg-sky-600 px-5 py-3 text-lg font-semibold text-white rounded-md'>Get Started</button>
            </div>
            <div className=''>
                <img className='' src={headerImg} alt="" />
            </div>
        </div>
    );
};

export default Home;
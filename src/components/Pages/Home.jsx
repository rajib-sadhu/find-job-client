import React, { useState } from 'react';
import headerImg from '../../assets/All Images/P3OLGJ1 copy 1.png'
import { useLoaderData } from 'react-router-dom';
import JobCategory from './JobCategory';
import FeaturedJob from './FeaturedJob';

const Home = () => {

    const loadData = useLoaderData();
 
    const [data, setData] = useState(loadData.slice(0,4));

    const handleShowAllData = ()=>{
        setData(loadData)
    }


    return (
        <div>
            {/* top header section */}
            <div className='grid md:grid-cols-2 grid-cols-1 gap-10 md:px-[8rem] px-5 items-center'>
                <div className='space-y-5 px-5'>
                    <h1 className='md:text-6xl text-4xl font-bold leading-tight'>One Step <br /> Closer To Your <br /> <span className='text-[#7e90fe]'>Dream Job</span></h1>
                    <p>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className='bg-[#7E90FE] hover:bg-sky-600 px-5 py-3 text-lg font-semibold text-white rounded-md'>Get Started</button>
                </div>
                <div className=''>
                    <img className='' src={headerImg} alt="" />
                </div>
            </div>
            {/* middle section */}
            <div>
                <JobCategory/>
            </div>
            {/* applied job sections */}
            <div className='mt-16 mb-5'>
                <FeaturedJob data={data} />
            </div>
            <div className='my-10 text-center'>
           
           {
            data.length<=4?
            <button 
            className='bg-[#2743ff] hover:bg-[#0018b3] text-white px-3 py-2 rounded-md font-bold'
            onClick={handleShowAllData}
            >
                    Show All
                </button>
                :
                ''
           }
            </div>
        </div>
    );
};

export default Home;
import React from 'react';

import priceIcon from '../../assets/Icons/Frame.png';
import locationIcon from '../../assets/Icons/Frame-4.png';


const JobCard = ({ job }) => {
    const { id, company_name, job_title, job_type, work_arrangement, job_location, salary, logo, } = job;
    return (
        <div className='space-y-3 border-2 p-5'>
            <img className='w-28 h-14 object-contain' src={logo} alt="" />
            <h1 className='text-2xl font-semibold'>{job_title}</h1>
            <p className='text-lg font-semibold text-slate-500'>{company_name}</p>
            <div className='space-x-3'>
                <span className='border-2 border-[#2743ff] px-2 py-1 text-[#2743ff] font-bold'>
                    {job_type}
                </span>
                <span className='border-2 border-[#2743ff] px-2 py-1 text-[#2743ff] font-bold'>
                    {work_arrangement}
                </span>
            </div>

            <div className='flex gap-5'>
                <p><img src={priceIcon} className='inline' alt="" /> {job_location}</p>
                <p><img src={locationIcon} className='inline' alt="" /> {salary}</p>
            </div>
            <div>
                <button className='bg-[#2743ff] hover:bg-[#0018b3] text-white px-3 py-2 rounded-md font-bold'>
                    View Details
                </button>
            </div>
        </div>
    );
};

export default JobCard;
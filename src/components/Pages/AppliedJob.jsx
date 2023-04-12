import React, { useEffect, useState } from 'react';
import { getAppliedJobs } from '../../utilities/fakedb';
import { Link, useLoaderData } from 'react-router-dom';

import priceIcon from '../../assets/Icons/Frame.png';
import locationIcon from '../../assets/Icons/Frame-4.png';

const AppliedJob = () => {

    const data = useLoaderData();
    const [jobs, setJobs] = useState([]);
    const [filterValue, setFilterValue] = useState('')


    useEffect(() => {

        const storedJobs = getAppliedJobs();
        const newJob = [];

        for (const id of storedJobs) {
            const findJob = data.find(job => id === job.id);
            newJob.push(findJob);
        }

        setJobs(newJob);

    }, [])



    const handleFilter = (event)=>{
        const value = event.target.value;
        setFilterValue(value);
    }

    const filteredData = filterValue
    ? jobs.filter((job) => job.work_arrangement === filterValue)
    : jobs;

    return (
        <div className='px-52 my-20'>
            <div className='text-right'>
                <select className='bg-slate-300 px-2 py-1 rounded-sm' 
                value={filterValue}
                onChange={handleFilter}
                >
                    <option value="">----</option>
                    <option value="Remote">Remote</option>
                    <option value="On-Site">On-Site</option>
                </select>
            </div>
            <div className='mt-10 space-y-5'>
            {
                    filteredData.map(job => <AppliedJobCard key={job.id} job={job} /> )
                }
            </div>
        </div>
    );
};

const AppliedJobCard = ({ job }) => {
   
    const { id, company_name, job_title, job_type, work_arrangement, job_location, salary, logo } = job;

    return (
        <div className='flex gap-5 border-2 p-8 rounded-md'>
            <img className='w-36 h-36 p-5 rounded-md bg-slate-200 object-contain' src={logo} alt="" />
            <div className='space-y-3 flex-grow'>
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
            </div>
            <div className='my-auto'>
                <Link className='bg-[#2743ff] hover:bg-[#0018b3] text-white px-3 py-2 rounded-md font-bold'
                    to={`/job-details`} state={{ job: job }}
                >
                    View Details
                </Link>
            </div>
        </div>
    )
}


export default AppliedJob;
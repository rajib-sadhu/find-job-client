import React from 'react';
import JobCard from './JobCard';

const FeaturedJob = ({ data }) => {

    return (
        <>
            <div className='text-center space-y-4 px-2'>
                <h1 className=' text-3xl font-extrabold'>Featured Jobs</h1>
                <p className=' text-lg text-slate-500'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='grid md:grid-cols-2 md:w-3/4 mx-auto mt-16 md:gap-8 gap-3 md:p-0 p-2'>
                {
                    data.map(job => <JobCard key={job.id} job={job} /> )
                }
            </div>
        </>
    );
};

export default FeaturedJob;
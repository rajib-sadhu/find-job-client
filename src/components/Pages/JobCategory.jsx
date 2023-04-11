import React from 'react';
import CategoryCard from './CategoryCard';

const JobCategory = () => {



    return (
        <div className='mt-8 mb-5'>
            <div className='text-center space-y-4'>
            <h1 className=' text-3xl font-semibold'>Job Category</h1>
            <p className=' text-lg text-slate-500'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div>
                <CategoryCard/>
            </div>
        </div>
    );
};

export default JobCategory;
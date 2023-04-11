import React from 'react';
import accountImage from '../../assets/Icons/accounts 1.png'

const CategoryCard = () => {
    return (
        <div className='flex md:flex-row flex-col justify-around mt-10 md:px-16 px-5 md:gap-0 gap-5'>
            <div className='px-10 py-8 bg-slate-100  space-y-2'>
                <img src={accountImage} alt="" className='p-3 rounded-md bg-slate-200' />
                <h1 className='text-2xl font-semibold'>Account & Finance</h1>
                <p className='text-lg text-slate-400'>300 Jobs Available</p>
            </div>
            
            <div className='px-10 py-8 bg-slate-100  space-y-2'>
                <img src={accountImage} alt="" className='p-3 rounded-md bg-slate-200' />
                <h1 className='text-2xl font-semibold'>Creative Design</h1>
                <p className='text-lg text-slate-400'>100+ Jobs Available</p>
            </div>
            <div className='px-10 py-8 bg-slate-100  space-y-2'>
                <img src={accountImage} alt="" className='p-3 rounded-md bg-slate-200' />
                <h1 className='text-2xl font-semibold'>Marketing & Sales</h1>
                <p className='text-lg text-slate-400'>150 Jobs Available</p>
            </div>
            <div className='px-10 py-8 bg-slate-100  space-y-2'>
                <img src={accountImage} alt="" className='p-3 rounded-md bg-slate-200' />
                <h1 className='text-2xl font-semibold'>Engineering Job</h1>
                <p className='text-lg text-slate-400'>200+ Jobs Available</p>
            </div>

        </div>
    );
};

export default CategoryCard;
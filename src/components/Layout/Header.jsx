import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='md:block hidden flex justify-between items-center md:px-20 py-10'>
            <div>
                <Link className='font-bold text-2xl' to='/'>Find Job</Link>
            </div>
            <div className='space-x-5'>
                <Link className='hover:text-[#7E90FE]' to='/'>Home</Link>
                <Link className='hover:text-[#7E90FE]' to='/statistics'>Statistics</Link>
                <Link className='hover:text-[#7E90FE]' to='/applied-jobs'>Applied Jobs</Link>
                <Link className='hover:text-[#7E90FE]' to='/blog'>Blog</Link>
            </div>
            <div>
            <button
            className='bg-[#7E90FE] hover:bg-sky-500 px-5 py-2 text-lg font-semibold text-white rounded-md'
            >Start Applying</button>
            </div>
        </div>
    );
};

export default Header;
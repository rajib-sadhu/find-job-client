import React from 'react';
import { useLocation } from 'react-router-dom';

// logos



const JobDetails = () => {

    const location = useLocation();
    const { data } = location.state;

    console.log(data);

    const { id, company_name, job_title, job_type, work_arrangement, job_location, salary, logo, email, phone, education, experience, responsibilities, job_description } = data;


    return (
        <div>

            <div className='w-full flex flex-col items-center space-y-3 '>
                <img src={logo} className='md:w-48 w-28 md:h-20 object-contain' alt="" />
                <h1 className='text-2xl font-bold'>{company_name}</h1>
            </div>

            <div className='grid md:grid-cols-3 grid-cols-1 md:px-20 px-5 md:mt-16 mt-3 md:gap-10 gap-5'>
            <div className='md:col-span-2 space-y-5' >
                <p>
                    <span className=' font-semibold me-3'>Job Description:</span>
                    {job_description}
                </p>
                <p>
                    <span className=' font-semibold me-3'>Job Responsibility:</span>
                    {responsibilities}
                </p>
                <h2 className=' font-semibold me-3'>Educational Requirements:</h2>
                <p> {education} </p>

                <h2 className=' font-semibold me-3'>Experiences:</h2>
                <p> {experience} </p>


            </div>
            <div className='col-span-1 bg-[#aab5ff] p-8 rounded-md'>

                <h1 className='text-xl font-bold'>Job Details</h1>
                <div className='my-2'>
                    <p>
                        <span className='font-semibold'>Salary: </span>
                        {salary}
                    </p>
                    <p>
                        <span className='font-semibold'>Job Title: </span>
                        {job_title}
                    </p>
                </div>
                <h1 className='text-xl font-bold'>Contact Information</h1>
                <div className='my-2'>
                    <p>
                        <span className='font-semibold'>Phone: </span>
                        {phone}
                    </p>
                    <p>
                        <span className='font-semibold'>Email: </span>
                        {email}
                    </p>
                    <p>
                        <span className='font-semibold'>Address: </span>
                        {job_location}
                    </p>
                </div>
                <div className='mt-10'>
                    <button className='w-full font-bold text-white bg-[#2743ff] hover:bg-[#0015a0] py-2 rounded-md'>
                        Apply Now
                    </button>
                </div>

            </div>
        </div>
        </div>
    );
};

export default JobDetails;
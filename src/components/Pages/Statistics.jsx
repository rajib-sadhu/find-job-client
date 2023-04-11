import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Statistics = () => {

    const data = [
        {
            name: 'A-1',
            marks: 60
        },
        {
            name: 'A-2',
            marks: 59
        },
        {
            name: 'A-3',
            marks: 30
        },
        {
            name: 'A-4',
            marks: 59
        },
        {
            name: 'A-5',
            marks: 60
        },
        {
            name: 'A-6',
            marks: 59
        },
        {
            name: 'A-7',
            marks: 50
        },
        {
            name: 'A-8',
            marks: 60
        },
    ]

    return (
        <div className='w-full mt-10 flex justify-center'>
            <div className=''>
                <LineChart

                    width={1000}
                    height={300}
                    data={data}

                >

                    <Line dataKey='marks' stroke='green'></Line>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />


                </LineChart>
            </div>
        </div>
    );
};

export default Statistics;
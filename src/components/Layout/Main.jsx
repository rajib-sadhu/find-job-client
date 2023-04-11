import React from 'react';
import Header from './Header';
import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
            <Toaster/>
        </div>
    );
};

export default Main;
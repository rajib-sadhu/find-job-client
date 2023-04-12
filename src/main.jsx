import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './components/Layout/Main';
import Home from './components/Pages/Home';
import AppliedJob from './components/Pages/AppliedJob';
import Blog from './components/Pages/Blog';
import Statistics from './components/Pages/Statistics';
import JobDetails from './components/Pages/JobDetails';
import ErrorPage from './components/Layout/ErrorPage';

const router = createBrowserRouter([
{
  path:'/',
  element:<Main/>,
  errorElement:<ErrorPage/>,
  children:[
    {
      path:'/',
      element:<Home/>,
      loader:()=>fetch('job.json')
    },
    {
      path:'/statistics',
      element:<Statistics/>
    },
    {
      path:'/applied-jobs',
      element:<AppliedJob/>,
      loader:()=>fetch('job.json')
    },
    {
      path:'/job-details',
      element:<JobDetails/>
    },
    {
      path:'/blog',
      element:<Blog/>
    },

  ]
}

])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

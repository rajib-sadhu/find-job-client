import React from 'react';

const Blog = () => {
    return (

        <div className='w-full my-5'>

            <h1 className='mt-10 text-center text-3xl font-bold'>Blog</h1>
            <div className='mx-auto w-1/2 mt-8 space-y-5'>
                <div className='space-y-2 p-5'>
                    <h1 className='text-xl font-semibold'>Q1: when should we use context api in React js? </h1>
                    <p>
                        ContextAPi is a feature in React Js that allows for passing data through the component tree without having to pass via props manually at every level components. It is useful when you have data that needs to be accessed by many components.
                    </p>
                </div>

                <div className='space-y-2 p-5'>
                    <h1 className='text-xl font-semibold'>Q2: What is custom hooks ?</h1>
                    <p>
                        In React JS we used custom hooks as a function which is allows to reuse logic in multiple components, hooks recieve some data and return some data.
                    </p>
                </div>

                <div className='space-y-2 p-5'>
                    <h1 className='text-xl font-semibold'>Q3: What is useRef() ?</h1>
                    <p>
                        useRef() is a hook in React JS that returns a mutable object. This hook used to access and modify the properties of a DOM element or a React component instance, without re render of the component.
                    </p>
                </div>

                <div className='space-y-2 p-5'>
                    <h1 className='text-xl font-semibold'>Q4: What is useMemo() ? </h1>
                    <p>
                        useMemo() is a hook in React JS, it's optimize the performnce  of a component by catching the results. It purpose is prevent expensive computations from being re-execute unnecessarily.
                    </p>
                </div>


            </div>
        </div>
    );
};

export default Blog;
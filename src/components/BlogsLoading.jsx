import React from 'react';

const BlogsLoading = () => {
    return (
        <>
            <div className="p-4 w-full md:w-1/3">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden 
                    BlogLoading"
                >
                    <div className='lg:h-48 md:h-36 w-full object-cover object-center'></div>
                    <div className="p-6 w-full h-[300px] "></div>
                </div>
            </div>
        </>
    )
}

export { BlogsLoading };

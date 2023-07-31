import React from 'react'

const Rightbar = ({ array }) => {

    const rawData = [
        "Mastering the Basics: A Beginner's Guide to Coding",
        "Best Practices for Writing Clean and Maintainable Code",
        "Demystifying Object-Oriented Programming: A Comprehensive Guide",
        "Exploring the Power of Functional Programming in Code",
        "Building Responsive Web Designs with HTML and CSS",
        "Harnessing the Potential of JavaScript: Tips and Tricks",
        "Introduction to Data Structures and Algorithms for Programmers",
        "Creating Cross-Platform Mobile Apps with React Native",
        "Deep Dive into Machine Learning: Algorithms and Implementation",
        "Securing Your Code: Essential Tips for Writing Secure Software",
    ]

    return (
        <div className='w-full p-[8px] flex flex-col gap-[8px] ' >


            <div className=' p-[4px] ' >
                <h3 className='text-[24px] font-semibold  ' >In this page:</h3>
                <div className='flex flex-col gap-[6px] max-h-[20rem] overflow-y-scroll' >
                    {
                        array.map((title, index) => (
                            <button key={index} className='d text-[12px] text-start text-black hover:text-purple-500 ' >{title}</button>
                        ))
                    }
                </div>
            </div>

        </div>
    )
}

export default Rightbar
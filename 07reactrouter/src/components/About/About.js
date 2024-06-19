import React from 'react'
import {Link} from 'react-router-dom'

export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            React development is carried out by passionate developers
                        </h2>
                        <p className="mt-6 text-gray-600">
                        Learning ReactJS involves starting with the official documentation to grasp the core concepts, followed by building small projects to gain practical experience. Focus on mastering the component-based architecture, understanding how to manage state and props, and learning about hooks and the context API for advanced state management. 
                        </p>
                        <p className="mt-4 text-gray-600">
                        Additionally, dive into performance optimization techniques to create efficient applications. Engaging with the React community through forums, GitHub, and online tutorials can provide valuable insights and help resolve challenges, ensuring you stay updated with best practices and new developments.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
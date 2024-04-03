import React from 'react'
import Image from 'next/image'

const Footer = () => {
    return (
        <footer className="text-gray-600 body-font bg-purple-200" id='connect'>
            <section className="text-gray-600 body-font">
                <div className="container px-5 pt-8 mx-auto flex flex-wrap items-center">
                    <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
                        <h1 className="title-font font-medium text-3xl text-gray-900">Enhance your store's stock management efficiency with StockManager.</h1>
                        <p className="leading-relaxed mt-4">Hey there I'm Pratik Samarth, a dedicated Software Development Engineer, fueled by a fervent passion for full-stack development. Committed to continuous growth, I thrive as a self-learner in the ever-evolving world of technology. Let's explore opportunities for future collaborations. Connect with me today.</p>
                    </div>
                    <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                        <h2 className="text-purple-900 text-lg font-medium title-font mb-5">Lets Connect!</h2>
                        <div className="relative mb-4">
                            <input type="text" id="full-name" placeholder="your name"name="full-name" className="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="relative mb-4">
                            <input type="email" id="email" name="email" placeholder="your email" className="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="relative mb-4">
                            <textarea id="message" name="message" placeholder="message" className="w-full bg-white rounded border border-purple-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 h-20 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                        </div>
                        <button className="text-white bg-purple-500 border-0 py-2 px-8 focus:outline-none hover:bg-purple-600 rounded text-lg">Submit</button>
                        <p className="text-xs text-gray-500 mt-3">Lets Connect!</p>
                    </div>
                    <p className="text-sm text-black-500 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© Copyright 2024 - All right reserved. Developed by
                        <a href="https://www.linkedin.com/in/pratik-samarth-ps/" className="text-purple-600 ml-1" rel="noopener noreferrer" target="_blank">@PratikSamarth</a>
                    </p>
                </div>
            </section>
        </footer>
    )
}

export default Footer


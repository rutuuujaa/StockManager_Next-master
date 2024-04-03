import Image from 'next/image'
import React from 'react'

const Header = () => {
    return (
        <header className="text-gray-600 body-font bg-purple-200 sticky top-0 w-full z-10">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" href='#'>
                    <div style={{ borderRadius: '5px', overflow: 'hidden' }}>
                        <Image src="/logo.png" height={50} width={50} alt="header" />
                    </div>
                    <span className="ml-3 text-xl">StockManager</span>
                </a>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <a className="mr-10 hover:text-purple-900" href="#">Home</a>
                    <a className="mr-10 hover:text-purple-900" href="#stocks">Stocks</a>
                    <a className="hover:text-purple-900" href="#connect">Connect</a>
                </nav>
                <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                    <a className="text-gray-500 hover:text-purple-900" href="">
                        <i className="bi bi-github"></i>
                    </a>
                    <a className="ml-5 text-gray-500 hover:text-purple-900" href="#">
                        <i className="bi bi-linkedin"></i>
                    </a>
                    <a className="ml-5 text-gray-500 hover:text-purple-900" href="#">
                        <i className="bi bi-twitter-x"></i>
                    </a>
                    <a className="ml-5 text-gray-500 hover:text-purple-900" href="#">
                        <i className="bi bi-instagram"></i>
                    </a>
                </span>
            </div>
        </header>
    )
}

export default Header
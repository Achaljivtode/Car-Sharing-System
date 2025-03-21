import React, { useState } from 'react'
import { RxCross1 } from "react-icons/rx";
import { IoReorderThreeOutline } from "react-icons/io5";

// import {useNavigate} from 'react-router-dom'


function Header() {
    const [hamBurMenu, setHamburMenu]= useState(false)

    // const navigate = useNavigate()

    return (
        <header className="bg-gray-900 text-white ">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <a href="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">Your Company</span>
                        <h1 className='text-sm font-bold ' >COMPANY</h1>
                    </a>
                </div>
                <div className="flex lg:hidden">
                    <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                        <span className="sr-only">Open main menu</span>
                        <IoReorderThreeOutline className='text-white text-2xl' onClick={()=> setHamburMenu(true)} />
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    <a href="/home" className="text-sm hover:text-blue-700 p-2 rounded-md font-bold  ">HOME</a>
                    <a href="/about" className="text-sm hover:text-blue-700 font-bold p-2 ">ABOUT</a>
                    <a href="/contact" className="text-sm hover:text-blue-700 font-bold p-2 ">CONTACT</a>
                    <a href="/services" className="text-sm hover:text-blue-700 font-bold p-2 ">SERVICES</a>
                    <a href="/booking" className="text-sm hover:text-blue-700 font-bold p-2 ">BOOK A CAR</a>
                    <a href="/register" className="text-sm hover:text-blue-700 font-bold p-2 ">REGISTER</a>
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <a href="/login" className="text-sm font-bold">Log in <span aria-hidden="true">&rarr;</span></a>
                </div>
            </nav>





            
            {/* <!-- Mobile menu, show/hide based on menu open state. --> */}
            { hamBurMenu  && 
                <div className="" role="dialog" aria-modal="true">
                    {/* <!-- Background backdrop, show/hide based on slide-over state. --> */}
                    <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <a href="#" className="-m-1.5 p-1.5">
                                <span className="sr-only">Your Company</span>
                                <h1 className='text-white'>COMPANY</h1>
                            </a>
                            <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700">
                                <span className="sr-only">Close menu</span>
                                <RxCross1 className='text-white' onClick={()=> setHamburMenu(false)} />

                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                    <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 text-white font-semibold text-gray-900 hover:bg-gray-50">HOME</a>
                                    <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 text-white font-semibold text-gray-900 hover:bg-gray-50">ABOUT</a>
                                    <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 text-white font-semibold text-gray-900 hover:bg-gray-50">CONTACT</a>
                                    <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 text-white font-semibold text-gray-900 hover:bg-gray-50">SERVICES</a>
                                    <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 text-white font-semibold text-gray-900 hover:bg-gray-50">BOOK A CAR</a>
                                    <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 text-white font-semibold text-gray-900 hover:bg-gray-50">REGISTER</a>
                                </div>
                                <div className="py-6">
                                    <a href="#" className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 text-white font-semibold text-gray-900 hover:bg-gray-50">Log in</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </header>

    )
}

export default Header
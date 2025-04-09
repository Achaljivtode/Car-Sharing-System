import React, { useEffect, useState } from 'react'
import { RxCross1 } from "react-icons/rx";
import { IoReorderThreeOutline } from "react-icons/io5";
// import { IoIosArrowUp } from "react-icons/io";
// import { MdKeyboardArrowDown } from "react-icons/md";
import users from '../../constant/users';
import { useNavigate } from 'react-router-dom';


// import {useNavigate} from 'react-router-dom'


function Header() {
    const navigate = useNavigate()

    const [hamBurMenu, setHamburMenu] = useState(false)
    const role = localStorage.getItem('role')
    const [Users, setUsers] = useState([])
    console.log(Users);
    // const [reportdropdown, setReportDropdown] = useState(false)
    // const [adddropdown, setAddDropdown] = useState(false)


    const handleContactClick = (e) => {
        e.preventDefault();  // Prevent default navigation
        navigate("/home");   // Navigate to Home first
        setTimeout(() => {
            const contactSection = document.getElementById("contact");
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" });
            }
        }, 100);  // Small delay to ensure page loads first
    };

    // const handleLogout = () => {
    //     localStorage.removeItem('role')
    //     localStorage.removeItem('token')
    //     navigate('/login')
    // }

    const handlebooking = () => {
        role === 'customer' ?
        navigate("/cars") : 
        navigate('/login')
    }

    useEffect(() => {
        setUsers(users)
    }, [])
    // const navigate = useNavigate()

    return (
        <header className="bg-gray-900 text-white ">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-3 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <a href="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">Your Company</span>
                        <h1 className='text-2xl font-bold ' >CarShare</h1>
                    </a>
                </div>
                <div className="flex lg:hidden">
                    <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                        <span className="sr-only">Open main menu</span>
                        <IoReorderThreeOutline className='text-white text-2xl' onClick={() => setHamburMenu(true)} />
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    <a href="/home" className="text-sm hover:text-blue-700 p-2 my-4 rounded-md font-bold  ">HOME</a>
                    <a href='/about' className="text-sm hover:text-blue-700 font-bold p-2 my-4">ABOUT</a>
                    <a onClick={handleContactClick} className="text-sm hover:text-blue-700 font-bold p-2 my-4">CONTACT</a>
                    <a href='/services' className="text-sm hover:text-blue-700 font-bold p-2 my-4">SERVICES</a>
                    <a onClick={handlebooking} className="text-sm hover:text-blue-700 font-bold p-2 my-4">BOOK A CAR</a>
                    <a href='/register' className="text-sm hover:text-blue-700 font-bold p-2 my-4">REGISTER</a>


                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        <a href="/login"  className="text-sm font-bold">Log in <span aria-hidden="true">&rarr;</span></a>
                    </div>
                {/* {
                    role ? 
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        <a href="" onClick={handleLogout}  className="text-sm font-bold">Log out <span aria-hidden="true">&rarr;</span></a>
                    </div>
                    :
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        <a href="/login"  className="text-sm font-bold">Log in <span aria-hidden="true">&rarr;</span></a>
                    </div>

                } */}
            </nav>


            {/* <!-- Mobile menu, show/hide based on menu open state. --> */}
            {hamBurMenu &&
                <div className="" role="dialog" aria-modal="true">
                    {/* <!-- Background backdrop, show/hide based on slide-over state. --> */}
                    <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-black text-white  px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <a href="/home" className="-m-1.5 p-1.5">
                                <span className="sr-only">Your Company</span>
                                <h1 className='text-white'>CarShare</h1>
                            </a>
                            <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700">
                                <span className="sr-only">Close menu</span>
                                <RxCross1 className='text-white hover:cursor-pointer' onClick={() => setHamburMenu(false)} />

                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6 ">
                                    <a href="/home" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 text-white font-semibold hover:bg-gray-50 hover:text-black">HOME</a>
                                    <a href="/about" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 text-white font-semibold hover:bg-gray-50 hover:text-black">ABOUT</a>
                                    <a onClick={handleContactClick} className="-mx-3 block rounded-lg px-3 py-2 text-base/7 text-white font-semibold hover:bg-gray-50 hover:text-black">CONTACT</a>
                                    <a href="/services" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 text-white font-semibold hover:bg-gray-50 hover:text-black">SERVICES</a>
                                    <a onClick={handlebooking} className="-mx-3 block rounded-lg px-3 py-2 text-base/7 text-white font-semibold hover:bg-gray-50 hover:text-black">BOOK A CAR</a>
                                    <a href="/register" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 text-white font-semibold hover:bg-gray-50 hover:text-black">REGISTER</a>

                                </div>
                                <div className="py-6">
                                    <a href="/login" className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 text-white font-semibold hover:bg-gray-50 hover:text-black">Log in</a>
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
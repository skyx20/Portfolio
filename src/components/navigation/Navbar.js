import { Link, NavLink } from 'react-router-dom';
// import PuffLoader from 'react-spinners/PuffLoader'
import {useState} from 'react'
import { Popover, Transition } from '@headlessui/react'
import 'boxicons'



const Navbar = () => {
    const [loading, SetLoading] = useState(true)
    const [opend, setopend] = useState(false)
    
    return ( 
        <nav id="navbar" className='w-full py-1 top-0 z-40 transition duration:200 ease-in-out fixed'>
            <div className= "px-4 sm:px-6">
                <div className="-ml-4 -mt-2 hidden lg:flex flex-wrap items-center justify-between sm:flex-nowrap md:px-6 px-2">
                    <Link to= '/' className="ml-2">
                        <img src={logoBrand} width={80} height={40} alt="brandLogo"/>
                    </Link>
                    <div className="ml-4 mt-2 flex-shrink-0">
                    <NavLink to='/cases/' 
                    className="
                    group relative text-lg inline-flex font-medium leading-6 text-gray-900 mx-4">
                        Navbar
                    <span className="bg-myRed h-0.5 absolute w-0 group-hover:w-full transition-all duration-200left-0 bottom-0 "></span>
                    </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
}


import { Link, NavLink } from 'react-router-dom';
// import PuffLoader from 'react-spinners/PuffLoader'
import {useState} from 'react'
// import { Popover, Transition } from '@headlessui/react'
import 'boxicons'



const Navbar = () => {
    
    return ( 
        <nav id="navbar" className='flex flex-col w-full py-1 z-20 bg-white rounded-2xl 
        p-2
        shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]'>
            <Link className=' mt-2' to='/'><box-icon name='home-smile'></box-icon></Link>
            <Link className=' mt-2' to='/'><box-icon name='briefcase'></box-icon></Link>
            <Link className=' mt-2' to='/'><box-icon name='envelope'></box-icon></Link>
        </nav>
    );
}

export default Navbar;
import { Link } from 'react-router-dom';
import 'boxicons'



const Navbar = () => {
    
    return ( 
        <nav id="navbar" className='flex flex-col w-full py-1 z-20 bg-white rounded-2xl 
        p-2
        shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]'>
            <Link className=' mt-2 relative group' to='/'><box-icon name='home-smile'></box-icon>
            <span className="opacity-0  border-2 w-full rounded-full bg-gray-300 z-40 absolute -left-20">Home</span>
            </Link>
            <Link className=' mt-2 relative group' to='/projects/'><box-icon name='briefcase'></box-icon>
            <span className="opacity-0  border-2  rounded-full bg-gray-300 z-40 absolute -left-20">Projects</span>
            </Link>
            {/* <Link className=' mt-2' to='/contact/'><box-icon name='envelope'></box-icon></Link> */}
        </nav>
    );
}

export default Navbar;
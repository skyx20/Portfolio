import Footer from '../../components/navigation/Footer';
import Navbar from '../../components/navigation/Navbar'
import RespNavbar from '../../components/navigation/RespNavbar'
import ProfileCard from '../../components/profile/ProfileCard'
import {useState} from 'react'

const Layout = ({children}) => {

    const [isOpen, setIsOpen] = useState(false)

    return ( 
        <div className="flex p-20 h-screen">
            <div className='hidden lg:block p-4 pr-6 relative left-4 w-64
            bg-cyan-300 border-cyan-400 rounded-l-2xl
            shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]'>
                <ProfileCard/>
                <Footer/>
            </div>
            <div className='lg:hidden'>
                <RespNavbar/>
            </div>
            <div className='flex-1 p-4 z-10 bg-white 
            rounded-2xl
            shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]'>
                {children}
            </div>
            <div className='flex-initial m-2 p-2'>
                <Navbar/>
            </div>
        </div>
    );
}

export default Layout;
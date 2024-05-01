import Footer from '../../components/navigation/Footer';
import Navbar from '../../components/navigation/Navbar'
import RespNavbar from '../../components/navigation/RespNavbar'
import ProfileCard from '../../components/profile/ProfileCard'

const Layout = ({children}) => {


    return ( 
        <div className="flex p-20 h-screen">
            <div className='hidden lg:block p-4 pr-6 relative left-4 w-64
            bg-cyan-300 overflow-auto border-cyan-400 rounded-l-2xl
            shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]'>
                <ProfileCard/>
                <Footer/>
            </div>
            <div className='flex-1 p-4 z-10 bg-white 
            rounded-2xl
            shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]'>
                {children}
            </div>
            <div className='hidden lg:block flex-initial m-2 p-2'>
                <Navbar/>
            </div>
            <div className='lg:hidden m-2 p-2'>
                <RespNavbar/>
            </div>
        </div>
    );
}

export default Layout;
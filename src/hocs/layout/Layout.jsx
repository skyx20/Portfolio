import Navbar from '../../components/navigation/Navbar'
import ProfileCard from '../../components/profile/ProfileCard'

const Layout = ({children}) => {
    return ( 
        <div className="flex p-10 m-5">
            <div className='flex-initial p-4 relative z-0 left-4 w-64
            bg-cyan-300 border-cyan-400 rounded-l-2xl
            shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]'>
                <ProfileCard/>
            </div>
            <div className='flex-1 p-4 z-10 bg-cyan-300 border-cyan-400 
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
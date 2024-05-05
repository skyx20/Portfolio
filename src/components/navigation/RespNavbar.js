
import ProfileCard from '../../components/profile/ProfileCard'
import 'boxicons'
import {useState} from 'react'
import ULA from './ULA'

const links = [
    {
    'title': 'Home',
    'route': '/'
    },
    {
    'title': 'Projects',
    'route': '/projects/'
    },
//     {
//     'title': 'contact',
//     'route': '/contact/'
//     },
]


const RespNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    console.log(window.innerWidth)
    return (
        <div className={`hover:cursor-pointer pt-1 px-1  sm:bg-white rounded-full h-fit ${isOpen ? 'bg-white': 'bg-cyan-400'}`}>

            <box-icon  size={window.innerWidth <= 400 ? 'sm': 'md'} name={isOpen ? '': 'menu'} onClick={
                () => { isOpen ? setIsOpen(false) : setIsOpen(true);}}>
            </box-icon>
            <div className={
                `bg-gray-400 backdrop-blur-md  transition z-10 duration-200 ease-in-out fixed top-0 left-0 
                ${isOpen ? 'opacity-50 h-screen w-screen': 'opacity-0'} 
                `}
                onClick={()=>{
                    setIsOpen(false);
                }}>
            
            </div>
            <section className={`flex flex-col fixed top-0 w-1/2 z-20 h-screen bg-cyan-400
            transition-all  hover:cursor-default ease-in-out duration-500 ${isOpen ? 'right-0': '-right-1/2'}`}>
                <div className='mr-2 mt-2 '>
                    <div className='ml-auto w-fit mr-2 hover:cursor-pointer'>
                        <box-icon size={'md'} name={isOpen ? 'x': ''}  onClick={
                        () => { isOpen ? setIsOpen(false) : setIsOpen(true);}}>
                        </box-icon>
                    </div>
                </div>
                <ProfileCard/>
                <ULA props={links}/>
            </section>

        </div>
    );
}
export default RespNavbar;



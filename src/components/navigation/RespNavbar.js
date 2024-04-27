
import ProfileCard from '../../components/profile/ProfileCard'
import 'boxicons'
import {useState} from 'react'
import { Link } from 'react-router-dom'
import ULAL from './ULA'

const links = [
    {
    'title': 'home',
    'route': '/'
    },
    {
    'title': 'projects',
    'route': '/projects/'
    },
    {
    'title': 'contact',
    'route': '/contact/'
    },
]


const RespNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    console.log(isOpen)
    return (
        <div className='h-full '>
            <box-icon size={'md'} name={isOpen ? '': 'menu'} onClick={
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
            <section className={`flex flex-col fixed top-0 w-1/2 z-20 h-screen bg-gradient-to-br from-cyan-500 via-cyan-600
            transition-all ease-in-out duration-500 ${isOpen ? 'right-0': '-right-1/2'}`}>
                <div className='mr-2 mt-2 text-right'>
                <box-icon size={'md'} name={isOpen ? 'x': ''} onClick={
                () => { isOpen ? setIsOpen(false) : setIsOpen(true);}}>
                </box-icon>
                </div>
                <ProfileCard/>
                <ULAL props={links}/>
            </section>

        </div>
    );
}
export default RespNavbar;



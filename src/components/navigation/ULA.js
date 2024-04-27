import { NavLink } from "react-router-dom";
// UnderlineLinkAnimation
const ULA = ({props:links}) => {
    
    return ( 
        <div className="h-full flex flex-col w-full justify-content items-center">
            {links.map(({route, title})=>(
                <NavLink to={route} 
                    key={title}
                    className="hover:before:scale-x-100 
                    hover:before:origin-left 
                    text-xl 
                    font-medium
                    text-gray-800
                    my-2 
                    relative 
                    before:w-full
                    before:h-1 
                    before:origin-left 
                    before:transition-transform 
                    before:duration-200 
                    before:scale-x-0
                    before:rounded-full
                    before:bg-white 
                    before:absolute 
                    before:left-0 
                    before:-bottom-2 ">
                    {title}
                    {/* <span className='
                    absolute
                    -bottom-1
                    left-0
                    h-1
                    z-20
                    rounded-full 
                    ease-out
                    transition-transform 
                    duration-300 
                    origin-left
                    group-hover:w-full
                    group-hover:bg-sky-300
                    group-hover:origin-right
                    
                    '></span> */}
                </NavLink>
                ))}
        </div>
    );
}

export default ULA;
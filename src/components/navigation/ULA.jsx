import { NavLink } from "react-router-dom";
// UnderlineLinkAnimation
const ULA = ({props:links}) => {
    
    return ( 
        <div className="h-full flex flex-col w-full justify-content items-center">
            {links.map((link, index)=>(
                <NavLink to={link.route} 
                    key={index}
                    className={`hover:before:scale-x-100 
                    hover:before:origin-left 
                    text-xl 
                    font-medium
                    text-gray-800
                    ${window.innerHeight <= 400 ? 'm-0': 'm-2'}
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
                    ${window.innerHeight <= 400 ? 'before:-bottom-0': 'before:-bottom-2'}
                    `}>
                    {link.title}
                </NavLink>
                ))}
        </div>
    );
}

export default ULA;
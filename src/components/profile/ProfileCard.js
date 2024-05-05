import Avatar from "./Avatar";
import SocialLinks from "./SocialLinks";
import DLButton from "./DLButton";


const ProfileCard = () => {
    return ( 
        <div className={`
        flex flex-col items-center
        `}>
            <Avatar/>
            <h2 className='text-xl text-center font-bold sm:text-2xl mt-2'>Diego Cadenas</h2>
            <p className='text-md text-center font-medium sm:text-xl'>Web developer</p>
            <SocialLinks/>
            {/* <DLButton/> */}
        </div>
    );
}

export default ProfileCard;
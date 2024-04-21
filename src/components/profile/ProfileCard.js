import Avatar from "./Avatar";
import SocialLinks from "./SocialLinks";
import DLButton from "./DLButton";


const ProfileCard = () => {
    return ( 
        <div className="flex flex-col items-center">
            <Avatar/>
            <h2 className=' font-bold text-2xl mt-2'>Diego Cadenas</h2>
            <p className='font-medium text-lg'>Web developer</p>
            <SocialLinks/>
            <DLButton/>
        </div>
    );
}

export default ProfileCard;
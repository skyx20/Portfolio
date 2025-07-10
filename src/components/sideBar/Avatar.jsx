import profile from '../../assets/images//profile/profile.png'


const Avatar = () => {
    return (
        <div className="m-2 sm:m-6 ">
            <img className="w-28 h-28 sm:w-40 sm:h-40 p-1 rounded-full ring-2 ring-white" src={profile} alt="Profile"/>
        </div>
    );
}
export default Avatar;
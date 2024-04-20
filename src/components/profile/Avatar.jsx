import profile from '../../assets/images/profile.png'


const Avatar = () => {
    return (
        <div className="m-auto">
            <img class="w-40 h-40 p-1 rounded-full ring-1 ring-white dark:ring-gray-500" src={profile} alt="Profile"/>
        </div>
    );
}
export default Avatar;
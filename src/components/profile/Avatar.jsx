import profile from '../../assets/images//profile/profile.png'


const Avatar = () => {
    return (
        <div className="m-6 ">
            <img class="w-40 h-40 sm:w-50% sm:h-50% p-1 rounded-full ring-2 ring-white" src={profile} alt="Profile"/>
        </div>
    );
}
export default Avatar;
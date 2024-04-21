import profile from '../../assets/images/profile.png'


const Avatar = () => {
    return (
        <div className="m-auto">
            <img class="w-40 h-40 p-1 rounded-full ring-2 ring-white" src={profile} alt="Profile"/>
        </div>
    );
}
export default Avatar;
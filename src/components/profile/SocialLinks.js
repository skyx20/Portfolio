import 'boxicons'
import { Link } from 'react-router-dom';

const CTA = () =>{
    return (
        <div className='flex items-center m-4'>
            <Link className='m-2' to='/'><box-icon color='#000' size='sm' name='linkedin' type='logo'></box-icon></Link>
            <Link className='m-2' to='/'><box-icon color='#000' size='sm' name='github' type='logo'></box-icon></Link>
            <Link className='m-2' to='/'><box-icon color='#000' size='sm' name='linkedin-square' type='logo'></box-icon></Link>

        </div>
    )
}

export default CTA;
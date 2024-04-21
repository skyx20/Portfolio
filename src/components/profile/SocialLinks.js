import 'boxicons'
import { Link } from 'react-router-dom';

const CTA = () =>{
    return (
        <div className='flex items-center m-4'>
            <Link className='m-2' to='linkedin.com/in/diego-cadenas/'><box-icon color='#000' size='sm' name='linkedin' type='logo'></box-icon></Link>
            <Link className='m-2' to='https://github.com/skyx20'><box-icon color='#000' size='sm' name='github' type='logo'></box-icon></Link>

        </div>
    )
}

export default CTA;
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import logo from './brand.png';



const HeaderComponent = () => {
    return (
            <div className='h-[15vh] flex items-center justify-between cursor-pointer p-5'>
                <img src={logo} alt='logo' className='h-16 ml-3' />
                <div className='mr-3'>
                <FontAwesomeIcon icon={faBars} size='2x'/>
               </div>
            </div>
    );
    }



export default HeaderComponent;

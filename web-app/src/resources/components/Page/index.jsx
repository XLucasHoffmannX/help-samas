import React from 'react';

// style
import './page.css';
import Logo from '../../../assets/images/logo.svg'
import LogoPurple from '../../../assets/images/logo_purple.svg'
import { Link } from 'react-router-dom';

export default function Page({ children, title, description, promotion }) {
    return (
        <>
            <div className='vh-100 vw-100 d-flex flex-column align-items-center '>
                <div className='page_component w-100' >
                    <div className='page_component_header w-100 d-flex flex-column align-items-center'>
                        <div className='page_component_logo d-flex align-items-center w-100' >
                            <Link to="/">
                                <img src={Logo} />
                            </Link>
                        </div>
                        <div className='page_component_title mb-5' >
                            <h1 className='my-4'>{title}</h1>
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
                <div className='page_component_overlaid '>
                    {children}
                    {promotion &&
                        <div className='promotion_name d-flex align-items-center flex-column m-2 mt-4'>
                            <img src={LogoPurple} width="55" />
                            <span className='mb-2 mt-2'>Todos os direitos reservados © 2022</span>
                        </div>
                    }
                </div>
            </div>
        </>
    );
}
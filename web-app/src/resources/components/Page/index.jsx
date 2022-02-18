import React from 'react';
import { Link } from 'react-router-dom';
import { Home, HomeOptions } from './partials/index';
// style
import './page.css';
import Logo from '../../../assets/images/logo.svg'
import LogoPurple from '../../../assets/images/logo_purple.svg'

export default function Page({ children, title, description, promotion, home }) {
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
                        {
                            home ?
                                <HomeOptions description={description} />
                                :
                                <Home title={title} description={description} />
                        }
                    </div>
                </div>
                {
                    home ?
                        <form className='formBox d-flex mb-3' action="" style={{ marginTop: '-20px', width: 'min(740px, 90%)' }}>
                            <div className='formBox_control' style={{ margin: '0', padding: '0' }}>
                                <input type="text" className='formBox_input' placeholder='Buscar por caso...' />
                            </div>
                        </form>
                        :
                        null
                }
                <div className='page_component_overlaid'>
                    {children && children}
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
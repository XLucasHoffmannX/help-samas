import React, { useContext, useRef, useState, lazy, Suspense } from 'react';

import { Context } from '../../../contexts/state';
import BackgroundLanding from '../../../assets/images/background-landing.svg';
import Logo from '../../../assets/images/logo.svg';
import LogoPurple from '../../../assets/images/logo_purple.svg';
import { Link } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
import { RiArrowDropDownLine } from 'react-icons/ri'

import { CircularProgress } from '@material-ui/core';

import './landing.css';
/* import Post from '../../components/Post'; */
import AuthModal from '../../components/Modals/AuthModal';
const Post = lazy(() => import("../../components/Post"));

export default function Landing() {
  const state = useContext(Context);
  console.log(state)

  const [authModal, setAuthModal] = useState(false);

  let viewsCases = useRef()
  const scrollTo = () => window.scrollTo({ behavior: 'smooth', top: viewsCases.current.offsetTop });

  const handleAuthModal = () => authModal ? setAuthModal(false) : setAuthModal(true);

  return (
    <>
      {authModal ? <AuthModal open={authModal} close={setAuthModal} /> : null}
      <div className='content_landing vh-100 d-flex flex-column justify-content-around align-items-center'>
        <div className=''></div>
        <div className='content_control w-100 d-flex justify-content-around'>
          <div className='content_box_auth d-flex flex-column align-items-center m-3'>
            <img src={Logo} />
            <span className='content_box_auth_sub_title text-center my-3'>
              Ajudar o próximo é a melhor maneira
              de ajudar a si mesmo.
            </span>
            <div className='content_box_auth_btns w-100 d-flex flex-column align-items-center mt-4'>
              <Link className='box_login w-100 d-flex align-items-center justify-content-center' to="/" onClick={handleAuthModal}>
                Login
              </Link>
              <Link className='box_register mt-4 w-100 d-flex align-items-center justify-content-center' to="/register">
                Cadastro
              </Link>
            </div>
            <span className='content_box_auth_sub_title text-center mt-3'>
              Total de 100 casos contribuídos <FaHeart />
            </span>
          </div>
          <div className='content_box_image'>
            <img className='img-fluid' src={BackgroundLanding} />
          </div>
        </div>
        <div className='see_cases text-center mb-2' onClick={scrollTo}>
          <span>Ver casos <RiArrowDropDownLine /></span>
        </div>
      </div>
      <div ref={viewsCases} className='landing_cases vh-100 d-flex flex-column align-items-center'>
        <div className='page_component_landing w-100' >
          <div className='page_component_landing_header w-100 d-flex flex-column align-items-center'>
            <div className='page_component_landing_logo d-flex align-items-center w-100' >
              <img src={LogoPurple} />
            </div>
            <div className='page_component_landing_title mb-5' >
              <h1 className='my-4'>Veja alguns casos abaixo</h1>
              <p>Caso queira postar um caso você deve se logar ou se cadastrar</p>
            </div>
          </div>
        </div>
        <Suspense fallback={<div><div className="vh-100 d-flex justify-content-center align-items-center"><CircularProgress /></div></div>}>
          <div className='page_component_landing_overlaid h-100'>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((post, index) => (
                <Post key={index} />
            ))}
            <div className='promotion_name d-flex align-items-center flex-column m-2'>
              <img src={LogoPurple} width="55" />
              <span className='mb-4 mt-2'>Todos os direitos reservados © 2022</span>
            </div>
          </div>
        </Suspense>
      </div>
    </>
  );
}

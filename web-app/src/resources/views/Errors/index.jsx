import React from "react"
import Lottie from 'react-lottie';
import { Link } from "react-router-dom";
import anim404 from '../../../assets/lottie/404.json';
import LogoPurple from '../../../assets/images/logo_purple.svg';

// style
import './errors.css';

export const NotFound = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: anim404,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <div className="notFound vh-100 vw-100 d-flex flex-column justify-content-center align-items-center">
            <div className="notFound_logo mb-4">
                <img src={LogoPurple} />
            </div>
            <div className="anim404">
                <Lottie
                    options={defaultOptions}
                />
            </div>
            <span className="mt-4">Aparentemente esta página não está mais disponível no momento, acesse <Link to="/">Help Samas</Link>.</span>
        </div>
    )
}
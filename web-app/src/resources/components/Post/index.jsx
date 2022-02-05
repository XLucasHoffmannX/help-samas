import React from 'react';
import { Avatar } from '@material-ui/core';

import './post.css';
import { Link } from 'react-router-dom';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { AiOutlineFieldTime } from 'react-icons/ai';
import { Slider } from './partials/index';

export default function Post() {
    const [slider, setSlider] = React.useState(false);

    const handleSlider = () => slider ? setSlider(false) : setSlider(true);

    return (
        <div className='post_component'>
            <div className='post_component_main d-flex flex-column align-items-center'>
                <div className='d-flex align-items-center justify-content-between w-100' >
                    <div className='post_component_header d-flex align-items-center w-100'>
                        <Avatar alt="Lucas Hoffmann" src="/static/images/avatar/1.jpg" style={{ background: 'orange', width: '48px', height: '48px' }} />
                        <div className='post_component_header_info'>
                            <h2>Lucas Hoffmann</h2>
                            <span>@hoffmann</span>
                        </div>
                    </div>
                </div>
                <div className='post_component_content w-100 mt-4'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget dolor vitae ligula consequat porttitor. Morbi eu ligula tortor. Vestibulum pulvinar feugiat lacus, eu dapibus nisi bibendum sed. Integer ac fringilla tortor. Phasellus ipsum diam, tempus sit amet urna sit amet, condimentum imperdiet enim. Proin mattis luctus nisl, sodales iaculis lorem mollis ut. Duis sit amet arcu porta, suscipit est eget, dictum metus. Aliquam congue sollicitudin maximus. Vestibulum volutpat tristique ligula, quis consectetur nunc consequat in. Curabitur ac ligula posuere, efficitur lorem pulvinar, pretium nisi.
                </div>
                <div className='post_component_header_date w-100 mt-3 d-flex align-items-center'>
                    <AiOutlineFieldTime /> Última quarta-feira ás 14:00
                </div>
            </div>
            <div class="post_component_see">
                <span onClick={handleSlider}>Ver fotos <RiArrowDropDownLine /></span>
                {slider && <Slider />}
            </div>
            <div className='post_component_footer d-flex align-items-center justify-content-between'>
                <div className='price_cost d-flex'>
                    <span className='h-100'>Preço/custo</span>
                    <p className='mx-3'>R$ 1200,00</p>
                </div>
                <Link className='post_component_access' to="/">
                    Ver post
                </Link>
            </div>
        </div>
    );
}

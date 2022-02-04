import React from 'react';
import { Avatar } from '@material-ui/core';

import './post.css';
import { Link } from 'react-router-dom';
import { RiArrowDropDownLine } from 'react-icons/ri'
import {Slider} from './partials/index';

export default function Post() {
    const [slider, setSlider] = React.useState(false);

    const handleSlider = ()=> slider ? setSlider(false) : setSlider(true);

    return (
        <div className='post_component'>
            <div className='post_component_main d-flex flex-column align-items-center'>
                <div className='post_component_header d-flex align-items-center w-100'>
                    <Avatar alt="Lucas Hoffmann" src="/static/images/avatar/1.jpg" style={{ background:'orange', width: '48px', height: '48px' }}/>
                    <div className='post_component_header_info'>
                        <h2>Lucas Hoffmann</h2>
                        <span>@hoffmann</span>
                    </div>
                </div>
                <div className='post_component_content w-100 mt-4'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget dolor vitae ligula consequat porttitor. Morbi eu ligula tortor. Vestibulum pulvinar feugiat lacus, eu dapibus nisi bibendum sed. Integer ac fringilla tortor. Phasellus ipsum diam, tempus sit amet urna sit amet, condimentum imperdiet enim. Proin mattis luctus nisl, sodales iaculis lorem mollis ut. Duis sit amet arcu porta, suscipit est eget, dictum metus. Aliquam congue sollicitudin maximus. Vestibulum volutpat tristique ligula, quis consectetur nunc consequat in. Curabitur ac ligula posuere, efficitur lorem pulvinar, pretium nisi.

                    Nunc eu leo fringilla, blandit lacus ut, ornare enim. Fusce lectus sapien, tincidunt eu velit id, lobortis egestas erat. Suspendisse et lectus a leo bibendum commodo. Curabitur a ultrices magna. Curabitur vel gravida purus. Vestibulum vitae faucibus diam. Pellentesque in metus at lorem ornare sagittis. Phasellus eu velit at eros ultrices euismod. Quisque eget pellentesque sem, ac iaculis ipsum. Nunc mollis hendrerit orci et aliquet. Maecenas varius varius urna, nec sagittis massa dapibus ut. Nam eget est dui. Fusce gravida tristique justo, vel sodales arcu. Maecenas eget arcu posuere, tristique diam sit amet, egestas leo. Fusce vehicula tincidunt efficitur.

                    Maecenas eu elementum neque, in ultrices justo. Nulla consectetur dignissim arcu, vitae euismod ipsum rutrum nec. Fusce fermentum nunc nec turpis sodales, eu mattis dolor interdum. Phasellus ornare, lorem dictum feugiat egestas, ante est gravida enim, ultrices lobortis nisi neque ut turpis. Fusce a ante lorem. Donec aliquam efficitur ornare. Quisque vehicula, sapien id posuere accumsan, ante ipsum varius elit, in efficitur orci dolor at lectus. Ut arcu turpis, accumsan eu nisi sit amet, rhoncus interdum ligula. Aliquam mollis lorem congue odio pulvinar, sed rhoncus nibh ultricies.

                    Fusce diam turpis, feugiat quis finibus nec, aliquet at nulla. Nulla non ipsum rhoncus leo tincidunt bibendum. Aliquam blandit sagittis tincidunt. Vivamus mollis tristique urna. Phasellus condimentum enim ut quam scelerisque efficitur. Maecenas massa tellus, bibendum eu pellentesque ut, consectetur nec massa. Fusce leo orci, placerat efficitur metus nec, interdum feugiat lacus. Aenean tincidunt mollis libero eget maximus. Curabitur mollis nulla vitae nisl ullamcorper, eget congue quam vulputate. Integer feugiat purus eget ipsum aliquet, ac posuere velit fringilla. Nullam lacinia lacus ut dolor pellentesque lobortis. In tempor, metus nec sollicitudin posuere, velit orci fringilla sapien, ac egestas mauris erat et justo. Vivamus libero nisi, blandit vitae lacus a, ultrices laoreet dui. Aliquam fermentum lectus ultrices purus scelerisque pharetra. Aenean et fermentum nisi.

                    Suspendisse faucibus massa lorem, eu rutrum ante ultrices id. Donec fermentum blandit tempus. Pellentesque est nulla, semper nec nisi in, gravida imperdiet nisl. Ut viverra aliquam arcu, vitae sodales odio tincidunt vel. Vestibulum ornare magna nec elit porta pulvinar. Proin viverra lacus tempus hendrerit aliquet. Nulla nec tempus quam.
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

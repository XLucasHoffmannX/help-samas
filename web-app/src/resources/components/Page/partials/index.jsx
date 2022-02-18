import { Link } from 'react-router-dom'
import Logo from '../../../../assets/images/logo.svg'
import Opt from '../../../../assets/images/opt.svg'

export const Home = ({ title, description }) => {
    return (
        <div className='page_component_title mb-5' >
            <h1 className='my-4'>{title}</h1>
            <p>{description}</p>
        </div>
    )
}

export const HomeOptions = ({ description }) => {
    return (
        <div className="page_component_home_opt mt-1 py-1">
            <div className="page_component_home_opt_header d-flex align-items-center justify-content-between">
                <Link to="/">
                    <img src={Logo} />
                </Link>
                <div className='page_component_home_opt_btns d-flex align-items-center'>
                    <div className='formBox_footer_btn' >
                        <Link to="#">
                            Criar Post
                        </Link>
                    </div>
                    <img className='mx-3' src={Opt} />
                </div>
            </div>
            <div className='page_component_title my-5'>
                <p>{description}</p>
            </div>
        </div>
    )
}
import Atention from'../../../assets/images/alert_form.svg';
import { Link } from 'react-router-dom';

export const FooterForm = ({name, handleSubmit}) => {
    const handleClick = e =>{
        e.preventDefault();
        handleSubmit();
    }
    return (
        <div className='formBox_footer d-flex align-items-center justify-content-between w-100'>
            <div className='formBox_footer_alert d-flex align-items center'>
                <img src={Atention} />
                <span className='mx-3'>Importante <br /> preencha todos os dados!</span>
            </div>
            <div className='formBox_footer_btn' onClick={handleClick}>
                <Link to="#">
                    {name}
                </Link>
            </div>
        </div>
    )
}
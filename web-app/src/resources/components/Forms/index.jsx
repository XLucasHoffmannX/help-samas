import Atention from'../../../assets/images/alert_form.svg';
import { Link } from 'react-router-dom';

export const FooterForm = ({ btn }) => {
    return (
        <div className='formBox_footer d-flex align-items-center justify-content-between'>
            <div className='formBox_footer_alert d-flex align-items center'>
                <img src={Atention} />
                <span className='mx-3'>Importante <br /> preencha todos os dados!</span>
            </div>
            <div className='formBox_footer_btn'>
                <Link to="">
                    Salvar cadastro
                </Link>
            </div>
        </div>
    )
}
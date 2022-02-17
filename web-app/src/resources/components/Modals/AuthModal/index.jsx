import React from 'react';
import { Modal, Box, Fade, Backdrop } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { change, login } from '../../../../store/actions/auth.action';

// style
import './authmodal.css';
import { FooterForm } from '../../Forms';

export default function AuthModal({ open, close }) {
    const dispatch = useDispatch();
    const { credentials, success } = useSelector(state => state.authReducer)

    const handleClose = () => close(false);

    const handleAuthSubmit = () => {
        console.log('Ação de login');
        dispatch(login(credentials));
    }

    return (
        <>
            <div>
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    open={open}
                    onClose={handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                >
                    <Fade in={open}>
                        <Box className="auth_modal_box">
                            <div style={{ padding: '0 2rem', paddingTop: '2rem' }}>
                                <div className='auth_modal_box_header'>
                                    <h2>Login</h2>
                                </div>
                            </div>
                            <div className='auth_modal_box_main'>
                                <form className='formBox' action="">
                                    <div className='formBox_control'>
                                        <label className='formBox_label'>Nome completo</label>
                                        <input className='formBox_input' value={credentials.email} onChange={text => dispatch(change({ email: text.target.value }))} required />
                                    </div>
                                    <div className='formBox_control'>
                                        <label className='formBox_label'>Sua senha</label>
                                        <input type="password" className='formBox_input' value={credentials.password} onChange={text => dispatch(change({ password: text.target.value }))} required />
                                    </div>
                                </form>
                            </div>
                            <FooterForm name='Entrar' handleSubmit={handleAuthSubmit} />
                            {
                                success && <Redirect to="/home" />
                            }
                        </Box>
                    </Fade>
                </Modal>
            </div>
        </>
    );
}

import React from 'react';
import { Modal, Button, Box, Fade, Typography, Backdrop } from '@material-ui/core';

// image

// style
import './authmodal.css';
import { FooterForm } from '../../Forms';

export default function AuthModal({ open, close }) {
    const handleClose = () => close(false);
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
                            <div style={{padding: '0 2rem', paddingTop: '2rem'}}>
                                <div className='auth_modal_box_header'>
                                    <h2>Login</h2>
                                </div>
                            </div>
                            <div className='auth_modal_box_main'>
                                <form className='formBox' action="">
                                    <div className='formBox_control'>
                                        <label className='formBox_label'>Nome completo</label>
                                        <input className='formBox_input' />
                                    </div>
                                    <div className='formBox_control'>
                                        <label className='formBox_label'>Sua senha</label>
                                        <input type="password" className='formBox_input' />
                                    </div>
                                </form>
                            </div>
                            <FooterForm />
                        </Box>
                    </Fade>
                </Modal>
            </div>
        </>
    );
}

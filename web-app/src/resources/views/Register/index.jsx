import React from 'react';

// page component
import Page from '../../components/Page';
import { FooterForm } from '../../components/Forms/index'

export default function Register() {

  const handleRegisterSubmit = () => {
    console.log('register');
  }

  const register = (
    <div className='formContainer d-flex flex-column justify-content-center align-items-center'>
      <form className='formBox limit' action="">
        <div className='formBox_header mt-4'>
          <h2>Seus dados</h2>
        </div>
        <div className='formBox_control'>
          <label className='formBox_label'>Nome completo</label>
          <input type="text" className='formBox_input' />
        </div>
        <div className='formBox_control'>
          <label className='formBox_label'>Link da sua foto (comece com http)</label>
          <input type="url" className='formBox_input' />
        </div>
        <div className='formBox_control'>
          <label className='formBox_label'>Whatsapp (somente números)</label>
          <input type="number" className='formBox_input' />
        </div>
        <div className='formBox_control'>
          <label className='formBox_label'>Biografia</label>
          <textarea className='formBox_textarea'></textarea>
        </div>
        <div className='formBox_header mt-4'>
          <h2>Dados para a plataforma</h2>
        </div>
        <div className='formBox_control'>
          <label className='formBox_label'>Mora em samas a quanto tempo?</label>
          <input type="date" className='formBox_input' />
        </div>
        <div className='formBox_control'>
          <label className='formBox_label'>Em que local você mora?</label>
          <input type="text" className='formBox_input' />
        </div>
        <div className='formBox_control'>
          <label className='formBox_label'>Precisamos de um nome de usuário, qual seria o seu? (ex: pode ser seu apelido 😄)</label>
          <input type="text" className='formBox_input' />
        </div>
        <div className='formBox_control'>
          <label className='formBox_label'>Sua senha</label>
          <input type="password" className='formBox_input' />
        </div>
        <div className='formBox_control'>
          <label className='formBox_label'>Repita sua senha</label>
          <input type="password" className='formBox_input' />
        </div>
      </form>
      <FooterForm name='Salvar cadastro' handleSubmit={handleRegisterSubmit} />
    </div>
  )

  return (
    <Page
      title='Seja Bem Vindo!'
      description='O primeiro passo, é preencher esse
      formulário com seus dados.'
      children={register}
    />
  );
}

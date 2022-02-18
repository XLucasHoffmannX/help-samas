import React from 'react'
import { FooterForm } from '../../components/Forms'
import Page from '../../components/Page'

export default function CratePost() {
    const createPost = (
        <div className='formContainer d-flex flex-column justify-content-center align-items-center' style={{ marginTop: '-50px' }}>
            <form className='formBox limit' action="">
                <div className='formBox_header mt-4'>
                    <h2>Dados do post</h2>
                </div>
                <div className='formBox_control'>
                    <label className='formBox_label'>Nome completo</label>
                    <input type="text" className='formBox_input' />
                </div>
            </form>
            <FooterForm name='Criar post' handleSubmit="" />
        </div>
    )

    return (
        <Page
            title='Criar post'
            description='Crie seu post, lembre-se de ser o mais coeso possível'
            children={createPost}
            promotion={true}
            home={false}
        />
    )
}

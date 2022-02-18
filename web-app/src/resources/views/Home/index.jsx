import React, { Suspense, lazy } from 'react'
import { useSelector } from 'react-redux';
import { CircularProgress } from '@material-ui/core';
import Page from '../../components/Page';
import LogoPurple from '../../../assets/images/logo_purple.svg';


const Post = lazy(() => import('../../components/Post'));

export default function Home() {
  const state = useSelector(state => state.authReducer);

  const home = (
    <Suspense fallback={<div><div className="vh-100 d-flex justify-content-center align-items-center"><CircularProgress /></div></div>}>
      <div className='page_component_landing_overlaid'>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((post, index) => (
          <Post key={index} />
        ))}
      </div>
    </Suspense>
  )

  return (
    <Page
      description='Deslize ou busque por
      casos que queira ajudar'
      children={home}
      promotion={false}
      home={true}
    />
  )
}

import React from 'react'
import { useSelector } from 'react-redux';

export default function Home() {
  const state = useSelector(state => state.authReducer);

  return (
    <div>{state.user.name}</div>
  )
}

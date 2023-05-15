import React from 'react'

type Props = {}

function NotFound({}: Props) {
  return (
    <div className='h-screen flex justify-center items-center'>
        <h3 className='text-3xl'>Cette page n existe pas</h3>
    </div>
  )
}

export default NotFound
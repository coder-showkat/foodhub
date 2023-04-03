import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);
  return (
    <div className='h-[100dvh] flex flex-col justify-center items-center gap-y-2'>
      <h3 className='text-xl font-semibold'>Opps!</h3>
      <p>404 | An unexpected error has occurred</p>
      <p className='text-gray-500'>Not found</p>
    </div>
  )
}

export default ErrorPage;
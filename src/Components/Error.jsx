import React from 'react';
import { useRouteError } from 'react-router-dom'


const Error = () => {
    const err  = useRouteError();
    console.log(err);
    console.log(err.text);
    console.log(err.error);
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
        <strong className="font-bold">Oh no!</strong>
        <h1>{err.status}:{err.statusText}</h1>
        <span className="block sm:inline"> Something went wrong. Please try again.</span>
      </div>
    </div>
  );
}

export default Error;
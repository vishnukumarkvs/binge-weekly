import React from 'react';
import ReactPlayer from 'react-player';
export default function Movie({ posterUrl, trailerUrl }) {
  return (
    <div className='border-2 border-solid border-[#e4e01e] rounded-lg p-1'>
        <ReactPlayer url={trailerUrl} controls  width='100%' height='100%' />
    </div>
  );
}

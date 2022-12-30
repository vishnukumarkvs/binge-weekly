import React from 'react';

function Movie({ posterUrl, trailerUrl }) {
  const videoRef = React.useRef(null);

  function handleMouseEnter() {
    videoRef.current.play();
  }

  function handleMouseLeave() {
    videoRef.current.pause();
  }

  return (
    <div
      className="relative cursor-pointer hover:cursor-auto"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={posterUrl} alt="Movie poster" className="w-full" />
      <video ref={videoRef} src={trailerUrl} className="absolute inset-0 w-full h-full hidden hover:block" />
    </div>
  );
}

---

import React from 'react';
import Movie from './Movie';

function App() {
  const movies = [
    {
      id: 1,
      posterUrl: '/path/to/poster1.jpg',
      trailerUrl: '/path/to/trailer1.mp4',
    },
    {
      id: 2,
      posterUrl: '/path/to/poster2.jpg',
      trailerUrl: '/path/to/trailer2.mp4',
    },
    // ...
  ];

  return (
    <div className="grid grid-cols-3 gap-4">
      {movies.map(movie => (
        <Movie key={movie.id} posterUrl={movie.posterUrl} trailerUrl={movie.trailerUrl} />
      ))}
    </div>
  );
}
---
https://www.youtube.com/watch?v=q-Bz8FKPQVI

import React from 'react';
import Movie from './components/Movie';

export default function App() {
  const movies = [
    {
      id: 1,
      posterUrl: 'https://www.sonypictures.com/sites/default/files/styles/max_560x840/public/title-key-art/bullettrain_onesheet_1400x2100_v4.jpg?itok=khOUNLFM',
      trailerUrl: 'https://youtu.be/0IOsk2Vlc4o',
    },
    {
      id: 1,
      posterUrl: 'https://www.sonypictures.com/sites/default/files/styles/max_560x840/public/title-key-art/bullettrain_onesheet_1400x2100_v4.jpg?itok=khOUNLFM',
      trailerUrl: 'https://youtu.be/0IOsk2Vlc4o',
    },
    {
      id: 1,
      posterUrl: 'https://www.sonypictures.com/sites/default/files/styles/max_560x840/public/title-key-art/bullettrain_onesheet_1400x2100_v4.jpg?itok=khOUNLFM',
      trailerUrl: 'https://youtu.be/0IOsk2Vlc4o',
    },
    {
      id: 1,
      posterUrl: 'https://www.sonypictures.com/sites/default/files/styles/max_560x840/public/title-key-art/bullettrain_onesheet_1400x2100_v4.jpg?itok=khOUNLFM',
      trailerUrl: 'https://youtu.be/0IOsk2Vlc4o',
    },
    // ,
    // {
    //   id: 2,
    //   posterUrl: '/path/to/poster2.jpg',
    //   trailerUrl: '/path/to/trailer2.mp4',
    // },
    // // ...
  ];

  return (
    <div className='bg-[#494949] w-full h-screen'>
      hello
      <div className="grid md:grid-cols-3 xl:grid-cols-5 gap-4 p-4">
          {movies.map(movie => (
            <Movie key={movie.id} posterUrl={movie.posterUrl} trailerUrl={movie.trailerUrl} />
          ))}
      </div>
    </div>
  );
}

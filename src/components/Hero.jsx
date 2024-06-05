import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Hero = () => {
  const [movies, setMovies] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchMovies = async () => {
      const options = {
        method: 'GET',
        url: 'https://imdb-top-100-movies.p.rapidapi.com/',
        headers: {
          'x-rapidapi-key': 'a2b663905cmshb33bbb326ce9a14p193b48jsn9a41b2fc751f',
          'x-rapidapi-host': 'imdb-top-100-movies.p.rapidapi.com'
        }
      };

      try {
        const response = await axios.request(options);
        const fetchedMovies = response.data || []; // Assuming response.data is an array
        setMovies(fetchedMovies);
        setSearchResults(fetchedMovies); // Initially show all movies
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovies();
  }, []);

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    const filteredMovies = movies.filter(movie =>
      movie.title.toLowerCase().includes(query)
    );
    setSearchResults(filteredMovies);
  };

  return (
    <div className="bg-slate-900 min-h-screen p-10 text-white">
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-8xl">Welcome.</h1>
        <h2 className="text-3xl">Millions of Movies, TV shows and people to discover. Explore now</h2>
        <div className="pt-6 flex gap-5">
          <input
            type="text"
            className="px-4 py-2 rounded-md w-[400px] text-black"
            placeholder="Search for a movie..."
            value={searchQuery}
            onChange={handleSearch}
          />
          <button className="px-4 py-2 bg-slate-600 rounded-md w-[140px]">Search</button>
        </div>
      </div>
      <div className="pt-6 flex flex-wrap gap-4">
        {searchResults.length > 0 ? (
          searchResults.map((movie, index) => (
            <div key={index} className="bg-slate-700 p-4 rounded-md w-[300px]">
              <h3 className="text-xl">{movie.title}</h3>
              {movie.image && <img src={movie.image} alt={movie.title} className="mt-2 w-full h-auto rounded-md" />}
            </div>
          ))
        ) : (
          <p>No movies found</p>
        )}
      </div>
    </div>
  );
};

export default Hero;

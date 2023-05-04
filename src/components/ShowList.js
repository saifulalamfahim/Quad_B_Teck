import React, { useEffect, useState } from 'react';

const ShowList = () => {
    const [shows, setShows] = useState([]);
    console.log(shows)

  useEffect(() => {
    fetch('https://api.tvmaze.com/search/shows?q=all')
      .then(response => response.json())
      .then(data => setShows(data));
  }, []);
    return (
        <div className='show-list'>
      <h1>Show List</h1>
      <ul className='show-list'>
        {shows.map(show => (
          <li className='show-card ' key={show.show.id}>
            <h3>Show Name:{show.show.name}</h3>
            
            <p>Type: {show.show.type}</p>
            <p> Language: {show.show.language}</p>
            <p> Status: {show.show.status}</p>
            <a href={`/show/${show.show.id}`}><button>Show Details</button></a>
          </li>
        ))}
      </ul>
    </div>
    );
};

export default ShowList;
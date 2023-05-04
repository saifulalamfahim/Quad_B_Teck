import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BookingForm from './BookingForm';

const ShowDetail = () => {
    const { id } = useParams();
    const [show, setShow] = useState(null);
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        fetch(`https://api.tvmaze.com/shows/${id}`) 
          .then(res => res.json())
          .then(data => setShow(data));
      }, [id]);
      if (!show) {
        return <div>Loading...</div>;
      }

      

  const handleBookTickets = () => {
    setShowForm(true);
  };
    return (
        <div className='show-details'>
      <h1>{show.name}</h1>
     <div className='details'>
        <img src={show.image.medium} alt={show.name} />
        <p>{show.summary}</p>
     </div>
      <button onClick={handleBookTickets}>Book Tickets</button>
      {showForm && <BookingForm show={show} onClose={() => setShowForm(false)} />}
    </div>
    );
};

export default ShowDetail;
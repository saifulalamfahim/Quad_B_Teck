import React from 'react';

const BookingForm = ({ show, onClose }) => {
    const handleSubmit = (event) => {
        event.preventDefault();
    
        // Get the user details from the form
        const formData = new FormData(event.target);
        const user = {
          name: formData.get("name"),
          email: formData.get("email"),
          phone: formData.get("phone"),
        };
    
        // Store the user details in local storage
        localStorage.setItem(`booking-${show.id}`, JSON.stringify(user));
    
        // Close the form
        onClose();
      };
    return (
        <div className="booking-form-overlay">
        <div className="booking-form">
          <h3>Book Tickets for {show.name}</h3>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
  
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
  
            <label htmlFor="phone">Phone:</label>
            <input type="tel" id="phone" name="phone" required />
                <br />
            <button type="submit">Submit</button>
            <br />
            <button type="button" onClick={onClose}>
              Cancel
            </button>
          </form>
        </div>
      </div>
    );
};

export default BookingForm;
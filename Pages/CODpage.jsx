import React, { useState } from 'react';

const CODForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    address: '',
    pincode: '',
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Implement form submission logic here
    // e.g., send data to backend for order processing
    console.log('Form submitted:', formData);

    // Reset form after successful submission (optional)
    setFormData({ fullName: '', address: '', pincode: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="fullName">Full Name:</label>
        <input
          type="text"
          className="form-control"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="address">Address:</label>
        <textarea
          className="form-control"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
          rows="3"
        />
      </div>
      <div className="form-group">
        <label htmlFor="pincode">Pincode:</label>
        <input
          type="number"
          className="form-control"
          id="pincode"
          name="pincode"
          value={formData.pincode}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit Order
      </button>
    </form>
  );
};

export default CODForm;

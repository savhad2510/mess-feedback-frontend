import React, { useState } from 'react';
import './ComplaintItem.css';

const ComplaintItem = ({ complaint, toggleResolved, handleActionChange, handleSubmit }) => {
  const [photo, setPhoto] = useState(null);

  const handlePhotoChange = (e) => {
    setPhoto(e.target.files[0]);
  };

  const onSubmit = () => {
    handleSubmit(complaint.id, photo);
  };

  return (
    <div className="complaint-item">
      <p>{complaint.complaint}</p>
      <select value={complaint.resolved ? 'resolved' : 'pending'} onChange={() => toggleResolved(complaint.id)}>
        <option value="pending">Pending</option>
        <option value="resolved">Resolved</option>
      </select>
      <input
        type="text"
        placeholder="Action Taken"
        value={complaint.action || ''}
        onChange={(e) => handleActionChange(complaint.id, e.target.value)}
      />
      <input type="file" accept="image/*" onChange={handlePhotoChange} />
      <button onClick={onSubmit}>Submit</button>
    </div>
  );
};

export default ComplaintItem;

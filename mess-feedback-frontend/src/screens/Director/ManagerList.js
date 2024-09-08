import React from 'react';

function ManagerList({ manager, handleDelete }) {
  return (
    <div className="manager-item">
      <div className="manager-header">
        <span>{manager.name}</span>
        <button className="delete-button" onClick={() => handleDelete(manager.id)}>Delete</button>
      </div>
      <div className="manager-details">
        <p>Campus: {manager.campus}</p>
        <p>Mess: {manager.mess}</p>
        <p>Contact Number: {manager.contactNumber}</p>
      </div>
    </div>
  );
}

export default ManagerList;

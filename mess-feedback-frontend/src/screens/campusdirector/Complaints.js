import React from 'react';
import './Complaints.css';

function Complaints({ complaints }) {
  return (
    <div className="complaints">
      {complaints.length === 0 ? (
        <p>No complaints available.</p>
      ) : (
        complaints.map(c => (
          <div className="complaint" key={c.id}>
            <p>{c.complaint}</p>
            <p>Status: {c.resolved ? 'Resolved' : 'Pending'}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Complaints;
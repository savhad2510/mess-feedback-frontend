import React from 'react';
import './SupervisorList.css'; // Import the CSS file

const SupervisorList = ({ supervisor }) => {
  return (
    <div className="supervisor-list-container">
      <h3>{supervisor.name}</h3>
      <table className="complaints-table">
        <thead>
          <tr>
            <th>Complaint ID</th>
            <th>Complaint</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {supervisor.complaints.map((complaint, index) => (
            <tr key={complaint.id}>
              <td>{index + 1}</td>
              <td>{complaint.text}</td>
              <td>{complaint.resolved ? 'Resolved' : 'Pending'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SupervisorList;
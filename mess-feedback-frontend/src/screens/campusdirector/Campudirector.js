import React, { useState, useEffect } from 'react';
import SupervisorList from './SupervisorList';
import './Admin.css';

function Admin() {
  const [supervisors, setSupervisors] = useState([]);
  const [managers, setManagers] = useState([]);
  const [showSupervisors, setShowSupervisors] = useState(false);
  const [showManagers, setShowManagers] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [isSupervisor, setIsSupervisor] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    mess: '',
    campus: '',
    contactNumber: ''
  });

  useEffect(() => {
    loadSupervisors();
    loadManagers();
  }, []);

  const loadSupervisors = () => {
    setSupervisors([
      { id: 1, name: 'Supervisor 1', complaints: [
        { id: 1, text: 'Complaint 1', resolved: false },
        { id: 2, text: 'Complaint 2', resolved: true }
      ] },
      { id: 2, name: 'Supervisor 2', complaints: [
        { id: 3, text: 'Complaint 3', resolved: false },
        { id: 4, text: 'Complaint 4', resolved: true }
      ] }
    ]);
  };

  const loadManagers = () => {
    setManagers([
      { id: 1, name: 'Manager 1', complaints: [
        { id: 1, text: 'Complaint 1', resolved: false },
        { id: 2, text: 'Complaint 2', resolved: true }
      ] },
      { id: 2, name: 'Manager 2', complaints: [
        { id: 3, text: 'Complaint 3', resolved: false },
        { id: 4, text: 'Complaint 4', resolved: true }
      ] }
    ]);
  };

  const handleAddClick = (isSupervisor) => {
    setIsSupervisor(isSupervisor);
    setShowForm(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    const newEntry = {
      id: isSupervisor ? supervisors.length + 1 : managers.length + 1,
      ...formData,
      complaints: []
    };

    if (isSupervisor) {
      setSupervisors([...supervisors, newEntry]);
    } else {
      setManagers([...managers, newEntry]);
    }

    setShowForm(false);
    setFormData({
      name: '',
      mess: '',
      campus: '',
      contactNumber: ''
    });
  };

  const handleDelete = (id, isSupervisor) => {
    const confirmation = window.confirm('Are you sure you want to delete this entry?');
    if (confirmation) {
      if (isSupervisor) {
        setSupervisors(supervisors.filter(s => s.id !== id));
      } else {
        setManagers(managers.filter(m => m.id !== id));
      }
    }
  };

  return (
    <div className="admin-container">
      <h2>Admin Portal</h2>
      <div className="button-container">
        <button onClick={() => handleAddClick(true)}>Add Supervisor</button>
        <button onClick={() => handleAddClick(false)}>Add Manager</button>
      </div>
      {showForm && (
        <div className="modal">
          <div className="modal-content">
            <h3>{isSupervisor ? 'Add Supervisor' : 'Add Manager'}</h3>
            <form>
              <label>
                Name:
                <input type="text" name="name" value={formData.name} onChange={handleInputChange} required />
              </label>
              <label>
                Mess:
                <input type="text" name="mess" value={formData.mess} onChange={handleInputChange} required />
              </label>
              <label>
                Campus:
                <input type="text" name="campus" value={formData.campus} onChange={handleInputChange} required />
              </label>
              <label>
                Contact Number:
                <input type="text" name="contactNumber" value={formData.contactNumber} onChange={handleInputChange} required />
              </label>
              <button type="button" onClick={handleSubmit}>Submit</button>
              <button type="button" onClick={() => setShowForm(false)}>Cancel</button>
            </form>
          </div>
        </div>
      )}
      <div className="dropdown">
        <button onClick={() => setShowSupervisors(!showSupervisors)}>
          Supervisors {showSupervisors ? '▲' : '▼'}
        </button>
        {showSupervisors && (
          <div>
            {supervisors.map(s => (
              <div key={s.id} className="supervisor-item">
                <SupervisorList supervisor={s} />
                <button className="delete-button" onClick={() => handleDelete(s.id, true)}>Delete</button>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="dropdown">
        <button onClick={() => setShowManagers(!showManagers)}>
          Managers {showManagers ? '▲' : '▼'}
        </button>
        {showManagers && (
          <div>
            {managers.map(m => (
              <div key={m.id} className="manager-item">
                <SupervisorList supervisor={m} />
                <button className="delete-button" onClick={() => handleDelete(m.id, false)}>Delete</button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Admin;

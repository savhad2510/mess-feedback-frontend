// import React, { useState } from 'react';
// import './Student.css'; // Import the CSS file

// const StudentLogin = () => {
//   const [formData, setFormData] = useState({
//     email: '',
//     campus: '',
//     mess: '',
//     date: '',
//     name: '',
//     phone: '',
//     collegeClass: '',
//     cleanEnvironment: '',
//     pestControl: '',
//     protocols: '',
//     complaints: '',
//     suggestions: '',
//     complaintCategory: '',
//     photo: null,
//     mealTime: '',
//   });

//   const handleChange = (e) => {
//     const { name, value, type, files } = e.target;
//     if (type === 'file') {
//       setFormData({ ...formData, [name]: files[0] });
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission (e.g., send data to server)
//     console.log(formData);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Email:
//         <input type="email" name="email" value={formData.email} onChange={handleChange} required />
//       </label>

//       <label>
//         Select Campus:
//         <select name="campus" value={formData.campus} onChange={handleChange} required>
//           <option value="">Select Campus</option>
//           <option value="Vadgaon-Ambegaon">Vadgaon-Ambegaon</option>
//           <option value="Warje">Warje</option>
//           <option value="Narhe">Narhe</option>
//           <option value="Kondhwa">Kondhwa</option>
//           <option value="Lonavla">Lonavla</option>
//         </select>
//       </label>

//       <label>
//         Select Mess:
//         <select name="mess" value={formData.mess} onChange={handleChange} required>
//           <option value="">Select Mess</option>
//           <option value="mess1">Mess 1</option>
//           <option value="mess2">Mess 2</option>
//         </select>
//       </label>

//       <label>
//         Date:
//         <input type="date" name="date" value={formData.date} onChange={handleChange} required />
//       </label>

//       <label>
//         Name of the Student:
//         <input type="text" name="name" value={formData.name} onChange={handleChange} required />
//       </label>

//       <label>
//         Phone Number:
//         <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
//       </label>

//       <label>
//         College Name and Class:
//         <input type="text" name="collegeClass" value={formData.collegeClass} onChange={handleChange} required />
//       </label>

//       <label>
//         Clean and Hygienic Environment in Dining Hall:
//         <button type="button" onClick={() => setFormData({ ...formData, cleanEnvironment: 'Yes' })}>Yes</button>
//         <button type="button" onClick={() => setFormData({ ...formData, cleanEnvironment: 'No' })}>No</button>
//       </label>

//       <label>
//         Pest Control Done in Dining Hall:
//         <button type="button" onClick={() => setFormData({ ...formData, pestControl: 'Yes' })}>Yes</button>
//         <button type="button" onClick={() => setFormData({ ...formData, pestControl: 'No' })}>No</button>
//       </label>

//       <label>
//         Food Handlers Following Protocols:
//         <button type="button" onClick={() => setFormData({ ...formData, protocols: 'Yes' })}>Yes</button>
//         <button type="button" onClick={() => setFormData({ ...formData, protocols: 'No' })}>No</button>
//       </label>

//       <label>
//         Food Related Complaints:
//         <input type="text" name="complaints" value={formData.complaints} onChange={handleChange} required />
//       </label>

//       <label>
//         Suggestions for Improvement:
//         <input type="text" name="suggestions" value={formData.suggestions} onChange={handleChange} required />
//       </label>

//       <label>
//         Category of Complaint:
//         <select name="complaintCategory" value={formData.complaintCategory} onChange={handleChange} required>
//           <option value="">Select Category</option>
//           <option value="food">Food Related</option>
//           <option value="hygiene">Hygiene</option>
//           <option value="space">Lack of Space</option>
//         </select>
//       </label>

//       <label>
//         Meal Time:
//         <select name="mealTime" value={formData.mealTime} onChange={handleChange} required>
//           <option value="">Select Meal Time</option>
//           <option value="lunch">Lunch</option>
//           <option value="dinner">Dinner</option>
//         </select>
//       </label>

//       <label>
//         Upload Photo (Optional):
//         <input type="file" name="photo" onChange={handleChange} />
//       </label>

//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default StudentLogin;






import React, { useState } from 'react';
import './Student.css'; // Import the CSS file

const StudentLogin = () => {
  const [formData, setFormData] = useState({
    email: '',
    campus: '',
    mess: '',
    date: '',
    name: '',
    phone: '',
    collegeClass: '',
    cleanEnvironment: '',
    pestControl: '',
    protocols: '',
    complaints: '',
    suggestions: '',
    complaintCategory: '',
    photo: null,
    mealTime: '',
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Show confirmation dialog before submitting
    const confirmed = window.confirm('Are you sure you want to submit the feedback?');
    if (confirmed) {
      // Handle form submission (e.g., send data to server)
      console.log(formData);
      // Reset form after submission if needed
      setFormData({
        email: '',
        campus: '',
        mess: '',
        date: '',
        name: '',
        phone: '',
        collegeClass: '',
        cleanEnvironment: '',
        pestControl: '',
        protocols: '',
        complaints: '',
        suggestions: '',
        complaintCategory: '',
        photo: null,
        mealTime: '',
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </label>

      <label>
        Select Campus:
        <select name="campus" value={formData.campus} onChange={handleChange} required>
          <option value="">Select Campus</option>
          <option value="Vadgaon-Ambegaon">Vadgaon-Ambegaon</option>
          <option value="Warje">Warje</option>
          <option value="Narhe">Narhe</option>
          <option value="Kondhwa">Kondhwa</option>
          <option value="Lonavla">Lonavla</option>
        </select>
      </label>

      <label>
        Select Mess:
        <select name="mess" value={formData.mess} onChange={handleChange} required>
          <option value="">Select Mess</option>
          <option value="mess1">Mess 1</option>
          <option value="mess2">Mess 2</option>
        </select>
      </label>

      <label>
        Date:
        <input type="date" name="date" value={formData.date} onChange={handleChange} required />
      </label>

      <label>
        Name of the Student:
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </label>

      <label>
        Phone Number:
        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
      </label>

      <label>
        College Name and Class:
        <input type="text" name="collegeClass" value={formData.collegeClass} onChange={handleChange} required />
      </label>

      <label>
        Clean and Hygienic Environment in Dining Hall:
        <button type="button" onClick={() => setFormData({ ...formData, cleanEnvironment: 'Yes' })}>Yes</button>
        <button type="button" onClick={() => setFormData({ ...formData, cleanEnvironment: 'No' })}>No</button>
      </label>

      <label>
        Pest Control Done in Dining Hall:
        <button type="button" onClick={() => setFormData({ ...formData, pestControl: 'Yes' })}>Yes</button>
        <button type="button" onClick={() => setFormData({ ...formData, pestControl: 'No' })}>No</button>
      </label>

      <label>
        Food Handlers Following Protocols:
        <button type="button" onClick={() => setFormData({ ...formData, protocols: 'Yes' })}>Yes</button>
        <button type="button" onClick={() => setFormData({ ...formData, protocols: 'No' })}>No</button>
      </label>

      <label>
        Food Related Complaints:
        <input type="text" name="complaints" value={formData.complaints} onChange={handleChange} required />
      </label>

      <label>
        Suggestions for Improvement:
        <input type="text" name="suggestions" value={formData.suggestions} onChange={handleChange} required />
      </label>

      <label>
        Category of Complaint:
        <select name="complaintCategory" value={formData.complaintCategory} onChange={handleChange} required>
          <option value="">Select Category</option>
          <option value="food">Food Related</option>
          <option value="hygiene">Hygiene</option>
          <option value="space">Lack of Space</option>
        </select>
      </label>

      <label>
        Meal Time:
        <select name="mealTime" value={formData.mealTime} onChange={handleChange} required>
          <option value="">Select Meal Time</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
        </select>
      </label>

      <label>
        Upload Photo (Optional):
        <input type="file" name="photo" onChange={handleChange} />
      </label>

      <button type="submit">Submit</button>
    </form>
  );
};

export default StudentLogin;







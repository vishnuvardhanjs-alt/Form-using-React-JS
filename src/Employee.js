import React, { useState } from 'react';
import './EmployeeForm.css';
const EmployeeForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    birthDate: '',
    email: '',
    phoneNumber: '',
    gender: '',
    startTime: '',
    endTime: '',
    jobPosition: '',
    team: '',
    designation: '',
    billableHours: '',
    isBillable: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.firstName) newErrors.firstName = 'First Name is required';
    if (!formData.lastName) newErrors.lastName = 'Last Name is required';
    if (!formData.birthDate) newErrors.birthDate = 'Birth Date is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.phoneNumber) newErrors.phoneNumber = 'Phone Number is required';
    if (!formData.gender) newErrors.gender = 'Gender is required';
    if (!formData.startTime) newErrors.startTime = 'Start Time is required';
    if (!formData.endTime) newErrors.endTime = 'End Time is required';
    if (!formData.jobPosition) newErrors.jobPosition = 'Job Position is required';
    if (!formData.billableHours) {
      newErrors.billableHours = 'Billable Hours is required';
    } else if (isNaN(formData.billableHours) || formData.billableHours <= 0) {
      newErrors.billableHours = 'Billable Hours must be a positive number';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log(formData);
      alert('Form submitted successfully!');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="employee-form">
      <h3>Employee Form</h3>
      <div className="form-grid">
        <div className="form-row">
          <div>
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className={errors.firstName ? 'error' : ''}
            />
            {errors.firstName && <p className="error-text">{errors.firstName}</p>}
          </div>

          <div>
            <label>Middle Name</label>
            <input
              type="text"
              name="middleName"
              value={formData.middleName}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className={errors.lastName ? 'error' : ''}
            />
            {errors.lastName && <p className="error-text">{errors.lastName}</p>}
          </div>
        </div>

        <div className="form-row">
          <div>
            <label>Birth Date</label>
            <input
              type="date"
              name="birthDate"
              value={formData.birthDate}
              onChange={handleChange}
              className={errors.birthDate ? 'error' : ''}
            />
            {errors.birthDate && <p className="error-text">{errors.birthDate}</p>}
          </div>

          <div>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? 'error' : ''}
            />
            {errors.email && <p className="error-text">{errors.email}</p>}
          </div>

          <div>
            <label>Phone Number</label>
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className={errors.phoneNumber ? 'error' : ''}
            />
            {errors.phoneNumber && <p className="error-text">{errors.phoneNumber}</p>}
          </div>
        </div>

        <div className="form-row">
          <div>
            <label>Select Gender</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className={errors.gender ? 'error' : ''}
            >
              <option value="">Choose Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            {errors.gender && <p className="error-text">{errors.gender}</p>}
          </div>

          <div>
            <label>Start Time</label>
            <input
              type="time"
              name="startTime"
              value={formData.startTime}
              onChange={handleChange}
              className={errors.startTime ? 'error' : ''}
            />
            {errors.startTime && <p className="error-text">{errors.startTime}</p>}
          </div>

          <div>
            <label>End Time</label>
            <input
              type="time"
              name="endTime"
              value={formData.endTime}
              onChange={handleChange}
              className={errors.endTime ? 'error' : ''}
            />
            {errors.endTime && <p className="error-text">{errors.endTime}</p>}
          </div>
        </div>

        <div className="form-row">
          <div>
            <label>Job Position</label>
            <input
              type="text"
              name="jobPosition"
              value={formData.jobPosition}
              onChange={handleChange}
              className={errors.jobPosition ? 'error' : ''}
            />
            {errors.jobPosition && <p className="error-text">{errors.jobPosition}</p>}
          </div>

          <div>
            <label>Select Teams</label>
            <select name="team" value={formData.team} onChange={handleChange}>
              <option value="">Select...</option>
              <option value="team1">Team 1</option>
              <option value="team2">Team 2</option>
            </select>
          </div>

          <div>
            <label>Select Designation</label>
            <select name="designation" value={formData.designation} onChange={handleChange}>
              <option value="">Select...</option>
              <option value="junior">Junior</option>
              <option value="senior">Senior</option>
            </select>
          </div>
        </div>

        <div className="form-row">
          <div>
            <label>Billable Hours</label>
            <input
              type="number"
              name="billableHours"
              value={formData.billableHours}
              onChange={handleChange}
              className={errors.billableHours ? 'error' : ''}
            />
            {errors.billableHours && <p className="error-text">{errors.billableHours}</p>}
          </div>

          <div>
            <label>Is Billable</label>
            <input
              type="checkbox"
              name="isBillable"
              checked={formData.isBillable}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>

      <button type="submit" className="submit-button">Submit</button>
    </form>
  );
};
export default EmployeeForm;
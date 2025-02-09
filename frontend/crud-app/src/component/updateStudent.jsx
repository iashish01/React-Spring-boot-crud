import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';

export default function UpdateStudent() {
  const { id } = useParams(); // Get the student ID from the URL parameters

  // State to store form data
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    fatherName: '',
    gender: '',
    email: '',
    phone: '',
    class: '',
    city: '',
  });

  // Handle form data changes
  const handleChanges = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Fetch student data based on ID when the component mounts
  const studentInfo = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/student/${id}`);
      const data = response.data;

      console.log(response.data);

      // Populate the form with the fetched student data
      setFormData({
        firstName: data.firstName || '',
        lastName: data.lastName || '',
        fatherName: data.fatherName || '',
        gender: data.gender || '',
        email: data.email || '',
        phone: data.phone || '',
        class: data.standard || '',
        city: data.city || '',
      });
    } catch (error) {
      console.error('Error fetching student info:', error);
    }
  };

  useEffect(() => {
    studentInfo(); // Fetch the student data when the component mounts or the ID changes
  }, [id]);

  // Submit the updated form data
  const handleSubmitForm = (e) => {
    console.log("Form Data Submission:", formData);
    // Send the updated data to the server
    axios.put(`http://localhost:8080/crud/student/update/${id}`, formData)
      .then((response) => {
        if (response.status === 200) {
          alert('Student updated successfully!');
          Navigate("/");
        }
        console.log('Data submitted successfully:', response);
      })
      .catch((error) => {
        console.error('There was an error submitting the form!', error);
        alert('Error while submitting the form.');
      });
  };

  return (
    <>
      <div>
        <div id="student-list">
          <label>Update Student</label>
        </div>
        <div className='flex d-flex right-item'>
          <div className='mt-2 text-right mr-3 right-item'>
            <Link to="/student/new"><button type='button' className='btn btn-sm btn-primary font-weight'>Add New Student</button></Link>
          </div>
          <div className='mt-2 text-right mr-3 right-item'>
            <Link to="/student/list"><button type='button' className='btn btn-sm btn-primary font-weight'>Student List</button></Link>
          </div>
        </div>
        <div id="new-student">
          <form onSubmit={handleSubmitForm}>
            <div className="row">
              <div className="col-sm-6">
                <label className="font-weight">First Name</label><span className="text-danger font-weight">*</span>
                <div className="input-icon">
                  <i className="fa fa-user-circle-o icon"></i>
                  <input
                    type="text"
                    name="firstName"
                    className="form-control form-control-sm"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChanges}
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <label className="font-weight">Last Name</label><span className="text-danger font-weight">*</span>
                <div className="input-icon">
                  <i className="fa fa-user-circle-o icon"></i>
                  <input
                    type="text"
                    name="lastName"
                    className="form-control form-control-sm"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChanges}
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-6">
                <label className="font-weight">Father's Name</label><span className="text-danger font-weight">*</span>
                <label className="text-secondary help-text">Please don't use salutation(Mr.)</label>
                <div className="input-icon">
                  <i className="fa fa-user-circle-o icon"></i>
                  <input
                    type="text"
                    name="fatherName"
                    className="form-control form-control-sm"
                    placeholder="Father Name"
                    value={formData.fatherName}
                    onChange={handleChanges}
                  />
                </div>
              </div>
              <div className="col-sm-3">
                <label className="font-weight">Class</label><span className="text-danger font-weight">*</span>
                <div className="input-icon">
                  <i className="fa fa-solid fa-caret-down icon"></i>
                  <select
                    name="class"
                    className="form-control form-control-sm"
                    value={formData.class}
                    onChange={handleChanges}
                  >
                    <option value="0">--select an Option--</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                  </select>
                </div>
              </div>
              <div className="col-sm-3">
                <label className="font-weight">Gender</label><span className="text-danger font-weight">*</span><br />
                <div className="form-check form-check-inline">
                  <input
                    type="radio"
                    name="gender"
                    id="male"
                    value="male"
                    className="form-check-input mt-2"
                    onChange={handleChanges}
                    checked={formData.gender === 'male'}
                  />
                  <label htmlFor="male" className="form-check-label">Male</label>
                </div>

                <div className="form-check form-check-inline">
                  <input
                    type="radio"
                    name="gender"
                    id="female"
                    value="female"
                    className="form-check-input mt-2"
                    onChange={handleChanges}
                    checked={formData.gender === 'female'}
                  />
                  <label htmlFor="female" className="form-check-label">Female</label>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-6">
                <label className="font-weight">Phone Number</label><span className="text-danger font-weight">*</span>
                <div className="input-icon">
                  <i className="fa fa-phone-square icon"></i>
                  <input
                    type="text"
                    name="phone"
                    className="form-control form-control-sm"
                    placeholder="1234567890"
                    value={formData.phone}
                    onChange={handleChanges}
                  />
                </div>
              </div>
              <div className="col-sm-3">
                <label className="font-weight">Email Address</label><span className="text-danger font-weight">*</span>
                <div className="input-icon">
                  <i className="fa fa-solid fa-envelope-o icon"></i>
                  <input
                    type="text"
                    name="email"
                    className="form-control form-control-sm"
                    placeholder="info@gmail.com"
                    value={formData.email}
                    onChange={handleChanges}
                  />
                </div>
              </div>
              <div className="col-sm-3">
                <label className="font-weight">City</label><span className="text-danger font-weight">*</span>
                <div className="input-icon">
                  <i className="fa fa-location-arrow icon"></i>
                  <input
                    type="text"
                    name="city"
                    className="form-control form-control-sm"
                    placeholder="Delhi"
                    value={formData.city}
                    onChange={handleChanges}
                  />
                </div>
              </div>
            </div>

            <div className="text-center mt-4">
              <button type="submit" className="btn btn-sm btn-primary">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

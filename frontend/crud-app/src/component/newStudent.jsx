import React, { useState } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function NewStudent() {

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

    const handleClearForm = () => {
        setFormData({
            firstName: '',
            lastName: '',
            fatherName: '',
            gender: '',
            email: '',
            phone: '',
            class: '',
            city: '',
        });
    };

    const handleChanges = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmitForm = (e) => {
        e.preventDefault();
        console.log("Form Data Submission:", formData);

        axios.post('http://localhost:8080/crud/new/student', formData)
            .then(response => {
                if (response.status == 200) {
                    alert('Student added successfully!');
                    handleClearForm();
                }
                console.log('Data submitted successfully:', response);
            })
            .catch(error => {
                console.error('There was an error submitting the form!', error);
                alert('Error while submitting the form.');
            });
    };


    return (
        <>
            <div>
                <div id='student-list'>
                    <label>New Student</label>
                </div>
                <div className='right-item'>
                    <Link to="/student/list"><button type='button' className='btn btn-sm btn-primary font-weight'>Student List</button></Link>
                </div>
                <div id="new-student">
                    <form onSubmit={handleSubmitForm} onReset={handleClearForm}>
                        <div className='row'>
                            <div className='col-sm-6'>
                                <label className='font-weight'>First Name</label><span className='text-danger font-weight'>*</span>
                                <div className='input-icon'>
                                    <i className='fa fa-user-circle-o icon'></i>
                                    <input type='text' name='firstName' className='form-control form-control-sm' placeholder='First Name' onChange={handleChanges} />
                                </div>
                            </div>
                            <div className='col-sm-6'>
                                <label className='font-weight'>Last Name</label><span className='text-danger font-weight'>*</span>
                                <div className='input-icon'>
                                    <i className='fa fa-user-circle-o icon'></i>
                                    <input type='text' name='lastName' className='form-control form-control-sm' placeholder='Last Name' onChange={handleChanges} />
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-sm-6'>
                                <label className='font-weight'>Father's Name</label><span className='text-danger font-weight'>*</span>
                                <label className='text-secondary help-text'>Please don't use salutation(Mr.)</label>
                                <div className='input-icon'>
                                    <i className='fa fa-user-circle-o icon'></i>
                                    <input type='text' name='fatherName' className='form-control form-control-sm' placeholder='Father Name' onChange={handleChanges} />
                                </div>
                            </div>
                            <div className='col-sm-3'>
                                <label className='font-weight'>Class</label><span className='text-danger font-weight'>*</span>
                                <div className='input-icon'>
                                    <i className='fa fa-solid fa-caret-down icon'></i>
                                    <select name="class" className='form-control form-control-sm' onChange={handleChanges}>
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
                                <label className="font-weight">Gender</label><span className='text-danger font-weight'>*</span><br />
                                <div className="form-check form-check-inline">
                                    <input type="radio" name="gender" id="male"
                                        value="male"
                                        className="form-check-input mt-2"
                                        onChange={handleChanges}
                                        checked={formData.gender === 'male'}
                                    />
                                    <label htmlFor="male" className="form-check-label">Male</label>
                                </div>

                                <div className="form-check form-check-inline">
                                    <input type="radio" name="gender" id="female"
                                        value="female"
                                        className="form-check-input mt-2"
                                        onChange={handleChanges}
                                        checked={formData.gender === 'female'}
                                    />
                                    <label htmlFor="female" className="form-check-label">Female</label>
                                </div>
                            </div>

                        </div>
                        <div className='row'>
                            <div className='col-sm-6'>
                                <label className='font-weight'>Phone Number</label><span className='text-danger font-weight'>*</span>
                                <div className='input-icon'>
                                    <i className='fa fa-phone-square icon'></i>
                                    <input type='text' name='phone' className='form-control form-control-sm' placeholder='1234567890' onChange={handleChanges} />
                                </div>
                            </div>
                            <div className='col-sm-3'>
                                <label className='font-weight'>Email Address</label><span className='text-danger font-weight'>*</span>
                                <div className='input-icon'>
                                    <i className='fa fa-solid fa-envelope-o icon'></i>
                                    <input type='text' name='email' className='form-control form-control-sm' placeholder='info@gmail.com' onChange={handleChanges} />
                                </div>
                            </div>
                            <div className='col-sm-3'>
                                <label className='font-weight'>City</label><span className='text-danger font-weight'>*</span>
                                <div className='input-icon'>
                                    <i className='fa fa-location-arrow icon'></i>
                                    <input type='text' name='city' className='form-control form-control-sm' placeholder='Delhi' onChange={handleChanges} />
                                </div>
                            </div>
                        </div>
                        <div className='text-center mt-4'>
                            <button type="reset" className='btn btn-sm btn-primary'>Clear</button>&nbsp;
                            <button type="submit" className='btn btn-sm btn-primary'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

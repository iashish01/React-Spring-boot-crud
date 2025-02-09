import React, { useState } from 'react';
import '../authentication/login.css';
import login_image from '../../src/assets/images/login_image.jpg';
import { Navigate } from 'react-router-dom';

export default function Login() {
    // State to manage form input
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const loginSubmitForm = (e) => {
        // e.preventDefault();
        // Implement form submission logic here
        console.log('Submitted:', { username, password });
        Navigate("/student/list");
    };

    const clearForm = () => {
        setUsername('');
        setPassword('');
    };

    return (
        <>
            <div id='login'>
                <div className='login_auth'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <div className='login-label'>
                                <img src={login_image} alt="login image" width='70%' height='10%' />
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='form'>
                                <label className='text-danger font-weight' id='login-first'>Login Here</label>
                                <hr />
                                <form onSubmit={loginSubmitForm}>
                                    <div className='row'>
                                        <div className='col-md-12 mt-3'>
                                            <label className='font-weight mb-3'>UserName or Email</label>&nbsp;
                                            <span className='text-danger form-weight'>*</span>
                                            <input 
                                                type='text' 
                                                name='username' 
                                                placeholder='Enter User name or Registered Email' 
                                                className='form-control form-control-md' 
                                                value={username}
                                                onChange={(e) => setUsername(e.target.value)} 
                                            />
                                        </div>
                                        <div className='col-md-12 mt-3'>
                                            <label className='font-weight mb-3'>Password</label>&nbsp;
                                            <span className='text-danger form-weight'>*</span>
                                            <input 
                                                type='password' 
                                                name='password' 
                                                placeholder='................................' 
                                                className='form-control form-control-md' 
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)} 
                                            />
                                        </div>
                                        <div className='text-center mt-4'>
                                            <button 
                                                type='reset' 
                                                className='btn btn-sm btn-primary'
                                                onClick={clearForm}
                                            >
                                                Clear
                                            </button>&nbsp;
                                            <button 
                                                type='submit' 
                                                className='btn btn-sm btn-success'
                                            >
                                                Submit
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

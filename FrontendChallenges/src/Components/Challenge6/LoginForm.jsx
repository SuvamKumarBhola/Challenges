import React, { useState } from 'react'

function LoginForm() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })
    const [error, setError] = useState('')

    const handleChage = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        if (error[name]) setError({ ...error, [name]: '' })
    };

    const validateForm = () => {
        let tempErrors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!formData.email) {
            tempErrors.email = 'Email is required';
        } else if (!emailRegex.test(formData.email)) {
            tempErrors.email = 'Invalid email format';
        }

        if (!formData.password) {
            tempErrors.password = 'Password is required';
        } else if (formData.password.length < 6) {
            tempErrors.password = 'Password must be at least 6 characters long';
        }

        return Object.keys(tempErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log("Form is Submitted Successfully", formData);
            alert("Login Successful !")
        } else {
            console.log("validation Failed");
        }
    }


    return (
        <div>
            <h2>Login Form</h2>
            <form onSubmit={handleSubmit}>
                <div className='Email'>
                    <label>Email:</label>
                    <input
                        type='email'
                        name='email'
                        value={formData.email}
                        onChange={handleChage}
                        className={error.email ? "input-error" : ""}
                    />
                    {error.email && <span className='error-text' > {error.email}</span>}
                </div>

                <div className='Password'>
                    <lable>Password</lable>
                    <input
                        type='password'
                        name='password'
                        value={formData.password}
                        onChange={handleChage}
                        className={error.password ? 'input-error' : ''}
                    />
                    {error.password && <span className='error-text'>{error.password}</span>}
                </div>
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}

export default LoginForm
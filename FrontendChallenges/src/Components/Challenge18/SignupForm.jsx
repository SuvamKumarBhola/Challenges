import React from 'react';
import useForm from './useForm';
import validate from './validate';
import './Form.css'; 

const SignupForm = () => {
    const submitForm = (formValues, onComplete) => {
        console.log("Submitting to API:", formValues);

        setTimeout(() => {
            alert("Registration Successful!");
            onComplete(); 
        }, 2000);
    };

    const {
        values,
        errors,
        touched,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit
    } = useForm({ email: '', password: '' }, validate);

    return (
        <div className="form-container">
            <h1>Create Account</h1>

            <form onSubmit={handleSubmit(submitForm)} noValidate>

                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={errors.email && touched.email ? 'input-error' : ''}
                    />
                    {errors.email && touched.email && (
                        <span className="error-text">{errors.email}</span>
                    )}
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={errors.password && touched.password ? 'input-error' : ''}
                    />
                    {errors.password && touched.password && (
                        <span className="error-text">{errors.password}</span>
                    )}
                </div>

                <button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Creating Account...' : 'Sign Up'}
                </button>

            </form>
        </div>
    );
};

export default SignupForm;
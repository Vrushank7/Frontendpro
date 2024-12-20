import React, { useState } from "react";
import '../App.css';

const Signup = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        password: "",
    });
    const [errors, setErrors] = useState({});
    const handleChange = (event) => {
        const { name, value } = event.target;
        if (name === "phone" && value.length > 10) return;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const validate = () => {
        const newErrors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^[0-9]{10}$/;
        if (!formData.firstName) newErrors.firstName = "First Name is required.";
        if (!formData.lastName) newErrors.lastName = "Last Name is required.";
        if (!formData.email || !emailRegex.test(formData.email)) {
            newErrors.email = "Enter a valid email.";
        }
        if (!formData.phone || !phoneRegex.test(formData.phone)) {
            newErrors.phone = "Enter a valid 10-digit phone number.";
        }
        if (!formData.password) newErrors.password = "Password is required.";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        if (validate()) {
            alert("Login Successful");
            console.log("Form Submitted: ", formData);
        }
    };

    return (
        <div className="signup-container">
            <div className="signup-form">
                <h2>SignUp to your account</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>First Name *</label>
                        <input type="text" name="firstName" placeholder="Enter your first name" value={formData.firstName} onChange={handleChange} />
                        {errors.firstName && <p className="error">{errors.firstName}</p>}
                    </div>

                    <div className="form-group">
                        <label>Last Name *</label>
                        <input type="text" name="lastName" placeholder="Enter your last name" value={formData.lastName} onChange={handleChange} />
                        {errors.lastName && <p className="error">{errors.lastName}</p>}
                    </div>

                    <div className="form-group">
                        <label>Email *</label>
                        <input type="text" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} />
                        {errors.email && <p className="error">{errors.email}</p>}
                    </div>

                    <div className="form-group">
                        <label>Phone Number *</label>
                        <input type="text" name="phone" placeholder="Enter your phone number" value={formData.phone} onChange={handleChange} maxLength="10" />
                        {errors.phone && <p className="error">{errors.phone}</p>}
                    </div>

                    <div className="form-group">
                        <label>Password *</label>
                        <input type="password" name="password" placeholder="Enter your password" value={formData.password} onChange={handleChange} />
                        {errors.password && <p className="error">{errors.password}</p>}
                    </div>
                    <button type="submit">LOGIN</button>
                </form>
                <div className="signup-links">
                    <p>
                        Forgot your password? <a href="/reset">Reset here</a>
                    </p>
                    <p>
                        Have trouble logging in? <a href="/help">Get Help</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Signup;
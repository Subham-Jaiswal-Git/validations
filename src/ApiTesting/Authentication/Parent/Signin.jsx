import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import InputBox from "../Child/InputBox";

const UserForm = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        companyId: "",
        profileImage: "",
        email: "",
        phone: "",
        password: "",
        gender: "",
        age: "",
        bloodGroup: "",
        city: "",
        state: "",
        country: "",
        zipCode: "",
        address: "",
        isActive: "true",
    });

    const [errors, setErrors] = useState({});

    const validateEmail = (email) =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? "" : "Invalid email format";

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));

        if (name === "email") {
            setErrors((prev) => ({ ...prev, email: validateEmail(value) }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (errors.email) {
            toast.error("Please fix validation errors before submitting.");
            return;
        }

        try {
            const response = await axios.post("https://spkbackendbaseimage.onrender.com/users/create", formData);
            toast.success("Form submitted successfully!");
            console.log("Response:", response.data);
        } catch (error) {
            toast.error("Error submitting form. Please try again.");
            console.error("Error:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 border rounded">
            <InputBox label="First Name" type="text" name="firstName" value={formData.firstName} handleChange={handleChange} />
            <InputBox label="Last Name" type="text" name="lastName" value={formData.lastName} handleChange={handleChange} />
            <InputBox label="Company ID" type="text" name="companyId" value={formData.companyId} handleChange={handleChange} />
            <InputBox label="Profile Image URL" type="text" name="profileImage" value={formData.profileImage} handleChange={handleChange} />
            <InputBox label="Email" type="email" name="email" value={formData.email} handleChange={handleChange} validate={validateEmail} error={errors.email} />
            <InputBox label="Phone" type="text" name="phone" value={formData.phone} handleChange={handleChange} />
            <InputBox label="Password" type="password" name="password" value={formData.password} handleChange={handleChange} />
            <InputBox label="Age" type="number" name="age" value={formData.age} handleChange={handleChange} />
            <InputBox label="Blood Group" type="text" name="bloodGroup" value={formData.bloodGroup} handleChange={handleChange} />
            <InputBox label="City" type="text" name="city" value={formData.city} handleChange={handleChange} />
            <InputBox label="State" type="text" name="state" value={formData.state} handleChange={handleChange} />
            <InputBox label="Country" type="text" name="country" value={formData.country} handleChange={handleChange} />
            <InputBox label="Zip Code" type="text" name="zipCode" value={formData.zipCode} handleChange={handleChange} />
            <InputBox label="Address" type="text" name="address" value={formData.address} handleChange={handleChange} />

            <label className="block mt-2">Gender</label>
            <select name="gender" value={formData.gender} onChange={handleChange} className="w-full p-2 border rounded">
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
            </select>

            <label className="block mt-2">Active Status</label>
            <select name="isActive" value={formData.isActive} onChange={handleChange} className="w-full p-2 border rounded">
                <option value="true">Active</option>
                <option value="false">Inactive</option>
            </select>

            <button type="submit" className="mt-4 w-full bg-blue-600 text-white py-2 rounded">
                Submit
            </button>
            
        </form>
    );
};

export default UserForm;

import React, { useState } from 'react'
import PersonalInfo from './PersonalInfo';
import Address from './Address';
import Confirmation from './Confirmation';

function MultistepForm() {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        city: "",
        zip: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value, })
    }

    const isStepValid = () => {
        if (currentStep === 1) {
            return formData.firstName.trim() !== "" && formData.lastName.trim() !== "";
        }
        if (currentStep === 2) {
            return formData.city.trim() !== "" && formData.zip.trim !== "";
        }
        if (currentStep === 3) {
            return true;
        }
    }

    const handleNext = () => {
        if (isStepValid()) {
            setCurrentStep((prev) => prev + 1)
        } else {
            alert("Please Fill in all fields before proceeding")
        }
    };

    const handleBack = () => [
        setCurrentStep((prev) => prev - 1)
    ]

    const handleSubmit=()=>{
        alert("From Submitted Successfully!");
        console.log(formData)
    }

    const renderStep=()=>{
        switch(currentStep){
            case 1: return <PersonalInfo formData={formData} handleChange={handleChange} />;
            case 2: return <Address formData={formData} handleChange={handleChange} />;
            case 3: return <Confirmation formData={formData} />;
            default: return null;
        }
    }

    return (
        <div></div>
    )
}

export default MultistepForm
function MultistepForm() {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        city: "",
        zip: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const isStepValid = () => {
        if (currentStep === 1) {
            return formData.firstName.trim() !== "" && formData.lastName.trim() !== "";
        }
        if (currentStep === 2) {
            return formData.city.trim() !== "" && formData.zip.trim() !== "";
        }
        if (currentStep === 3) {
            return true;
        }
    };

    const handleNext = () => {
        if (isStepValid()) {
            setCurrentStep((prev) => prev + 1);
        } else {
            alert("Please fill in all fields before proceeding");
        }
    };

    const handleBack = () => {
        setCurrentStep((prev) => prev - 1);
    };

    const handleSubmit = () => {
        alert("Form Submitted Successfully!");
        console.log(formData);
    };

    const renderStep = () => {
        switch (currentStep) {
            case 1:
                return <PersonalInfo formData={formData} handleChange={handleChange} />;
            case 2:
                return <Address formData={formData} handleChange={handleChange} />;
            case 3:
                return <Confirmation formData={formData} />;
            default:
                return null;
        }
    };

    const steps = [
        { number: 1, title: "Personal Info", icon: User },
        { number: 2, title: "Address", icon: MapPin },
        { number: 3, title: "Confirmation", icon: CheckCircle }
    ];

    return (
        <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-2xl">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-slate-800 mb-2">Registration Form</h1>
                    <p className="text-slate-500">Complete all steps to finish registration</p>
                </div>

                {/* Step Indicator */}
                <div className="mb-8">
                    <div className="flex justify-between items-center">
                        {steps.map((step, index) => {
                            const Icon = step.icon;
                            const isActive = currentStep === step.number;
                            const isCompleted = currentStep > step.number;

                            return (
                                <React.Fragment key={step.number}>
                                    <div className="flex flex-col items-center flex-1">
                                        <div
                                            className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 transition-all ${isCompleted
                                                    ? "bg-green-500 text-white"
                                                    : isActive
                                                        ? "bg-blue-600 text-white ring-4 ring-blue-100"
                                                        : "bg-slate-200 text-slate-400"
                                                }`}
                                        >
                                            <Icon size={20} />
                                        </div>
                                        <div
                                            className={`text-sm font-medium ${isActive ? "text-blue-600" : isCompleted ? "text-green-600" : "text-slate-400"
                                                }`}
                                        >
                                            {step.title}
                                        </div>
                                    </div>
                                    {index < steps.length - 1 && (
                                        <div
                                            className={`h-1 flex-1 mx-2 rounded transition-all ${currentStep > step.number ? "bg-green-500" : "bg-slate-200"
                                                }`}
                                            style={{ marginTop: "-30px" }}
                                        />
                                    )}
                                </React.Fragment>
                            );
                        })}
                    </div>
                </div>

                {/* Form Content */}
                <div className="mb-8 min-h-50">{renderStep()}</div>

                {/* Navigation Buttons */}
                <div className="flex gap-3">
                    {currentStep > 1 && (
                        <button
                            onClick={handleBack}
                            className="flex items-center gap-2 px-6 py-3 border-2 border-slate-300 text-slate-700 rounded-lg font-semibold hover:bg-slate-50 transition-all active:scale-95"
                        >
                            <ArrowLeft size={20} />
                            Back
                        </button>
                    )}
                    {currentStep < 3 ? (
                        <button
                            onClick={handleNext}
                            disabled={!isStepValid()}
                            className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${isStepValid()
                                    ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl active:scale-95"
                                    : "bg-slate-200 text-slate-400 cursor-not-allowed"
                                }`}
                        >
                            Next
                            <ArrowRight size={20} />
                        </button>
                    ) : (
                        <button
                            onClick={handleSubmit}
                            className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all active:scale-95"
                        >
                            <CheckCircle size={20} />
                            Submit
                        </button>
                    )}
                </div>

                {/* Progress Text */}
                <div className="mt-6 text-center text-sm text-slate-500">
                    Step {currentStep} of {steps.length}
                </div>
            </div>
        </div>
    );
}

export default MultistepForm;
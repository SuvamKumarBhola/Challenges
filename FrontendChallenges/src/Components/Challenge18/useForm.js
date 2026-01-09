import { useState, useEffect } from 'react';

const useForm = (initialValues, validate) => {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        const validationErrors = validate(values);
        setErrors(validationErrors);
    }, [values, validate]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value 
        });
    };

    const handleBlur = (e) => {
        const { name } = e.target;
        setTouched({
            ...touched,
            [name]: true
        });
    };

    const handleSubmit = (onSubmit) => {
        return (e) => {
            e.preventDefault();

            const allTouched = Object.keys(values).reduce((acc, key) => {
                acc[key] = true;
                return acc;
            }, {});
            setTouched(allTouched);

            const validationErrors = validate(values);
            if (Object.keys(validationErrors).length === 0) {
                setIsSubmitting(true);
                onSubmit(values, () => setIsSubmitting(false));
            } else {
                console.log("Form invalid, cannot submit");
            }
        };
    };

    return {
        values,
        errors,
        touched,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit
    };
};

export default useForm;
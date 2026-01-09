import useForm from './useForm';
import validate from './validate';

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
        <div className="max-w-md mx-auto mt-10 p-8 bg-slate-800 rounded-lg shadow-lg border border-slate-700">
            <h1 className="text-3xl font-bold text-white mb-6 text-center">Create Account</h1>
            <form onSubmit={handleSubmit(submitForm)} noValidate className="space-y-5">
                <div>
                    <label className="block text-slate-200 font-medium mb-2">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`w-full px-4 py-2 bg-slate-900 border rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 transition-all ${errors.email && touched.email
                                ? 'border-red-500 focus:ring-red-500'
                                : 'border-slate-600 focus:ring-blue-500'
                            }`}
                    />
                    {errors.email && touched.email && (
                        <span className="block text-red-400 text-sm mt-1">{errors.email}</span>
                    )}
                </div>
                <div>
                    <label className="block text-slate-200 font-medium mb-2">Password</label>
                    <input
                        type="password"
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`w-full px-4 py-2 bg-slate-900 border rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 transition-all ${errors.password && touched.password
                                ? 'border-red-500 focus:ring-red-500'
                                : 'border-slate-600 focus:ring-blue-500'
                            }`}
                    />
                    {errors.password && touched.password && (
                        <span className="block text-red-400 text-sm mt-1">{errors.password}</span>
                    )}
                </div>
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-600 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-colors duration-200"
                >
                    {isSubmitting ? 'Creating Account...' : 'Sign Up'}
                </button>
            </form>
        </div>
    );
};

export default SignupForm;
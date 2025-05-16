import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools"

let componentsRendered = 0;
const RegisterForm = () => {
    const { register, handleSubmit, control, watch, formState: { errors, isValid } } = useForm({
        mode: 'onChange',
    });

    const onSubmit = (data) => {
        console.log(data);
    };

    componentsRendered++;

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className="max-w-xl mx-auto mt-8 p-8 bg-white rounded-xl shadow-lg">
                <h1 className="text-2xl font-semibold text-gray-700 mb-6">Total Components Render: {componentsRendered}</h1>
                {/* Password Strength Indicator */}
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-semibold mb-2">Password</label>
                    <input
                        type="password"
                        {...register('password', {
                            required: true,
                            minLength: 8,
                            pattern: /^(?=.*[A-Z])(?=.*\d).+$/,
                        })}
                        className={`w-full px-4 py-3 border rounded-lg ${errors.password ? 'border-red-500' : 'border-gray-300'
                            } focus:outline-none focus:ring-2 focus:ring-purple-500`}
                    />
                    <div className="mt-2 flex gap-2">
                        {watch('password')?.length >= 8 && (
                            <span className="text-green-500 text-sm">✓ 8+ characters</span>
                        )}
                        {/[A-Z]/.test(watch('password')) && (
                            <span className="text-green-500 text-sm">✓ Uppercase</span>
                        )}
                        {/\d/.test(watch('password')) && (
                            <span className="text-green-500 text-sm">✓ Number</span>
                        )}
                    </div>

                    {errors.password && (
                        <span className="text-red-500 text-sm mt-1">Password must be 8 characters long, contain at least one uppercase letter and one number</span>
                    )}
                </div>

                {/* Dynamic Submit Button */}
                <button
                    type="submit"
                    disabled={!isValid}
                    className={`w-full py-3 px-6 text-white font-bold rounded-lg transition-colors ${isValid ? 'bg-purple-600 hover:bg-purple-700' : 'bg-gray-400 cursor-not-allowed'
                        }`}
                >
                    Create Account
                </button>
            </form>

            <DevTool control={control} />
        </>
    );
};

export default RegisterForm;
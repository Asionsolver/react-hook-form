import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools"
let componentsRendered = 0;
const ProfileForm = () => {
    const { register, handleSubmit, control, formState: { errors, isSubmitting, isSubmitSuccessful } } = useForm();

    const checkEmailAvailability = async (email) => {
        // Mock API call
        const available = await fetch(`/api/check-email?email=${email}`);
        return available;
    };

    const onSubmit = async (data) => {
        // Mock API call
        await new Promise(resolve => setTimeout(resolve, 2000));
        console.log('Profile updated:', data);
    };
    componentsRendered++;
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className="max-w-2xl mx-auto mt-8 p-10 bg-white rounded-2xl shadow-xl">
                <h1 className="text-2xl font-semibold text-gray-700 mb-6">Total Components Render: {componentsRendered}</h1>
                {/* Async Email Validation */}
                <div className="mb-8">
                    <label className="block text-gray-700 text-lg font-bold mb-3">Email</label>
                    <input
                        {...register('email', {
                            required: 'Email is required',
                            validate: async (value) => {
                                const available = await checkEmailAvailability(value);
                                return available || 'Email is already taken';
                            },
                        })}
                        className={`w-full px-5 py-4 text-lg border-2 rounded-xl ${errors.email ? 'border-red-500' : 'border-gray-300'
                            } focus:outline-none focus:ring-4 focus:ring-blue-200`}
                    />
                    {errors.email && (
                        <p className="text-red-600 text-sm mt-2 font-medium">{errors.email.message}</p>
                    )}
                </div>

                {/* Submission Feedback */}
                {isSubmitSuccessful && (
                    <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg">
                        Profile updated successfully!
                    </div>
                )}

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all disabled:bg-blue-300"
                >
                    {isSubmitting ? (
                        <div className="flex items-center justify-center gap-2">
                            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                            Updating...
                        </div>
                    ) : (
                        'Save Changes'
                    )}
                </button>
            </form>
            <DevTool control={control} />
        </>
    );
};

export default ProfileForm;
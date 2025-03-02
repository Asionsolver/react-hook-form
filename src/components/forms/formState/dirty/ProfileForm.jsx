import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools"
const ProfileForm = () => {
    const { register, control, formState: { isDirty, dirtyFields } } = useForm({
        defaultValues: {
            name: 'Alice',
            email: 'alice@example.com',
            phone: '+1234567890'
        }
    });



    return (
        <>
            <div className={`max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md ${isDirty ? 'border border-green-400' : 'border border-gray-200'
                }`}>
                {/* Name Field */}
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Name</label>
                    <input
                        {...register('name')}
                        className={`w-full p-3 border rounded-lg ${dirtyFields.name ? 'border-green-400 bg-green-50  outline-none' : 'border-gray-300'
                            }`}
                    />
                    {dirtyFields.name && (
                        <span className="text-green-600 text-sm mt-1">Unsaved changes</span>
                    )}
                </div>

                {/* Email Field */}
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Email</label>
                    <input
                        {...register('email')}
                        className={`w-full p-3 border rounded-lg ${dirtyFields.email ? 'border-green-400 bg-green-50 outline-none' : 'border-gray-300'
                            }`}
                    />
                    {dirtyFields.email && (
                        <span className="text-green-600 text-sm mt-1">Unsaved changes</span>
                    )}
                </div>

                {/* Save Button */}
                <button
                    type="submit"
                    disabled={!isDirty}
                    className={`w-full py-3 rounded-lg font-bold ${isDirty
                        ? 'bg-green-500 hover:bg-green-600 text-white'
                        : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                        }`}
                >
                    Save Changes
                </button>
            </div>
            <DevTool control={control} />
        </>
    );
};

export default ProfileForm;
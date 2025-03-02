import { useEffect } from "react";
import { useForm } from "react-hook-form";

function SubscriptionForm() {
    const { register, watch, trigger, handleSubmit, formState: { errors } } = useForm();
    const subscribe = watch('subscribe');

    useEffect(() => {
        if (subscribe) {
            trigger('email'); // Trigger validation when email field appears
            // trigger('name'); // Trigger validation when name field appears
        }
    }, [subscribe, trigger]);

    const onSubmit = async (data) => {
        const isValid = await trigger(); // Validate all fields before submission
        console.log('Form valid:', isValid);

        console.log('Form submitted:', data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="p-4 space-y-4">
            <label className="flex items-center space-x-2">
                <input
                    type="checkbox"
                    {...register('subscribe')}
                    className="w-4 h-4"
                />
                <span>Subscribe to newsletter</span>
            </label>

            {subscribe && (
                <>
                    <input
                        {...register('email', {
                            required: 'Email is required',
                            pattern: {
                                value: /^\S+@\S+$/i,
                                message: 'Invalid email address',
                            },
                        })}
                        className="w-full p-2 border rounded mb-5"
                        placeholder="Email"
                    />
                    {errors.email && (
                        <span className="text-red-500 text-sm">{errors.email.message}</span>
                    )}
                    <input
                        {...register('name', {
                            required: 'Name is required',
                        })}
                        className="w-full p-2 border rounded"
                        placeholder="Name"
                    />
                    {errors.name && (
                        <span className="text-red-500 text-sm">{errors.name.message}</span>
                    )}
                </>
            )}

            <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
                Submit
            </button>
        </form>
    );
}

export default SubscriptionForm;
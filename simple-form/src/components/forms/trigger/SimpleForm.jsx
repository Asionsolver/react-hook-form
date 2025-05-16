import { useForm } from 'react-hook-form';

function SimpleForm() {
    const { register, trigger, formState: { errors } } = useForm();

    // console.log(trigger);

    const handleClick = async () => {
        const isValid = await trigger();
        console.log('Form valid:', isValid);
    };

    return (
        <div className="p-4 space-y-4">
            <input
                {...register('firstName', { required: true })}
                className="w-full p-2 border rounded"
                placeholder="First Name"
            />
            {errors.firstName && (
                <span className="text-red-500 text-sm">This field is required</span>
            )}

            <button
                onClick={handleClick}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
                Validate Now
            </button>
        </div>
    );
}

export default SimpleForm;
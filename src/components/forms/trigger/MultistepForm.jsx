import { useState } from "react";
import { useForm } from "react-hook-form";

function MultiStepForm() {
    const { register, trigger, handleSubmit } = useForm();
    const [step, setStep] = useState(1);

    const handleNext = async () => {
        const isValid = await trigger(['firstName', 'lastName']);
        if (isValid) setStep(2);
    };

    return (
        <form
            onSubmit={handleSubmit(console.log)}
            className="p-4 space-y-4 max-w-md mx-auto"
        >
            {step === 1 && (
                <>
                    <input
                        {...register('firstName', { required: true })}
                        className="w-full p-2 border rounded"
                        placeholder="First Name"
                    />
                    <input
                        {...register('lastName', { required: true })}
                        className="w-full p-2 border rounded"
                        placeholder="Last Name"
                    />
                    <button
                        type="button"
                        onClick={handleNext}
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                        Next
                    </button>
                </>
            )}

            {step === 2 && (
                <>
                    <input
                        {...register('email', { required: true })}
                        className="w-full p-2 border rounded"
                        placeholder="Email"
                    />
                    <button
                        type="submit"
                        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                    >
                        Submit
                    </button>
                </>
            )}
        </form>
    );
}

export default MultiStepForm;
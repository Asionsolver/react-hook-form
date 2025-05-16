import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SimpleForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    toast.success("Form submitted successfully!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
      >
        <div className="mb-4">
          <label
            htmlFor="firstName"
            className="block text-gray-700 font-bold mb-2"
          >
            First Name
          </label>
          <input
            {...register("firstName", { required: "First Name is required" })}
            id="firstName"
            placeholder="First Name"
            className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 ${
              errors.firstName
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:ring-blue-500"
            }`}
          />
          {errors.firstName && (
            <span className="text-red-500 text-sm mt-1">
              {errors.firstName.message}
            </span>
          )}
        </div>

        <div className="mb-6">
          <label
            htmlFor="lastName"
            className="block text-gray-700 font-bold mb-2"
          >
            Last Name
          </label>
          <input
            {...register("lastName", { required: "Last Name is required" })}
            id="lastName"
            placeholder="Last Name"
            className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 ${
              errors.lastName
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:ring-blue-500"
            }`}
          />
          {errors.lastName && (
            <span className="text-red-500 text-sm mt-1">
              {errors.lastName.message}
            </span>
          )}
        </div>
        <div className="mb-6">
          <label htmlFor="age" className="block text-gray-700 font-bold mb-2">
            Age
          </label>
          <input
            {...register("age", {
              required: "Age is required",
              min: { value: 18, message: "You must be at least 18 years old" },
              max: { value: 99, message: "You must be under 100 years old" },
            })}
            placeholder="Age"
            type="number"
            className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 ${
              errors.age
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:ring-blue-500"
            }`}
          />
          {errors.age && (
            <span className="text-red-500 text-sm mt-1">
              {errors.age.message}
            </span>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Submit
        </button>
      </form>

      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
}

export default SimpleForm;

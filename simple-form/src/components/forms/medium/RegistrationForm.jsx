import { useForm } from "react-hook-form";

export const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <form
        className="flex flex-col space-y-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          className="border-2 border-gray-300 p-2"
          {...register(
            "username",

            {
              required: "Username is required",
              maxLength: {
                value: 15,
                message: "Username must not exceed 15 characters",
              },
              minLength: {
                value: 3,
                message: "Username must be at least 3 characters",
              },
            }
          )}
          placeholder="Username"
        />
        {errors.username && (
          <span className="text-red-500">{errors.username.message}</span>
        )}

        <input
          className="border-2 border-gray-300 p-2"
          {...register("email", {
            required: "Email is required",
            // only accept @gmail addresses
            pattern: {
              value: /@gmail.com$/i,
              message: "Only @gmail addresses are accepted",
            },
          })}
          placeholder="Email"
        />
        {errors.email && (
          <span className="text-red-500">{errors.email.message}</span>
        )}

        <input
          className="border-2 border-gray-300 p-2"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
          })}
          placeholder="Password"
          type="password"
        />
        {errors.password && (
          <span className="text-red-500">{errors.password.message}</span>
        )}

        <button className="bg-blue-500 text-white p-2 rounded" type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

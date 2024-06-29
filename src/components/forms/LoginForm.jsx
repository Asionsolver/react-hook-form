import { useForm } from "react-hook-form";
import { Field } from "../Field";
import { FieldSet } from "../FieldSet";

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const user = {
      email: "x@example.com",
      password: "12345678",
    };

    const found = data.email === user.email && data.password === user.password;
    if (!found) {
      setError("root.random", {
        message: `User with email ${data.email} not found`,
        type: "random",
      });
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <form onSubmit={handleSubmit(onSubmit)}>
        <FieldSet label="Login Details">
          <Field label="Email" error={errors.email}>
            <input
              className={`border  p-2 w-[300px] rounded-md focus:outline-none focus:ring-2 focus:ring-purple-700 focus:border-transparent mt-2 ${
                errors.email
                  ? "border-red-500 focus:ring-red-500"
                  : "border-purple-600 focus:ring-purple-600"
              }`}
              type="email"
              id="email"
              name="email"
              placeholder="Enter email address"
              {...register("email", { required: " Email is required" })}
            />
          </Field>
          <Field label="Password" error={errors.password}>
            <input
              className={`border  p-2 w-[300px] rounded-md focus:outline-none focus:ring-2  focus:border-transparent mt-2 ${
                errors.password
                  ? "border-red-600 focus:ring-red-600"
                  : "border-purple-600 focus:ring-purple-600"
              }`}
              type="password"
              id="password"
              name="password"
              placeholder="Enter password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
                maxLength: {
                  value: 20,
                  message: "Password must not exceed 20 characters",
                },
              })}
            />
          </Field>
        </FieldSet>
        <div>
          {!!errors?.root?.random?.message && (
            <div className="text-red-500 text-md ml-2">
              {errors.root.random.message}
            </div>
          )}
        </div>

        <Field>
          <button
            className="bg-purple-600 text-white p-2 rounded-md mt-2 ml-2 w-[300px] focus:outline-none focus:ring-2 focus:ring-purple-700 focus:border-transparent"
            type="submit"
          >
            Login
          </button>
        </Field>
      </form>
    </div>
  );
};

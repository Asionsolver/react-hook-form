import { Controller, useFieldArray, useForm } from "react-hook-form";
import { Field } from "../Field";
import { FieldSet } from "../FieldSet";
import { NumberInput } from "./NumberInput";


export const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  const { fields, append, remove } = useFieldArray({
    name: "socials",
    control,
  });

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <form onSubmit={handleSubmit(onSubmit)}>
        <FieldSet label="Fill Your Details">
          <Field label="Name" error={errors.fname}>
            <input
              className={`border  p-2 w-[300px] rounded-md focus:outline-none focus:ring-2 focus:ring-purple-700 focus:border-transparent mt-2 ${
                errors.fname
                  ? "border-red-500 focus:ring-red-500"
                  : "border-purple-600 focus:ring-purple-600"
              }`}
              type="text"
              id="fname"
              name="fname"
              placeholder="Enter your full name"
              {...register("fname", { required: "Full name is required" })}
            />
          </Field>
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
          <Field label="Age" error={errors.age}>
            <Controller
              control={control}
              name="age"
              defaultValue={0}
              render={({ field: { ref, ...field } }) => (
                <NumberInput
                  id="age"
                  placeholder="Enter your age"
                  className={`border  p-2 w-[300px] rounded-md focus:outline-none focus:ring-2 focus:ring-purple-700 focus:border-transparent mt-2 ${
                    errors.age
                      ? "border-red-500 focus:ring-red-500"
                      : "border-purple-600 focus:ring-purple-600"
                  }`}
                  {...field}
                />
              )}
              rules={{
                max: {
                  value: 100,
                  message: "You must be at most 100 years old",
                },
              }}
            />
          </Field>
        </FieldSet>

        <FieldSet label="Social Media Links">
          {fields.map((field, index) => {
            return (
              <div
                className="flex items-center justify-between w-max"
                key={field.id}
              >
                <Field label="Social Media Name">
                  <input
                    className={`border  p-2 w-[200px] rounded-md focus:outline-none focus:ring-2 focus:ring-purple-700 focus:border-transparent mt-2 ${
                      errors.socials?.[index]?.name
                        ? "border-red-500 focus:ring-red-500"
                        : "border-purple-600 focus:ring-purple-600"
                    }`}
                    type="text"
                    id={`socials[${index}].name`}
                    name={`socials[${index}].name`}
                    placeholder="Enter social media name"
                    {...register(`socials[${index}].name`)}
                  />
                </Field>
                <Field label="Social Media Url">
                  <input
                    className={`border  p-2 w-[200px] rounded-md focus:outline-none focus:ring-2 focus:ring-purple-700 focus:border-transparent mt-2 ${
                      errors.socials?.[index]?.url
                        ? "border-red-500 focus:ring-red-500"
                        : "border-purple-600 focus:ring-purple-600"
                    }`}
                    type="text"
                    id={`socials[${index}].url`}
                    name={`socials[${index}].url`}
                    placeholder="Enter social media url"
                    {...register(`socials[${index}].url`)}
                  />
                </Field>
                <button
                  type="button"
                  onClick={() => {
                    remove(index);
                  }}
                  className="bg-red-600 text-white p-2 rounded-md mt-2 ml-2 w-[200px] text-xs focus:outline-none focus:ring-2 focus:ring-red-700 focus:border-transparent"
                >
                  Remove
                </button>
              </div>
            );
          })}

          <button
            type="button"
            onClick={() => {
              append({ name: "", url: "" });
            }}
            className="bg-purple-600 text-white p-2 rounded-md mt-2 ml-2 w-[200px] text-xs focus:outline-none focus:ring-2 focus:ring-purple-700 focus:border-transparent"
          >
            Add Social Media Account
          </button>
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
            Register
          </button>
        </Field>
      </form>
    </div>
  );
};

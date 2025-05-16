import {
  useForm,
  type Path,
  type RegisterOptions,
  type UseFormRegister,
} from "react-hook-form";

import type { HTMLInputTypeAttribute } from "react";
import { cn } from "@/lib/utils";

type FormData = {
  name: string;
  email: string;
  age: number;
};

export const BasicForm = () => {
  const form = useForm<FormData>({
    mode: "onChange",
  });
  const onSubmit = (data: FormData) => {
    alert(JSON.stringify(data));
  };

  const { errors, dirtyFields } = form.formState;

  return (
    <div>
      <h2 className="text-2xl font-bold">Basic Form</h2>
      <div className="flex flex-col gap-4 border border-gray-200 p-4">
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <TextField
            label="Name"
            type="text"
            name="name"
            placeholder="Enter your name"
            validation={{
              required: "Name is required",
              minLength: {
                value: 3,
                message: "Name must be at least 3 characters long",
              },
              maxLength: {
                value: 20,
                message: "Name must be at most 20 characters long",
              },
            }}
            hasError={!!errors.name}
            errorMessage={errors.name?.message}
            dirty={dirtyFields.name}
            register={form.register}
          />

          <TextField
            label="Email"
            type="email"
            name="email"
            placeholder="Enter your email"
            validation={{
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email address",
              },
            }}
            hasError={!!errors.email}
            errorMessage={errors.email?.message}
            dirty={dirtyFields.email}
            register={form.register}
          />
          <TextField
            label="Age"
            type="number"
            name="age"
            placeholder="Enter your age"
            validation={{
              required: "Age is required",
              min: {
                value: 1,
                message: "Age must be at least 1",
              },
              max: {
                value: 120,
                message: "Age must be at most 120",
              },
            }}
            hasError={!!errors.age}
            errorMessage={errors.age?.message}
            dirty={dirtyFields.age}
            register={form.register}
          />
          <button
            type="submit"
            className="border rounded-lg border-gray-300 p-2 mt-3"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

type textFieldProps = {
  label: string;
  type: HTMLInputTypeAttribute;
  name: Path<FormData>;
  placeholder?: string;
  validation?: RegisterOptions<FormData>;
  className?: string;
  hasError?: boolean;
  errorMessage?: string;
  dirty?: boolean;
  register: UseFormRegister<FormData>;
};

const TextField = ({
  label,
  type,
  name,
  placeholder,
  validation,
  className,
  hasError,
  errorMessage,
  dirty,
  register,
}: textFieldProps) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-gray-700">
        {label}
      </label>
      <input
        id={name}
        type={type}
        placeholder={placeholder}
        className={cn(
          "border rounded-lg border-gray-300 p-2",
          (hasError || dirty) && "border-red-500",
          className
        )}
        {...register(name, validation)}
      />

      {hasError && <span className="text-red-500 text-sm">{errorMessage}</span>}
    </div>
  );
};

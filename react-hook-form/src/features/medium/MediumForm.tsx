import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";

const FormSchema = z.object({
  name: z
    .string()
    .min(3, {
      message: "Name must be at least 3 characters long",
    })
    .max(50, {
      message: "Name must be 50 characters or less",
    }),
  title: z
    .string()
    .min(2, {
      message: "Title must be at least 2 characters long",
    })
    .max(10, {
      message: "Title must be 10 characters or less",
    }),
  email: z.string().email({
    message: "Invalid email address",
  }),
  secondaryEmail: z.union([
    z.string().email({
      message: "Invalid email address",
    }),
    z.string().optional(),
  ]),
  gender: z.enum(["male", "female", "other"], {
    message: "Invalid gender",
  }),

  skills: z
    .array(
      z.object({
        skill: z.string().min(2).max(100),
      })
    )
    .min(1, {
      message: "Please select at least one skill",
    }),
});

type formValue = z.infer<typeof FormSchema>;

type formProps = { initialValues?: formValue };

const MediumForm = ({ initialValues }: formProps) => {
  const form = useForm<formValue>({
    resolver: zodResolver(FormSchema),
    defaultValues: initialValues
      ? initialValues
      : {
          name: "",
          email: "",
          secondaryEmail: "",
          gender: "male",
          title: "",
          skills: [],
        },
  });

  const skills = useFieldArray({
    control: form.control,
    name: "skills",
  });

  const onSubmit = (data: formValue) => {
    alert(JSON.stringify(data));
  };

  return (
    <div className="p-4 min-w-full">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="">
                  <FormLabel className="text-white mt-2">Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter Your name"
                      {...field}
                      className="text-white"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem className="">
                  <FormLabel className="text-white mt-2">Title</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter Your title"
                      {...field}
                      className="text-white"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="">
                  <FormLabel className="text-white mt-2">Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter Your email"
                      {...field}
                      className="text-white"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="secondaryEmail"
              render={({ field }) => (
                <FormItem className="">
                  <FormLabel className="text-white mt-2">
                    Secondary Email
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter Your secondary email"
                      {...field}
                      className="text-white"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="gender"
              render={({ field }) => (
                <FormItem className="">
                  <FormLabel className="text-white mt-2">Gender</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex gap-4"
                    >
                      <div className="flex items-center space-x-2 text-white">
                        <RadioGroupItem
                          value="male"
                          id="gender-male"
                          className=""
                        />
                        <Label htmlFor="gender-male">Male</Label>
                      </div>
                      <div className="flex items-center space-x-2 text-white">
                        <RadioGroupItem value="female" id="gender-female" />
                        <Label htmlFor="gender-female">Female</Label>
                      </div>
                      <div className="flex items-center space-x-2 text-white">
                        <RadioGroupItem value="other" id="gender-other" />
                        <Label htmlFor="gender-other">Other</Label>
                      </div>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="skills"
              render={() => (
                <FormItem className="">
                  <FormLabel className="text-white mt-2">Skills</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={(value) => {
                        const skill = value.split(",");
                        skills.append({ skill: skill[0] });
                      }}
                      defaultValue={form.getValues("skills")[0]?.skill ?? ""}
                    >
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select a skill" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="React,React Native">
                          React
                        </SelectItem>
                        <SelectItem value="Angular">Angular</SelectItem>
                        <SelectItem value="Vue">Vue</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div>
            <Button
              type="submit"
              className="px-4 py-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-600"
            >
              Submit
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default MediumForm;

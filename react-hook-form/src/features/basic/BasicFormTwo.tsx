import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const schema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  age: z.coerce.number().min(18).max(120),
});

type FormData = z.infer<typeof schema>;

const BasicFormTwo = () => {
  const form = useForm<FormData>({
    resolver: zodResolver(schema),
  });
  const onSubmit = (data: FormData) => {
    console.log(data);
  };
  return (
    <div className="">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white mt-2">Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Your name"
                    {...field}
                    className="text-white"
                  />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white mt-2">Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Your email"
                    {...field}
                    className="text-white"
                  />
                </FormControl>
                <FormDescription>
                  This is your public display email.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="age"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white mt-2">Age</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Your age"
                    type="number"
                    {...field}
                    className="text-white"
                  />
                </FormControl>
                <FormDescription>
                  This is your public display age.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
          >
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default BasicFormTwo;

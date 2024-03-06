"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
// import { signIn } from "next-auth/react";
import axios from "axios"
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useRouter } from "next/navigation"

const formSchema = z.object({
  email: z.string().email({ message: "Enter a valid email address" }),
  name: z.string().min(3, { message: "Enter your name" }),
	password: z
		.string()
		.min(8, { message: "Password is too short" })
		.max(20, { message: "Password is too long" }),
});

type UserFormValue = z.infer<typeof formSchema>;

export default function UserAuthForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
 	const defaultValues = {
		email: "demo@gmail.com",
		name: "john",
		password: "",
	}
  const form = useForm<UserFormValue>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  const onSubmit = async (data: UserFormValue) => {
	// console.log(data)
    // axios
	// 		.post("/api/register", data)
	// 		.then(() => {
	// 			console.log("registered")
	// 			router.push("/api/auth/signin")
	// 		})
	// 		.catch((error: any) => {
	// 			console.log(error)
	// 		})
	// 		.finally(() => {
	// 			setLoading(false)
	// 		})
	try{
    await axios.post("/api/register", {
		name: data.name,
		email: data.email,
		password: data.password
	})
    // console.log(res)
	router.push(`/app/profiles/onBoarding`)
	}catch(error){
		console.log(error)
	}
    
  };

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          
          className="space-y-2 w-full"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Enter your email..."
                    disabled={loading}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
								control={form.control}
								name="name"
								render={({ field }) => (
									<FormItem>
										<FormLabel>name</FormLabel>
										<FormControl>
											<Input
												type="name"
												placeholder="Enter your name..."
												disabled={loading}
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
                            <FormField
								control={form.control}
								name="password"
								render={({ field }) => (
									<FormItem>
										<FormLabel>password</FormLabel>
										<FormControl>
											<Input
												type="password"
												placeholder="Enter your pass..."
												disabled={loading}
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
          <Button disabled={loading} className="ml-auto w-full" type="submit">
            SignUp
          </Button>
        </form>
      </Form>
      
     
    </>
  );
}

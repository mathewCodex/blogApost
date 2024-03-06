import ClientOnly from "@/components/ClientOnly";
// import { CreateAccount } from "./create-account";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"
import Link from "next/link";
import UserAuthForm from "@/components/forms/user-authform";
export default function SignInPage() {
	return (
		// <main className="grid h-screen place-content-center">
		//   <section>
		//     <CreateAccount />
		//   </section>
		// </main>
		<ClientOnly >
			<Card>


					<div className="lg:p-8">
			<div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
			      <CardHeader className="space-y-1">
				<CardTitle className="text-2xl">Create an Account</CardTitle>
				<CardDescription>Insert your credentials to signup</CardDescription>
			</CardHeader>
			   <CardContent className="grid gap-4">

				<UserAuthForm />
				<p className="px-8 text-center text-sm text-muted-foreground">
					By clicking continue, you agree to our{" "}
					<Link
						href="/terms"
						className="underline underline-offset-4 hover:text-primary"
					>
						Terms of Service
					</Link>{" "}
					and{" "}
					<Link
						href="/privacy"
						className="underline underline-offset-4 hover:text-primary"
					>
						Privacy Policy
					</Link>
					.
				</p>
			   </CardContent>
				
			</div>
		</div>
			</Card>
	</ClientOnly>
	);
}

import ClientOnly from "@/components/ClientOnly";
import { CreateAccount } from "./create-account";
import Link from "next/link";

export default function SignInPage() {
	return (
		// <main className="grid h-screen place-content-center">
		//   <section>
		//     <CreateAccount />
		//   </section>
		// </main>
		<ClientOnly >
		<div className="lg:p-8">
			<div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
			
				<CreateAccount />
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
			</div>
		</div></ClientOnly>
	);
}

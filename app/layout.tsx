import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/context/theme-provider"
import AuthProvider from "@/context/auth-provider"
import PostModal from "@/components/modals/post-modal"
import ClientOnly from "@/components/ClientOnly"
import { Toaster } from "@/components/ui/toaster";
import { ClerkProvider } from "@clerk/nextjs"
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
	title: "SMNK Blog Hub",
	description: "SMNK Blog app",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		 <ClerkProvider>

			<html lang="en">
			<body className={`${inter.className} relative bg-foreground/5`}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				> 

					<ClientOnly>
						<Toaster />
						<PostModal />
					</ClientOnly>
					<AuthProvider>{children}</AuthProvider>
				</ThemeProvider>
			</body>
		</html>
		 </ClerkProvider>
		
	)
}

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	typescript: {
		ignoreBuildErrors: true, // temp add for next-auth failded build issues
	},
	eslint: {
		dirs: ["utils"], // Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)
		// dirs: ["utils","app"],
	},
	// images: {
	// 	domains: ["lh3.googleusercontent.com", "res.cloudinary.com"],
	// },
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "lh3.googleusercontent.com",
			},
			 {
              protocol: 'https',
              hostname: 'img.clerk.com',
            },
			{
				protocol: "https",
				hostname: "res.cloudinary.com",
			},
			{
				protocol: "https",
				hostname: "uploadthing.com",
			},
			{
				protocol:"https",
				hostname: "utfs.io"
			}
		],
	},
	i18n: {
		locales: ["en"],
		defaultLocale: "en",
	},
}

module.exports = nextConfig

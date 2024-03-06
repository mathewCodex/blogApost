import { NextApiRequest, NextApiResponse } from "next"


import { authOptions } from "@/app/api/auth/[...nextauth]/route"

import { prisma } from "@/lib/prisma"
import { getServerSession } from "next-auth/next"

const serverAuth = async (req: NextApiRequest, res: NextApiResponse) => {
	const session = await getServerSession(req, res, authOptions)

	if (!session?.user?.email) {
		throw new Error("Not signed in")
	}

	const currentUser = await prisma.user.findUnique({
		where: {
			email: session.user.email,
		},
	})

	if (!currentUser) {
		throw new Error("Not signed in")
	}

	return { currentUser }
}

export default serverAuth

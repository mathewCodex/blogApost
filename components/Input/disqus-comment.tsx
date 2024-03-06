import { DiscussionEmbed } from "disqus-react"
import React from "react"

interface props {
	post: any
}
const DisqusComponent: React.FC<props> = ({ post }) => {
	const pageUrl = typeof window !== "undefined" ? window.location.href : ""
	const disqusConfig = {
		url: pageUrl,
		identifier: post.id,
		title: post.title,
	}
	return <DiscussionEmbed shortname="smnkblog" config={disqusConfig} />
}

export default DisqusComponent

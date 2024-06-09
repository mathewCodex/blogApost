"use client"
import { Story } from "@prisma/client"
import axios from "axios"
import Link from "next/link"
import { usePathname } from "next/navigation"
import React, { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { getuser } from "@/app/actions/User"
import { User } from "@clerk/nextjs/server"
Image

type Props = {
    stories:Story[]
    TotalDrafts?: number
    TotalPublished?:number
    TotalSaved?:number
}

const MyStoryPage = ({stories,TotalPublished}: Props) => {
    const pathname = usePathname()
    const path = pathname.split("/")[2]
    const router = useRouter()

    const EditStory = async (storyId:string) => {
        try {
            const response = await axios.patch("/api/editstory",{
                storyId
            })
            router.push(`/story/${response.data.id}`)
        } catch (error) {
            console.log("Error editing data")
        }
    }

    const MakeNewStory = async () => {
        try {
            const response = await axios.post("/api/new-story")
            router.push(`/story/${response.data.id}`)
            console.log(response)
        } catch (error) {   
            console.log("Error creating new story", error)
        }
    }

  return (
    <div className='max-w-[1000px] mx-auto mt-12'>
        <div className='flex items-center justify-between'>
            <h1 className='text-[42px] font-semibold'>My Stories</h1>
            <button onClick={MakeNewStory} className='bg-blue-600 hover:bg-blue-700 px-4 py-[6px] rounded-full text-white text-sm'>New Story+</button>
        </div>
        <div className='flex items-center space-x-6 border-b-[1px] mt-2'>
        
            <Link href='/me/published' className={`${path === "published"? "border-b-[1px] border-neutral-800 opacity-100":"opacity-60"} text-sm pb-4`}>published {TotalPublished}</Link>
          
        </div>
    
        {path==="published"  && (
            <div className='mt-5'>
                {stories.map((story) => {
                    const match = story.content?.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);
                    const stripHtmlTags = (htmlString:string) => {
                        return htmlString.replace(/<[^>]*>/g, "");
                    };

                    const h1Element = match ? match[1] : "";
                    const H1Element = stripHtmlTags(h1Element)
                    return(
                        <Link key={story.id} href={`/published/${story.id}`}>
                            <div className='py-5'>
                                <div className='text-xl font-semibold mb-5'>
                                    {H1Element}
                                </div>
                                <div className='flex items-center space-x-5'>
                                    <span className='text-sm opacity-60'>{new Date(story.updatedAt).toDateString()}</span>
                                    <button onClick={() => EditStory(story.id)} className='px-5 py-1 text-sm rounded-full bg-gray-500 text-white'>Edit</button>
                                </div>
                            </div>
                        </Link>
                    )
                })}
            </div>
        )}

      
    </div>
  )
}

export default MyStoryPage


export const AuthorDetail = ({story}:{story:Story}) => {
    const [user, setuser] = useState<User>()
    
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const User = await getuser(story.authorId)
                setuser(User)
            } catch (error) {
                console.log("Error getting user", error)
            }
        }

        fetchUser()
    }, [story])
    return(
        <div className='flex items-center space-x-2'>
            <Image className='rounded-full' src={user?.imageUrl ? user.imageUrl : "/no-image.jpg"} width={24} height={24} alt='User Image'/>
            <p className='text-sm'>{user?.firstName} {user?.lastName}. </p>
            <p className='text-sm opacity-60'>{new Date(story.updatedAt).toDateString().split(" ").slice(1, 4).join(" ")}</p>
        </div>
    )
}
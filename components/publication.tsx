"use client"
import Image from "next/image"

// components
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface Props {
    isPublished: boolean
}

const Publication = ({isPublished}: Props) =>{
    return (
        <div className="flex gap-2 flex-col sm:flex-row border border-gray-500 border-solid border-2 w-full border rounded-4">
            <div className="w-full h-40 sm:w-1/4 sm:h-auto relative border boder-purple-500">
                <Image
                    src="/xavier-von-erlach-sOC2EZu9Mqg-unsplash.jpg"
                    alt="publication image"
                    layout="fill"
                    className="object-cover w-full h-full"
                />
            </div>
            <div className="sm:w-3/4 p-4 flex flex-col gap-8 justify-between">
                <div>
                    {
                        isPublished ? 
                            <Badge variant="secondary" className=" bg-green-900">Published</Badge> :
                            <Badge variant="outline" className="text-red-300">Unpublished</Badge>
                            
                    }

                     <h3 className="scroll-m-20 mt-4 text-2xl font-semibold tracking-tight">What lorem?</h3>
                    <p className="text-justify leading-7 [&:not(:first-child)]:mt-6">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit ratione, nihil optio ea atque, doloribus, facere incidunt eius odio cupiditate dolores blanditiis sed voluptatum laborum modi perferendis quibusdam qui reiciendis? <a href="#" className="text-blue-300 cursor-pointer">...Read more</a>
                    </p>
                </div>
                <div className="flex justify-end gap-4 items-center">
                    {
                        isPublished ?
                        <Button className="bg-red-800 hover:bg-red-900 text-white">Unpublish</Button> :
                        <Button className="bg-green-800 hover:bg-green-900 text-white">Publish</Button> 
                    }
                    <Button>Edit</Button>
                </div>
            </div>
        </div>
    )
}

export default Publication
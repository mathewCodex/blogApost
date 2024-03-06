import axios from "axios";
import { env } from "@/env.mjs"

export const ImageUpload = async (formData: FormData) => {
    const file = formData.get("file") as File

    formData.append("upload_preset", `${env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}`)

    if(!file){
        throw new Error("Image not found to upload")
    }

    const cloudinaryUplaodUrl = `https://api.cloudinary.com/v1_1/${env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`


    try {
        const response = await axios.post(cloudinaryUplaodUrl, formData, {
            headers:{
                "Content-Type":"multipart/form-data"
            }
        })
        
        return response.data.url
    } catch (error) {
        console.log("Error uploading to cloudinary", error)
        throw error
    }
    
}
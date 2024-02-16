"use client"
import { useState } from "react";
import { createResume, generateResume } from "./controllers/resume_controller";
import Link from "next/link"
import { useRouter } from "next/navigation";


export default function Home() {
  const [loading,setLoading] = useState(false)
  const router = useRouter()
  return (
    <main className=" min-h-screen bg-white ">
      <div className=" py-52 bg-pink-200 w-screen flex flex-col justify-center items-center ">
        <div className="flex flex-col">
        <h1 className="text-5xl font-bold">Generate CV/Resume for free</h1>
        <p className="text-lg mt-4">Select one amongst 40+ templates, fill your informations and download PDF easyl</p>
        </div>
        <div onClick={()=>{
          createResume().then((data)=>{
            router.push(`/createResume/${data.uuid}`)
          })
        }} className="px-12 py-5 mt-14 cursor-pointer hover:scale-105
         rounded-full bg-green-600 text-lg transition-all text-center text-white font-bold">
          {loading?"Loading...":"Get started"}</div>
     
      </div>
     
    </main>
  );
}

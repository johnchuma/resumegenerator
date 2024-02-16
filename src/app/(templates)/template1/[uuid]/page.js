import { getResume } from "@/app/controllers/resume_controller";

const Page = async({params}) => {
  const resume = await getResume(params.uuid)
    
    return (<div>
        <div className="min-h-screen w-screen mx-auto shadow-3xl bg-white mt-12">
        <div className="grid grid-cols-12 gap-6">
            <div className=" col-span-4 text-white bg-slate-800 h-screen p-8">
               <h2 className="font-bold text-4xl uppercase mb-5">{resume.name}</h2>
               {[{data:resume.email,icon:<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
               stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25" />
                </svg>
                },
                {data:resume.phone,icon:<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
                },
                {data:resume.address,icon:<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} 
                stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>

                }


].map((item)=>{
                return <div className="flex space-x-2 mb-2 items-center">

                    {item.icon}
                    <div className="text-sm">
                    {item.data}
                    </div>
                    </div>
               })}
                <div className=" text-base mb-3 font-bold mt-8">SKILLS</div>
                {resume.Skills.map((item,key)=><div key={key}>
                <div className="text-sm mb-2">
                    {item.name}
                    </div>
                </div>)}
                <div className=" text-base mb-3 font-bold  mt-8">EDUCATION</div>
                {resume.Certificates.map((item,key)=><div key={key}>
                <div className="text-sm mb-2">
                    {item.certificate}
                    </div>
                </div>)}

                <div className=" text-base mb-3 font-bold  mt-8">LANGUAGE</div>
                {resume.Languages.map((item,key)=><div key={key}>
                <div className="text-sm mb-2">
                    {item.language}
                    </div>
                </div>)}
               
            </div>
            <div className=" col-span-8 p-8">
                <div className=" text-base mb-3 font-bold">WORK OBJECTIVE</div>
                <p className="text-sm">{resume.objective}</p>

                <div className=" text-base mb-3 font-bold mt-16">WORK HISTORY</div>
                {resume.Jobs.map((item,key)=><div className="mb-8" key={key}>
                    <div className="flex justify-between items-center">

                          <div>
                          <div className="text-lg">
                    {item.position}
                    </div>
                    <div className="text-sm">
                    {item.company}
                    </div>
                          </div>

                 <div className="text-sm">
                       From {item.from} to {item.to}
                    </div>

                    </div>
                    <div className="space-y-1 ms-3 mt-2">
                    {item.JobRoles.map((item,key)=><div key={key}>
                    <div className="text-sm flex space-x-2 space-y-1 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                     className="w-3 h-3">
  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
</svg>

                        <div>
                        {item.role} 
                        </div>
                    </div>
                
                </div>)}
                    </div>
                   
                </div>)}
            </div>

        </div>
    </div>
    </div>  );
}
 
export default Page;
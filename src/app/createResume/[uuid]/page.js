
"use client"
import { createCertificate, createJob, createJobRole, createLanguage, createSkill, deleteJob, getResume, updateResume } from "@/app/controllers/resume_controller";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Page = ({params}) => {
    const [resume,setResume] = useState()
    const [currentIndex,setCurrentIndex] = useState(0)

    const [loading,setLoading] = useState(false)
    const [showExperienceModal,setshowExperienceModal] = useState(false)
    const [showEducationModal,setshowEducationModal] = useState(false)
    const [showLanguageModal,setshowLanguageModal] = useState(false)
    const [showSkillModal,setshowSkillModal] = useState(false)
    const [showJobRoleModal,setshowJobRoleModal] = useState(false)
    const [selectedJob,setselectedJob] = useState(null)
    const router = useRouter()
    const [refresh,setRefresh] = useState(0)
    const uuid = params.uuid
     useEffect(()=>{
        getResume(uuid).then((data)=>{
            setResume(data)
        })
     },[refresh])
    return (resume&&<div className="min-h-screen bg-slate-100  relative ">
        <div className={`${showExperienceModal==true?"block":"hidden"} transition-all bg-black bg-opacity-40  w-screen h-screen flex items-center   absolute`}>
          <form onSubmit={(e)=>{
          e.preventDefault();
          setLoading(true)
          const data = {
           position:e.target.position.value,
           company:e.target.company.value,
           from:e.target.from.value,
           to:e.target.to.value,
           location:e.target.location.value,
          }
          createJob(uuid,data).then((data)=>{
             setRefresh(refresh+1)
             setLoading(false)
             setshowExperienceModal(false)
             e.target.position.value = "";
             e.target.company.value = "";
             e.target.from.value = "";
             e.target.to.value = "";
             e.target.location.value = "";

          })
       }} className="p-12 bg-white shadow-xl w-6/12 mx-auto"> 
       <div className="flex justify-between">
       <h1 className="font-bold mb-3 text-2xl">New experience</h1>
       <div onClick={()=>{
        setshowExperienceModal(false)
       }}>
 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>
       </div>
      

       </div>
          <div className="grid grid-cols-2 gap-6 ">
             <div className="flex flex-col space-y-2">
               <label className="">Position</label>
               <input name="position" type="text" className="w-full py-3 rounded-lg focus:border-pink-400 focus:ring-pink-400 border-slate-300"></input>
             </div>
             <div className="flex flex-col space-y-2">
               <label className="">Company name</label>
               <input name="company"  className="w-full py-3 rounded-lg focus:border-pink-400 focus:ring-pink-400 border-slate-300"></input>
             </div>
             <div className="flex flex-col space-y-2">
               <label className="">Worked from</label>
               <input name="from"  className="w-full py-3 rounded-lg focus:border-pink-400 focus:ring-pink-400 border-slate-300"></input>
             </div>
             <div className="flex flex-col space-y-2">
               <label className="">To</label>
               <input name="to"  className="w-full py-3 rounded-lg focus:border-pink-400 focus:ring-pink-400 border-slate-300"></input>
             </div>
             <div className="flex flex-col  space-y-2">
               <label className="">Company location </label>
               <input name="location"  className="w-full py-3 rounded-lg focus:border-pink-400 focus:ring-pink-400 border-slate-300"></input>
             </div>
           </div> 
           <button type="submit" className="py-5 px-8 w-72 flex justify-center bg-green-600 cursor-pointer text-white rounded-lg mt-8">
             {loading?"Adding...":"Add job"}
           </button>
       </form>
          </div>




        <div className={`${showEducationModal==true?"block":"hidden"} transition-all bg-black bg-opacity-40  w-screen h-screen flex items-center   absolute`}>
        <form onSubmit={(e)=>{
        e.preventDefault();
        setLoading(true)
        const data = {
        institute:e.target.institute.value,
        certificate:e.target.certificate.value,
        year:e.target.year.value,
        }
        createCertificate(uuid,data).then((data)=>{
        setRefresh(refresh+1)
        setLoading(false)
        e.target.institute.value = "";
        e.target.certificate.value = "";
        e.target.year.value = "";
        setshowEducationModal(false)

        })
        }} className="p-12 bg-white shadow-xl w-6/12 mx-auto">
             <div className="flex justify-between">
       <h1 className="font-bold mb-3 text-2xl">New certificate</h1>
       <div onClick={()=>{
        setshowEducationModal(false)
       }}>
 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>
       </div>
       </div>
        <div className="grid grid-cols-2 gap-6 ">
        <div className="flex flex-col space-y-2">
        <label className="">Institute</label>
        <input name="institute" type="text" className="w-full py-3 rounded-lg focus:border-pink-400 focus:ring-pink-400 border-slate-300"></input>
        </div>
        <div className="flex flex-col space-y-2">
        <label className="">Certificate</label>
        <input name="certificate" type="text" className="w-full py-3 rounded-lg focus:border-pink-400 focus:ring-pink-400 border-slate-300"></input>
        </div><div className="flex flex-col space-y-2">
        <label className="">Competion year</label>
        <input name="year" type="text" className="w-full py-3 rounded-lg focus:border-pink-400 focus:ring-pink-400 border-slate-300"></input>
        </div>
        </div> 
        <button type="submit" className="py-5 px-8 w-72 flex justify-center bg-green-600 cursor-pointer text-white rounded-lg mt-8">
        {loading?"Adding...":"Add certificate"}
        </button>
        </form>
        </div>
        
          
      <div className={`${showLanguageModal==true?"block":"hidden"} transition-all bg-black bg-opacity-40  w-screen h-screen flex items-center   absolute`}>
      <form onSubmit={(e)=>{
                e.preventDefault();
                setLoading(true)
                const data = {
                  language:e.target.language.value,
                  level:e.target.level.value,
                }
                createLanguage(uuid,data).then((data)=>{
                    setRefresh(refresh+1)
                    setLoading(false)
                    e.target.language.value = "";
                    e.target.level.value = "";
        setshowLanguageModal(false)

                })
              }} className="p-12 bg-white shadow-xl w-6/12 mx-auto">
                  <div className="flex justify-between">
       <h1 className="font-bold mb-3 text-2xl">New language</h1>
       <div onClick={()=>{
        setshowLanguageModal(false)
       }}>
 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>
       </div>
       </div>
                <div className="grid grid-cols-2 gap-6 ">
                    <div className="flex flex-col space-y-2">
                      <label className="">Language</label>
                      <input name="language" type="text" className="w-full py-3 rounded-lg focus:border-pink-400 focus:ring-pink-400 border-slate-300"></input>
                    </div>
                    <div className="flex flex-col space-y-2">
                      <label className="">Level</label>
                      <select name="level" type="text" className="w-full py-3 rounded-lg focus:border-pink-400 focus:ring-pink-400 border-slate-300">
                          <option value="Conversational">Convesational</option>
                          <option value="Good">Good</option>
                          <option value="Very good">Very good</option>
                      </select>
                    </div>
                  </div> 
                  <button type="submit" className="py-5 px-8 w-72 flex justify-center bg-green-600 cursor-pointer text-white rounded-lg mt-8">
                    {loading?"Adding...":"Add skill"}
                  </button>
              </form>
    </div>
    <div className={`${showSkillModal==true?"block":"hidden"} transition-all bg-black bg-opacity-40  w-screen h-screen flex items-center   absolute`}>
    <form onSubmit={(e)=>{
          e.preventDefault();
          setLoading(true)
          const data = {
           name:e.target.name.value,
  
          }
          createSkill(uuid,data).then((data)=>{
             setRefresh(refresh+1)
             setLoading(false)
             e.target.name.value = "";
        setshowSkillModal(false)

          })
       }} className="p-12 bg-white shadow-xl w-6/12 mx-auto">
          <div className="flex justify-between">
       <h1 className="font-bold mb-3 text-2xl">New skill</h1>
       <div onClick={()=>{
        setshowSkillModal(false)
       }}>
 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>
       </div>
       </div>
          <div className="grid grid-cols-2 gap-6 ">
             <div className="flex flex-col space-y-2">
               <label className="">Skill name</label>
               <input name="name" type="text" className="w-full py-3 rounded-lg focus:border-pink-400 focus:ring-pink-400 border-slate-300"></input>
             </div>
             
           </div> 
           <button type="submit" className="py-5 px-8 w-72 flex justify-center bg-green-600 cursor-pointer text-white rounded-lg mt-8">
             {loading?"Adding...":"Add skill"}
           </button>
       </form>
    </div>


    <div className={`${showJobRoleModal==true?"block":"hidden"} transition-all bg-black bg-opacity-40  w-screen h-screen flex items-center   absolute`}>
    <form onSubmit={(e)=>{
          e.preventDefault();
          setLoading(true)
          const data = {
           role:e.target.role.value,
  
          }
          createJobRole(selectedJob.uuid,data).then((data)=>{
             setRefresh(refresh+1)
             setLoading(false)
             e.target.role.value = "";
        setshowJobRoleModal(false)

          })
       }} className="p-12 bg-white shadow-xl w-6/12 mx-auto">
          <div className="flex justify-between">
       <h1 className="font-bold mb-3 text-2xl">New role</h1>
       <div onClick={()=>{
        setshowJobRoleModal(false)
       }}>
 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>
       </div>
       </div>
          <div className="grid grid-cols-1 gap-6 ">
             <div className="flex flex-col space-y-2">
               <label className="">Role</label>
               <textarea name="role" type="text" 
               className="w-full py-3 rounded-lg focus:border-pink-400 focus:ring-pink-400 border-slate-300">

               </textarea>
             </div>
             
           </div> 
           <button type="submit" className="py-5 px-8 w-72 flex justify-center bg-green-600 cursor-pointer text-white rounded-lg mt-8">
             {loading?"Adding...":"Add role"}
           </button>
       </form>
    </div>

       
      <div className="w-11/12 mx-auto py-24">
      <div className="flex justify-between mb-16">
                <h1 className="text-4xl font-bold ">
                    Fill informations for your resume
                </h1>
                <button onClick={()=>{
                    router.push(`/resume/${uuid}`)
                }} className="text-pink-500 font-bold ">Preview</button>
            </div>
        <div className="grid grid-cols-5">
          {[
            {title:"Primary details",icon:<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
            className="w-6 h-6 ">
           <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
         </svg>},
            {title:"Experience",icon:<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
          </svg>
          },
            {title:"Education",icon:<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
          </svg>
          },
            {title:"Skills",icon:<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.05 4.575a1.575 1.575 0 1 0-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 0 1 3.15 0v1.5m-3.15 0 .075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 0 1 3.15 0V15M6.9 7.575a1.575 1.575 0 1 0-3.15 0v8.175a6.75 6.75 0 0 0 6.75 6.75h2.018a5.25 5.25 0 0 0 3.712-1.538l1.732-1.732a5.25 5.25 0 0 0 1.538-3.712l.003-2.024a.668.668 0 0 1 .198-.471 1.575 1.575 0 1 0-2.228-2.228 3.818 3.818 0 0 0-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0 1 16.35 15m.002 0h-.002" />
          </svg>
          },
            {title:"Languages",icon:<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802" />
          </svg>
          },     
        ].map((item,key)=>{
            return <div key={key} onClick={()=>{
              setCurrentIndex(key)
            }} className={`flex cursor-pointer flex-col items-center justify-center py-8 px-4 
            ${currentIndex == key ?"bg-indigo-600 text-white":"bg-white text-gray-500"} border border-slate-100 rounded  `}>
            {item.icon}
            <h1 className="font-bold mt-3">
              {item.title}
            </h1>
            </div>
          })}
          
        </div>
        <div className="bg-white py-12 px-12 mt-1 ">
        {currentIndex == 0 &&
          <form onSubmit={(e)=>{
            e.preventDefault();
            setLoading(true)
            const data = {
             name:e.target.name.value,
             email:e.target.email.value,
             phone:e.target.phone.value,
             address:e.target.address.value,
             objective:e.target.objective.value,
            }
            updateResume(uuid,data).then((data)=>{
               setRefresh(refresh+1)
               setLoading(false)
            })
         }} className="">
 
            
            <div className="grid grid-cols-4 gap-6 ">
               <div className="flex flex-col space-y-2">
                 <label className="">Full name</label>
                 <input name="name" defaultValue={resume.name} type="text" className="w-full py-3 rounded-lg focus:border-pink-400 focus:ring-pink-400 border-slate-300"></input>
               </div>
               <div className="flex flex-col space-y-2">
                 <label className="">Email address</label>
                 <input name="email" defaultValue={resume.email} type="email" className="w-full py-3 rounded-lg focus:border-pink-400 focus:ring-pink-400 border-slate-300"></input>
               </div>
               <div className="flex flex-col space-y-2">
                 <label className="">Phone number</label>
                 <input name="phone" defaultValue={resume.phone} type="tel" className="w-full py-3 rounded-lg focus:border-pink-400 focus:ring-pink-400 border-slate-300"></input>
               </div>
               <div className="flex flex-col space-y-2">
                 <label className="">Your address</label>
                 <input name="address" defaultValue={resume.address} className="w-full py-3 rounded-lg focus:border-pink-400 focus:ring-pink-400 border-slate-300"></input>
               </div>
               <div className="flex flex-col col-span-4 space-y-2">
                 <label className="">Carrer objective/introduction </label>
                 <textarea name="objective" defaultValue={resume.objective} className="w-full py-3 rounded-lg focus:border-pink-400 focus:ring-pink-400 border-slate-300"></textarea>
               </div>
             </div> 
             <button type="submit" className="py-5 px-8 w-72 flex justify-center bg-green-600 cursor-pointer text-white rounded-lg mt-8">
               {loading?"Saving...":"Save Changes"}
             </button>
         </form>
          }
        


        {currentIndex==1&&
        <div>
          <div className="flex justify-between mb-4">
            <h1 className="text-3xl">Work experience list</h1>
            <div className="font-bold cursor-pointer text-indigo-600" onClick={()=>{
              setshowExperienceModal(true)
            }}>Add</div>
          </div>
          {
            resume.Jobs.map((item,index)=>{
              return <div className="py-2 border px-4" key={index}>
                <div className="flex justify-between">
                  <div>
                  <h1 className="text-lg">{item.position} at {item.company}</h1>
                <p className="text-gray-500">
                  From {item.from} to {item.to}

                </p>
                  </div>
                  <button onClick={()=>{
                      deleteJob(item.uuid).then(()=>{
                        setRefresh(refresh+1)
                      })
                  }}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                  </svg>
                  </button>
                </div>


                <div className="flex justify-between mb-4 mt-8">
            <h1 className="text-xl">Job roles</h1>
            <div className="font-bold cursor-pointer text-indigo-600" onClick={()=>{
              setselectedJob(item)
              setshowJobRoleModal(true)
            }}>Add</div>
          </div>
          {
            item.JobRoles.map((item,index)=>{
              return <div className="py-2 border px-4" key={index}>
                <div className="flex justify-between">
                  <div>
                  <h1 className="text-lg">{item.role}</h1>
                
                  </div>
                  <button onClick={()=>{
                      deleteJob(item.uuid).then(()=>{
                        setRefresh(refresh+1)
                      })
                  }}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                  </svg>
                  </button>
                </div>
               
              </div>
            })
          }
              </div>
            })
          }
        </div>
         
        }
       

       {currentIndex == 2 &&
        <div>
          <div>
          <div className="flex justify-between mb-4">
            <h1 className="text-3xl">Education certificates</h1>
            <div className="font-bold cursor-pointer text-indigo-600" onClick={()=>{
              setshowEducationModal(true)
            }}>Add</div>
          </div>
          {
            resume.Certificates.map((item,index)=>{
              return <div className="py-2 border px-4" key={index}>
                <div className="flex justify-between">
                  <div>
                  <h1 className="text-lg">{item.certificate} at {item.institute}</h1>
                <p className="text-gray-500">
                  Certicified at {item.year} 

                </p>
                  </div>
                  <button onClick={()=>{
                      deleteJob(item.uuid).then(()=>{
                        setRefresh(refresh+1)
                      })
                  }}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                  </svg>
                  </button>
                </div>
               
              </div>
            })
          }
        </div>
        </div>
       }
       


      {currentIndex == 3 &&
        <div>
          <div>
          <div className="flex justify-between mb-4">
            <h1 className="text-3xl">Skills</h1>
            <div className="font-bold cursor-pointer text-indigo-600" onClick={()=>{
              setshowSkillModal(true)
            }}>Add</div>
          </div>
          {
            resume.Skills.map((item,index)=>{
              return <div className="py-2 border px-4" key={index}>
                <div className="flex justify-between">
                  <div>
                  <h1 className="text-lg">{item.name}</h1>
                
                  </div>
                  <button onClick={()=>{
                      deleteJob(item.uuid).then(()=>{
                        setRefresh(refresh+1)
                      })
                  }}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                  </svg>
                  </button>
                </div>
               
              </div>
            })
          }
        </div>
        </div>
      }
        
      {currentIndex == 4 &&
      <div>
        <div>
          <div className="flex justify-between mb-4">
            <h1 className="text-3xl">Languages</h1>
            <div className="font-bold cursor-pointer text-indigo-600" onClick={()=>{
              setshowLanguageModal(true)
            }}>Add</div>
          </div>
          {
            resume.Languages.map((item,index)=>{
              return <div className="py-2 border px-4" key={index}>
                <div className="flex justify-between">
                  <div>
                  <h1 className="text-lg">{item.language}</h1>
                <p className="text-gray-500">
                 Skill level {item.level}
                </p>
                  </div>
                  <button onClick={()=>{
                      deleteJob(item.uuid).then(()=>{
                        setRefresh(refresh+1)
                      })
                  }}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                  </svg>
                  </button>
                </div>
               
              </div>
            })
          }
        </div>
      </div>
      }
        </div>
       
        
      </div>
       
      
    </div>  );
}
 
export default Page;
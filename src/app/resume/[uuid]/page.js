import { getResume } from "@/app/controllers/resume_controller";

const resume =async({params}) => {
  const resume = await getResume(params.uuid)
    return ( <div className="bg-slate-100 py-24">
        <div className="flex justify-between w-11/12 mx-auto">
            <h1 className="text-4xl font-bold">Preview</h1>
            <div className="py-5 px-12 rounded-full bg-green-600 text-white">Download PDF</div>
        </div>
        <div className="w-6/12 mx-auto">
            
        </div>
    </div>
     );
}
 
export default resume;
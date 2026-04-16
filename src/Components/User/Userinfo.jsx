import { useParams } from "react-router";
import { useLoaderData } from "react-router";
import { FiArchive } from "react-icons/fi";
import { RiNotificationSnoozeLine } from "react-icons/ri";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiPhoneCall } from "react-icons/fi";
import { BiMessageDots } from "react-icons/bi";
import { MdOutlineVideocam } from "react-icons/md";
import { useContext } from "react";
import { toast } from "react-toastify";
import { TimelineContext } from "../../Custom/TimelineContext";
import { ToastContainer } from "react-toastify";
const Userinfo = () => {
  
const { addTimeline } = useContext(TimelineContext);
console.log(addTimeline)
 const { id } = useParams()
    const userAllData = useLoaderData();
   const selectedUser = userAllData.find(el=> el.id == id)
   console.log(selectedUser)
   const handleAction = (type) => {
        toast.success(`${type} successful!`)

  const newItem = {
    id: Date.now(),
    type: type,
    name: selectedUser.name,
    date: new Date().toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }),
  };

  addTimeline(newItem);
};
 <ToastContainer />
  return (
    <div className="w-11/12 mx-auto flex flex-col md:flex-row justify-center gap-6">
      <div className="leftContent w-96 mx-auto md:mx-0">
          <div className="User-Info text-center my-6 py-3.5 rounded-2xl shadow">
          <div>
            <img className="rounded-full inline-block" src={selectedUser.picture} ></img>
            </div>
                <h1 className="text-2xl font-semibold">{selectedUser.name}</h1>
                {selectedUser.tags.map((tag, index) => (
                <span key={index} class="badge py-3 px-3 bg-[#cafada] text-[#244d3f] mr-3 rounded-full font-semibold my-4 ">{tag}</span>
            ))} <br/>
              <span className = {` ${selectedUser.status === 'almost due' && 'bg-[#f0ae43] text-white px-4 py-1 rounded-full font-medium'} ${selectedUser.status === 'overdue' && 'bg-red-500 text-white px-4 py-1 rounded-full font-medium'} ${selectedUser.status === 'on-track' && 'bg-[#244d3f] text-white px-4 py-1 rounded-full font-medium'} w-fit`}>{selectedUser.status}</span>
              <h1 className = "text-sm font-semibold italic mt-4 ">"{selectedUser.bio}"</h1>
          </div>
          <div>
          <button className="btn font-bold mb-6 w-full bg-white"><RiNotificationSnoozeLine /> Snooze 2 weeks</button> 
          </div>
          <div>
          <button className="btn font-bold mb-6 w-full bg-white"><FiArchive /> Archive</button>
          </div>
          <div>
          <button className="btn font-bold mb-6 w-full bg-white text-red-500"><RiDeleteBin6Line /> Delete</button>
          </div>
      </div>
      <div className="rightContent my-6">
        <div className="Cards grid grid-cols-3 gap-6">
            <div className="rounded-2xl shadow text-center py-8 px-4">
              <h1 className="text-4xl font-semibold text-[#244D3F]">{selectedUser.days_since_contact}</h1>
              <p className="text-[18px] text-[#64748B]">Days Since Contact</p>
            </div>
            <div className="rounded-2xl shadow text-center py-8 px-4">
              <h1 className="text-4xl font-semibold text-[#244D3F]">{selectedUser.goal}</h1>
              <p className="text-[18px] text-[#64748B]">Goal (Days)</p>
            </div>
            <div className="rounded-2xl shadow text-center py-8 px-4">
              <h1 className="text-4xl font-semibold text-[#244D3F]">{selectedUser.next_due_date}</h1>
              <p className="text-[18px] text-[#64748B]">Next Due</p>
            </div>
        </div>
        <div className="w-full rounded-2xl shadow p-6 mt-6">
            <div className="flex justify-between">
              <h1 className="text-[20px] font-bold text-[#244D3F]">Relationship Goal</h1>
              <button className="btn">Edit</button>
            </div>
            <h1 className="text-[18px] text-[#64748B]">Connect every <span className="font-bold text-[#1F2937]">30 days</span> </h1>
        </div>
        <div className="w-full rounded-2xl shadow p-6 mt-6">
            <h1 className = "text-[#244D3F] text-[20px] font-medium mb-4">Quick Check-In</h1>
            <div className="grid grid-cols-3 gap-4">
            <button onClick={()=> handleAction("Call")} className="btn text-[20px] py-20 flex"><div className="flex flex-col items-center"> <FiPhoneCall /> <h1>Call</h1></div></button>
            <button onClick={()=> handleAction("Text")} className="btn text-[20px] py-20"><div className="flex flex-col items-center"><BiMessageDots /> <h1>Text</h1> </div></button>
            <button onClick={()=> handleAction("Video")} className="btn text-[20px] py-20"><div className="flex flex-col items-center"><MdOutlineVideocam /> <h1>Video</h1> </div></button>
            </div>
        </div>
      </div>
    </div>
  )
  
}


export default Userinfo

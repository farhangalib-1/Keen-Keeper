import { FaPlus } from "react-icons/fa";
const Home = () => {
  return (
    <div>
      <div className="topsection mt-20 text-center">
        <h1 className="text-5xl font-bold mb-4">Friends to keep close in your life</h1>
        <p className="text-[16px] text-[#64748B] mb-8">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />
          relationships that matter most.
        </p>
        <button className="btn bg-[#244d3f] text-white"> <FaPlus /> Add a Friend</button>
      </div>
      <div className="all-Cards w-10/12 mx-auto mt-20 flex justify-center flex-wrap pb-10 mb-10 border-b border-gray-300 gap-6">
        <div className="card w-70 bg-base-100 card-sm shadow-sm py-10">
  <div className="card-body text-center">
    <h2 className=" font-semibold text-5xl text-[#244d3f]">10</h2>
    <p className="text-[#64748B] text-sm">total Friends</p>
    
  </div>
        </div>
        <div className="card w-70 bg-base-100 card-sm shadow-sm py-10">
  <div className="card-body text-center">
    <h2 className=" font-semibold text-5xl text-[#244d3f]">3</h2>
    <p className="text-[#64748B] text-sm">On track</p>
    
  </div>
        </div>
        <div className="card w-70 bg-base-100 card-sm shadow-sm py-10">
  <div className="card-body text-center">
    <h2 className=" font-semibold text-5xl text-[#244d3f]">6</h2>
    <p className="text-[#64748B] text-sm">Need Attention</p>
  </div>
        </div>
        <div className="card w-70 bg-base-100 card-sm shadow-sm py-10">
  <div className="card-body text-center">
    <h2 className=" font-semibold text-5xl text-[#244d3f]">12</h2>
    <p className="text-[#64748B] text-sm">Interactions This Month</p>
    
  </div>
        </div>
      </div>
    </div>
  )
}

export default Home

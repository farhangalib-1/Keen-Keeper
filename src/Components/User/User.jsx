import { Link } from "react-router";
const User = ({ user }) => {
  return (
    <div>
<Link to={`user/${user.id}`} class={`relative bg-neutral-primary-soft max-w-xs w-full p-6 rounded-2xl rounded-base shadow`}>
       
    <div class="flex flex-col items-center">
        <img class="w-24 h-24 mb-6 rounded-full" src={user.picture} alt={user.name}/>
        <h5 class="mb-0.5 text-2xl font-bold tracking-tight text-heading">{user.name}</h5>
        <span class="text-sm text-body text-[#64748B] font-medium">{user.days_since_contact}d ago</span>
        <div class="mt-4 md:mt-6 gap-4">
            {user.tags.map((tag, index) => (
                <span key={index} class="badge py-3 px-3 bg-[#cafada] text-[#244d3f] mr-3 rounded-full font-semibold">{tag}</span>
            ))}
        <div className="flex justify-center">
        <span class = {` ${user.status === 'almost due' && 'bg-[#f0ae43] text-white px-4 py-1 rounded-full font-medium'} ${user.status === 'overdue' && 'bg-red-500 text-white px-4 py-1 rounded-full font-medium'} ${user.status === 'on-track' && 'bg-[#244d3f] text-white px-4 py-1 rounded-full font-medium'} mt-2 flex justify-center w-fit`}>{user.status}</span></div>
        </div>
    </div>
</Link>

    </div>
  )
}

export default User

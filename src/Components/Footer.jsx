import logo from '../assets/logo-xl.png'
import facebook from '../assets/facebook.png'
import twitter from '../assets/twitter.png'
import instagram from '../assets/instagram.png'
const Footer = () => {
  return (
    <div>
      <footer className="footer footer-horizontal footer-center bg-[#244d3f] text-primary-content p-10">
  <aside>
    <img src={logo} alt="Logo" />
    <p className="font-normal text-[16px] text-[#d6dade] mb-8">
      Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
    </p>
    <p className='text-xl font-semibold'>Social Links</p>
  </aside>
  <nav>
    <div className="grid grid-flow-col gap-4">
      <a>
        <img src={instagram} alt="Instagram" />
      </a>
      <a>
        <img src={facebook} alt="Facebook" />
      </a>
      <a>
        <img src={twitter} alt="Twitter" />
      </a>
      
    </div>
  </nav>
  

<footer class="w-full p-4 bg-neutral-primary-soft border-t md:flex md:items-center md:justify-between md:p-6">
    <span class="text-sm text-body sm:text-center">© <a href="https://flowbite.com/" class="hover:underline"> 2026 KeenKeeper</a>. All Rights Reserved.
    </span>
    <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-body sm:mt-0">
        <li>
            <a href="#" class="hover:underline me-4 md:me-6">About</a>
        </li>
        <li>
            <a href="#" class="hover:underline me-4 md:me-6">Privacy Policy</a>
        </li>
        <li>
            <a href="#" class="hover:underline me-4 md:me-6">Licensing</a>
        </li>
        
    </ul>
</footer>

</footer>
    </div>
  )
}

export default Footer

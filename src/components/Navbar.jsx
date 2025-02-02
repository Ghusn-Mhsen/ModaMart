import { useState, useContext } from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false)
  const { setShowSearch, getTotalCount } = useContext(ShopContext);
  return (
    <div>
      <div className='flex items-center justify-between py-5 font-medium'>
        <Link to={'/'}> <img src={assets.logo} alt='Logo' className='w-36' /></Link>
        <ul className='hidden sm:flex gap-5 text-sm text-gray-700 '>
          <NavLink to='/' className='flex flex-col items-center gap-1'>
            <p>Home</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
          </NavLink>
          <NavLink
            to='/collections'
            className='flex flex-col items-center gap-1'
          >
            <p>Collections</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
          </NavLink>
          <NavLink to='/about' className='flex flex-col items-center gap-1'>
            <p>About</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
          </NavLink>
          <NavLink to='/contact' className='flex flex-col items-center gap-1'>
            <p>Contact</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
          </NavLink>
        </ul>

        <div className='flex items-center gap-5'>
          <img
            src={assets.search_icon}
            alt='search'
            className='w-5 cursor-pointer'
            onClick={() => setShowSearch(true)}
          />
          <div className='group relative'>
            <Link to="/login">  <img
              src={assets.profile_icon}
              alt='Profile'
              className='w-5 cursor-pointer'
            /></Link>
            <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
              <div className='flex flex-col  gap-2 w-36  bg-slate-100 text-gray-500 rounded'>
                <p className='cursor-pointer hover:text-black'>My Profile</p>
                <p className='cursor-pointer hover:text-black'>Orders</p>
                <p className='cursor-pointer hover:text-black'>Logout</p>
              </div>
            </div>
          </div>
          <Link to='/cart' className='relative'>
            <img src={assets.cart_icon} alt='cart' className='w-5 min-w-5' />
            <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>
              {getTotalCount()}
            </p>
          </Link>
          <img
            src={assets.menu_icon}
            alt='menu'
            className='w-5 cursor-pointer sm:hidden'
            onClick={() => setIsVisible(true)}
          />
        </div>
        {/* Sidebar menu  for small screens */}

        <div
          className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${isVisible ? 'w-full' : 'w-0'
            }`}
        >
          <div className='flex flex-col text-gray-600'>
            <div
              onClick={() => setIsVisible(false)}
              className='flex items-center gap-4 p-3  cursor-pointer'
            >
              <img
                src={assets.dropdown_icon}
                alt='dropdown'
                className='h-4 rotate-180'
              />
              <p>Back</p>
            </div>

            <NavLink
              onClick={() => setIsVisible(false)}
              className='py-2 pl-6 border'
              to='/'
            >
              Home
            </NavLink>
            <NavLink
              onClick={() => setIsVisible(false)}
              className='py-2 pl-6 border'
              to='/collections'
            >
              Collections
            </NavLink>
            <NavLink
              onClick={() => setIsVisible(false)}
              className='py-2 pl-6 border'
              to='/about'
            >
              About
            </NavLink>
            <NavLink
              onClick={() => setIsVisible(false)}
              className='py-2 pl-6 border'
              to='/contact'
            >
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar

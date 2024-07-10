import { useState } from "react";
import { hamburger, close, cart } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";

const Nav = ({ cartCount, handleCartClick }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <header className='padding-x py-8 bg-white sticky top-0 z-50 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <a href='/'>
          <img
            src={headerLogo}
            alt='logo'
            width={129}
            height={29}
            className='m-0 w-[129px] h-[29px]'
          />
        </a>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className='font-montserrat uppercase leading-normal text-lg text-slate-gray'
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        {/* <div className='flex text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24'>
          <a href='/'>Sign in</a>
        </div> */}
        <div className='relative cursor-pointer flex text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24'>
          <img src={cart} alt='cart'
            width={28} height={28}
            onClick={handleCartClick} />
          <span className='text-coral-red absolute top-0 right-0 transform -translate-y-1/2 translate-x-1/2 font-montserrat text-small leading-normal text-dark'>
            {cartCount}
          </span>
        </div>

        <div className='hidden max-lg:block'>
          <img src={toggle ? close : hamburger} alt='menu' width={28} height={28}
            onClick={() => setToggle((prev) => !prev)} />
          <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-coral-red absolute right-0 my-2 top-15 min-w-[140px] rounded-sm sidebar`}>
            <ul className='flex flex-1 flex-col justify-end items-end gap-6'>
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className='font-montserrat uppercase leading-normal font-bold text-lg text-white mb-4'>
                    {item.label}
                  </a>
                </li>
              ))}
              <li><a href='/' className='font-montserrat uppercase leading-normal font-bold text-lg text-white mb-4'>Sign in</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';
import { FiDownload } from 'react-icons/fi';


const Navbar = () => {
  const [active, setActive] = useState(""); // Initialize state for active link
  const [toggle, setToggle] = useState(false);
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-[999] bg-primary`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive(""); // Use setActive to reset the active link
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className='text-white text-[18px] font-bold cursor-pointer flex'> Noel Paul &nbsp; <span className='sm:block hidden font-extralight shadow-card'> |  Full Stack Engineer</span>
          </p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10 items-center'>
        <li>
    <a
      href="/Resume_Noel_Paul.pdf"
      download
      className="flex items-center gap-2 text-white bg-[#915EFF] hover:bg-[#7d4de5] px-4 py-2 rounded-lg text-[16px] font-semibold transition"
    >
      Download Resume <FiDownload className="text-lg" />
    </a>
  </li>

  {navLinks.slice(0, 1).map((navLink) => (
    <li
      key={navLink.id}
      className={`${
        active === navLink.title ? "text-white" : "text-secondary"
      } hover:text-white text-[18px] font-medium cursor-pointer`}
      onClick={() => setActive(navLink.title)}
    >
      <a href={`/#${navLink.id}`}>{navLink.title}</a>
    </li>
  ))}

  {/* Download Resume Button */}

  {navLinks.slice(1).map((navLink) => (
    <li
      key={navLink.id}
      className={`${
        active === navLink.title ? "text-white" : "text-secondary"
      } hover:text-white text-[18px] font-medium cursor-pointer`}
      onClick={() => setActive(navLink.title)}
    >
      <a href={`#${navLink.id}`}>{navLink.title}</a>
    </li>
  ))}
</ul>

          <div className='sm:hidden flex flex-1 justify-end items-start'>
            <img
            src={toggle?close:menu}
            alt="menu"
            className='w-[28px] height-[28px] object-contain cursor-pointer'
            onClick={()=> setToggle(!toggle)}
            ></img>
            <div className={`${!toggle?'hidden':'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className='list-none flex justify-end items-start flex-col gap-4'>
  {/* Download Resume in Mobile */}


  {navLinks.map((navLink) => (
    <li
      key={navLink.id}
      className={`${
        active === navLink.title ? "text-white" : "text-secondary"
      } font-poppins font-medium cursor-pointer text-[16px]`}
      onClick={() => {
        setToggle(!toggle);
        setActive(navLink.title);
      }}
    >
      <a href={`#${navLink.id}`}>{navLink.title}</a>
    </li>
  ))}
    <li>
    <a
      href="/Resume_Noel_Paul.pdf"
      download
      className="flex items-center gap-2 text-white bg-[#915EFF] hover:bg-[#7d4de5] px-4 py-2 rounded-lg text-[16px] font-semibold transition"
    >
      Download Resume <FiDownload className="text-lg" />
    </a>
  </li>
</ul>


            </div>

          </div>


      </div>
    </nav>
  );
};

export default React.memo(Navbar);

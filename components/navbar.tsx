
export default function Navbar(){
    return (

<nav className="flex flex-col lg:flex-row lg:justify-between items-center px-5 lg:px-10 xl:px-20 py-1 z-30 relative bg-transparent">
  <h1 className="text-3xl font-extrabold italic text-white-400 hover:text-red-300 transition duration-300 cursor-pointer">
    My Portfolio
  </h1>
  <ul className="flex flex-col lg:flex-row gap-4 lg:gap-10 items-center mt-4 lg:mt-0">
    <li>
      <a
        href="#Home"
        className="text-white-300  text-xs font-semibold &gt uppercase hover:text-blue-300 transition duration-300 "
      >
        Home
      </a>
    </li>
    <li>
      <a
        href="#about"
        className="text-white-300 text-xs font-semibold &gt uppercase hover:text-blue-300 transition duration-300 "
      >
        About
      </a>
    </li>
    <li>
      <a
        href="#contact"
        className="text-white-300 text-xs font-semibold &gt uppercase hover:text-blue-300 transition duration-300"
      >
        Contact
      </a>
    </li>
  </ul>
</nav>
    )
  }
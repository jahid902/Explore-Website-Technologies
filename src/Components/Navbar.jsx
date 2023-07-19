

import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="flex items-center tracking-wider font-bold">
        <h1 className="text-3xl text-white">
          Tech~
          <span className="text-sky-800 text-3xl">No</span>
          <span className="text-white text-3xl">~Logics</span>
        </h1>
        
      </div>

      <ul className="flex space-x-4 text-lg items-center">
        <li><NavLink to="/" className={({isActive})=> isActive? 'active':'default'}>Home</NavLink></li>
        <li><NavLink to="/" className={({isActive})=> isActive? 'active':'default'}>Explore</NavLink></li>
        <li><NavLink to="/" className={({isActive})=> isActive? 'active':'default'}>About Us</NavLink></li>
      </ul>

      <div>
        <button className="btn-common">Learn More</button>
      </div>
    </div>
  );
};

export default Navbar;
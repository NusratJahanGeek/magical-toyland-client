import { Link } from 'react-router-dom';
import logo from '../../../assets/Magical ToyLand Footer.png'
const NavBar = () => {
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown block md:hidden"> {/* Show only on mobile devices */}
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Homepage</a></li>
        <li><a>Portfolio</a></li>
        <li><a>About</a></li>
      </ul>
    </div>
    {/* Add menu links directly on the navbar */}
    <div className="navbar-menu ml-4 space-x-4 hidden md:flex">
      <Link to="/" className="btn btn-ghost">Home</Link>
      <Link to="/toys" className="btn btn-ghost">All Toys</Link>
      <Link to="/blogs" className="btn btn-ghost">Blogs</Link>
    </div>
  </div>
  <div className="navbar-center">
    <Link to="/"><img src={logo} alt="" width={100} height={100} /></Link>
  </div>
  <div className="navbar-end space-x-4 pr-12">
  <Link to="/" className="btn btn-ghost">Add A Toy</Link>
  <Link to="/" className="btn btn-ghost">My Toys</Link>
  <Link to="/login" className="btn btn-ghost">Login</Link>
  </div>
</div>

      
    );
};

export default NavBar;
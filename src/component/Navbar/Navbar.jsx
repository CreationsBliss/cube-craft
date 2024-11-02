import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="shadow-md fixed top-0 left-0 right-0">
      <div className="navbar container mx-auto">
        <div className="flex-1">
          <Link className="text-xl">CubeCraft</Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/blogs">Blogs</Link></li>
            <li><Link to="/bookmarks">Bookmarks</Link></li>
          </ul>
        </div>
        <div>
          <input type="checkbox" className="toggle" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [theme, setTheme] = useState("synthwave")

  const handleThemeChange = (e) => {
    if (e.target.checked) {
      setTheme("dark")
    } else {
      setTheme("synthwave")
    }
  }

  useEffect(() => {
    localStorage.setItem("theme", theme)
    const getTheme = localStorage.getItem("theme")
    document.querySelector("html").setAttribute("data-theme", getTheme)
  }, [theme])

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
          <input onChange={handleThemeChange} type="checkbox" className="toggle" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
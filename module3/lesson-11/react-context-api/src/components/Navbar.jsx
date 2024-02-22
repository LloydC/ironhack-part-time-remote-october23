import { NavLink } from "react-router-dom";
import { useContext } from "react"; // <== ADD
import { ThemeContext } from "./../context/theme.context";
import { LanguageContext } from "../context/language.context";

function Navbar() {
  const {theme, toggleTheme } = useContext(ThemeContext); // <== ADD
  const {  toggleLanguage} = useContext(LanguageContext)
  return (
    <nav className={`Navbar ${theme}`}>
      <div>
        <NavLink to="/"> Home </NavLink>
        <NavLink to="/projects"> Projects </NavLink>
        <button className="theme-btn" onClick={toggleTheme}>
        {theme === "light" ? "dark " : "light "}
      </button>
      <select name="" id="" onChange={toggleLanguage}>
        <option value="en-US">English</option>
        <option value="fr-FR">French</option>
      </select>
      </div>
    </nav>
  );
}
 
export default Navbar;
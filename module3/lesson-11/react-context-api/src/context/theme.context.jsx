import { useState, createContext } from "react";
 
const ThemeContext = createContext(); // create a context object
 
function ThemeProviderWrapper(props) { // CREATE A WRAPPER COMPONENT
    const [theme, setTheme] = useState("light"); // <== ADD
 
    const toggleTheme = () => {    // <== ADD
      if (theme === "light") {
        setTheme("dark");
      } else {
        setTheme("light");
      }
    };
    return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {props.children}
    </ThemeContext.Provider>
  )
}
 
export { ThemeContext, ThemeProviderWrapper }; 
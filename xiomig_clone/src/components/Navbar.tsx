import { useState } from "react";
import { Menu } from "lucide-react";
import { Sidebar } from "./Sidebar";

const NavBar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [lang, setLang] = useState("ES");

  const toggleLang = () => setLang(lang === "ES" ? "EN" : "ES");

  return (
    <div className="fixed top-0 left-0 right-0 z-50 mt-4 lg:mt-0">
      <nav
        className="
  bg-white/40 shadow-md rounded-full border border-white/20
  lg:bg-transparent lg:backdrop-blur-0 lg:shadow-none lg:rounded-none lg:border-none
  mx-8 lg:mx-0 md:mx-auto md:max-w-7xl lg:w-full
  px-6 py-3
  flex justify-between items-center
">
        {/* Mobile layout */}
        <div className="flex items-center justify-between w-full md:hidden">
          {/* Mobile menu button */}
          <div className="flex items-center">
            <button onClick={() => setSidebarOpen(true)}>
              <Menu className="text-white w-6 h-6" />
            </button>
          </div>

          {/* Logo centrado en mobile */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <img className="h-6" src="/logo.svg" alt="Xiomig" />
          </div>

          {/* Language switch a la derecha en mobile */}
          <div>
            <button
              onClick={toggleLang}
              className="text-white font-semibold flex gap-2 rounded-full text-sm hover:bg-black/40 hover:text-white transition">
              <p>{lang}</p>
            </button>
          </div>
        </div>

        {/* Desktop layout */}
        <div className="hidden md:flex items-center gap-2">
          <img
            className="h-6 lg:ml-[5rem] portrait:mx-auto self-center"
            src="/logo.svg"
            alt="Xiomig"
          />
          <div className="border border-white mx-4 h-8 portrait:hidden"></div>

          {/* Desktop nav links */}
          <ul className="flex space-x-6 text-sm font-medium text-white justify-center">
            <li>
              <a href="#home" className="hover:text-white transition">
                INICIO
              </a>
            </li>
            <li>
              <a href="#departments" className="hover:text-white transition">
                DEPARTAMENTOS
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-white transition">
                SERVICIOS
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-white transition">
                NOSOTROS
              </a>
            </li>

            {/* Language switch */}
            <button
              onClick={toggleLang}
              className="text-white font-semibold flex gap-2 rounded-full text-sm hover:bg-black/40 hover:text-white transition portrait:hidden">
              <p>{lang}</p>
            </button>
          </ul>
        </div>

        {/* Sidebar */}
      </nav>
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
    </div>
  );
};

export default NavBar;

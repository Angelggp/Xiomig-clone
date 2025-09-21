import NavBar from "./Navbar";
import Hero from "./Hero";
import Departments from "./Departments";
import Services from "./Services";
import About from "./About";
import Footer from "./Footer";
import { useSiteSettings } from "../hooks/useSiteSettings";

const Layout = () => {
  const { data: settings } = useSiteSettings();
  const primaryColor = settings?.primary_color?.slice(0, 7) || "#d22b28";
  const secondaryColor = settings?.secondary_color?.slice(0, 7) || "#113638";

  return (
    <div>
      <NavBar />
      <Hero />
      <div
        style={{
          background: `radial-gradient(circle at center, ${primaryColor} 20%, ${secondaryColor} 90%)`
        }}>
        <Departments />
        <Services />
        <About />      
      </div>
      <Footer />
    </div>
  );
};

export default Layout;

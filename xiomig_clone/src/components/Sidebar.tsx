import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { socialLinks } from './SocialLinkData';
import SocialIcon from "./SocialIcon";
import Logo1 from '../../public/logo1';

const links = [
  { href: "/es/#", label: "INICIO" },
  { href: "/es/#departments", label: "DEPARTAMENTOS" },
  { href: "/es/#services", label: "SERVICIOS" },
  { href: "/es/#about", label: "NOSOTROS" },
];

interface SidebarProps {
  open: boolean;
  setOpen: (value: boolean) => void;
}

export function Sidebar({ open, setOpen }: SidebarProps) {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Fondo oscuro */}
          <motion.div
            className="fixed inset-0 bg-black/80 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          />

          {/* Sidebar */}
          <motion.aside
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ 
              type: "tween", 
              duration: 0.3,
              ease: "easeInOut"
            }}
            className="fixed z-50 inset-y-0 left-0 w-3/4 sm:max-w-sm h-screen bg-[#113638] text-white shadow-lg flex flex-col rounded-r-2xl border-2 border-white px-0"
          >
            {/* Botón cerrar */}
            <button
              type="button"
              className="absolute right-4 top-4 rounded-sm opacity-70 hover:opacity-100 transition-opacity focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              onClick={() => setOpen(false)}
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </button>

            {/* Logo */}
            <Logo1/>

            {/* Menú */}
            <nav className="flex flex-col mt-8">
              {links.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  className={`${idx === 0 ? 'first:border-t-2' : ''} border-b-2 px-4 py-2 border-white hover:bg-white/10 transition-colors`}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Redes sociales */}
            <div className="flex items-center justify-center gap-8 mb-10 mt-auto">
              {socialLinks.map((social, index) => (
                <SocialIcon 
                  key={index}
                  href={social.href} 
                  ariaLabel={social.ariaLabel}
                >
                  {social.icon}
                </SocialIcon>
              ))}
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}


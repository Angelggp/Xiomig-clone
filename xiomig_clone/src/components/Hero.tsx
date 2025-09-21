import React from 'react';
import SocialIcon from './SocialIcon';
import WhatsAppButton from './WhatsAppButton';
import { socialLinks } from './SocialLinkData';
import { useSiteSettings } from '../hooks/useSiteSettings';

const Hero: React.FC = () => {
  const { data: settings } = useSiteSettings();
  const primaryColor = settings?.primary_color || "#d22b2875"; 
  const secondaryColor = settings?.secondary_color || "#113638"; 

  return (
    <div className="relative h-screen w-full" id="home">
      {/* Imagen de fondo dinámica */}
      <img
        src={settings?.background_image}
        alt="Background"
        className="inset-0 h-full w-full -scale-x-[1] object-cover object-center -z-10 fixed"
      />

      {/* Degradado de fondo (usando colores configurados) */}
      <div
        style={{
          background: `radial-gradient(circle at right,${primaryColor} 20%, ${secondaryColor} 90%)`,
        }}
        className="absolute inset-0 -z-10"
      />

      {/* Contenido principal */}
      <div className="animate-fade-in items-center w-full md:w-[60%] lg:px-24 relative flex flex-col md:items-start justify-center h-full is-visible pt-20 lg:pt-0">
        <div className="flex flex-col px-8 md:px-0 w-full md:w-[95%]">
          <div className="flex flex-col items-center justify-center md:px-8">
            {/* Logo para desktop */}
            <img
              className="h-28 mb-4 mt-16 md:flex hidden"
              src="/logo.svg"
              alt={settings?.site_name}
            />

            {/* Título principal dinámico */}
            <h1 className="text-2xl md:w-[28rem] text-center sm:text-3xl md:text-center lg:text-3xl font-bold text-white">
              {settings?.hero_title ||
                "DISEÑO GRÁFICO, MARKETING Y PUBLICIDAD DIGITAL COMERCIAL"}
            </h1>

            {/* Subtítulo dinámico */}
            <p className="md:mt-0 md:w-[28rem] mt-4 text-xs text-center md:text-justify text-neutral-300">
              {settings?.hero_subtitle ||
                "Xiomig se especializa en diseño gráfico, ofreciendo soluciones creativas en editorial, branding, interfaz y marketing digital. Nuestro equipo crea identidades visuales atractivas y trabaja en colaboración con los clientes para desarrollar proyectos impactantes y estratégicos que resalten la esencia de cada marca."}
            </p>
          </div>

          {/* Botón de WhatsApp */}
          <WhatsAppButton phoneNumber={settings?.contact_phone || "+51906750768"} />

          {/* Redes sociales dinámicas */}
          <div className="flex flex-row w-[40%] mx-auto md:mt-6 mt-8 gap-4 justify-center items-center">
            {socialLinks.map((social, index) => (
              <SocialIcon key={index} href={social?.href} ariaLabel={social?.ariaLabel}>
                {social?.icon}
              </SocialIcon>
            ))}
          </div>

          {/* Email de contacto dinámico */}
          <a
            className="text-center self-center text-neutral-200 text-sm mt-2 hover:text-white transition-colors"
            href={`mailto:${settings?.contact_email || "ceo@xiomig.com"}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {settings?.contact_email || "ceo@xiomig.com"}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;

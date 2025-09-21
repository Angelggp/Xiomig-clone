import { footerData } from "../utils/footerData";
import { useSiteSettings } from "../hooks/useSiteSettings";

const Footer: React.FC = () => {
  const { data: settings } = useSiteSettings();
  const secundaryColor = settings?.secondary_color.slice(0, 7) || "#113638";
  return (
    <footer  style={{ backgroundColor: secundaryColor }} className={`flex flex-col items-center justify-center  border-t border-neutral-700 text-white md:py-8 py-16`}>
      
      {/* Payments */}
      <div className="flex flex-col gap-2 w-full">
        <p className="text-center self-center font-semibold my-4">
          MÉTODOS DE PAGO
        </p>
        <div className="flex w-full items-center justify-center border-t border-b">
          <div className="w-[80%]">
            <div className="grid md:grid-flow-row md:grid-rows-1 md:grid-cols-4 grid-cols-2 portrait:gap-2 portrait:gap-y-4 px-16 md:px-56 portrait:py-6 gap-16 py-4 justify-center">
              {footerData.payment_methods.map((method) => (
                <div key={method.id} className="flex gap-2 items-center hover:text-white">
                  {method.icon}
                  <div className="flex flex-col">
                    <p>{method.name}</p>
                    {method.description && (
                      <p className="text-xs">{method.description}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col w-[80%] md:flex-row py-4 justify-center gap-4 md:gap-0 md:justify-between">
        <div className="grid md:grid-cols-3 w-full gap-4">
          {/* Sections */}
          <div className="flex flex-col gap-2 items-center md:items-start">
            <div className="flex flex-col w-fit">
              <p className="text-center self-center font-semibold my-4">
                SECCIONES
              </p>
              <div className="grid grid-cols-2 gap-2 gap-x-8 justify-between">
                {footerData.sections.map((section) => (
                  <a
                    key={section.id}
                    href={section.href}
                    className="hover:text-white transition flex"
                  >
                    {section.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-col gap-2 items-center">
            <div className="flex flex-col w-fit items-center justify-center">
              <p className="text-center self-center font-semibold my-4">
                REDES SOCIALES
              </p>
              <div className="grid grid-cols-2 gap-2 gap-x-8">
                {footerData.social_links.map((social) => (
                  <a
                    key={social.id}
                    target="_blank"
                    href={social.href}
                    className="flex gap-2 items-center text-neutral-400 hover:text-white transition"
                    rel="noopener noreferrer"
                  >
                    {social.icon}
                    {social.username}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="flex justify-center items-center md:items-end flex-col gap-2">
            <div className="flex flex-col w-fit items-center justify-center">
              <p className="text-center self-center font-semibold my-4">
                CONTACTO
              </p>
              
              {/* Phone */}
              <div className="flex flex-row gap-2">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M0 5C0 2.23858 2.23858 0 5 0H15C17.7614 0 20 2.23858 20 5V15C20 17.7614 17.7614 20 15 20H5C2.23858 20 0 17.7614 0 15V5ZM10 8.5C11.6569 8.5 13 7.15685 13 5.5C13 3.84315 11.6569 2.5 10 2.5C8.34315 2.5 7 3.84315 7 5.5C7 7.15685 8.34315 8.5 10 8.5ZM10 17.5C16 17.5 16 15.9887 16 14.125C16 12.2613 13.3135 10.75 10 10.75C6.6865 10.75 4 12.2613 4 14.125C4 15.9887 4 17.5 10 17.5Z" fill="white"/>
                </svg>
                <div className="flex flex-col">
                  {footerData.contact_info.phones.map((phone, index) => (
                    <p key={index}>{phone}</p>
                  ))}
                </div>
              </div>

              {/* Mail */}
              <a href={`mailto:${footerData.contact_info.email}`} className="flex gap-2 mt-2">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M5 0C2.23858 0 0 2.23858 0 5V15C0 17.7614 2.23858 20 5 20H15C17.7614 20 20 17.7614 20 15V5C20 2.23858 17.7614 0 15 0H5ZM2.66669 14.3646V9.77541L6.55313 12.2943V15.3333H3.63856C3.51121 15.3336 3.38505 15.3088 3.26729 15.2602C3.14952 15.2117 3.04246 15.1404 2.95222 15.0505C2.86197 14.9605 2.7903 14.8537 2.74131 14.736C2.69232 14.6183 2.66696 14.4921 2.66669 14.3646ZM10 12.9907L12.1282 11.6115L12.1293 6.39866L10 7.76624L7.87075 6.39866V11.6115L10 12.9907ZM13.4459 15.3333V12.2943L17.3334 9.77435V14.3646C17.3331 14.4921 17.3077 14.6183 17.2587 14.736C17.2097 14.8537 17.1381 14.9605 17.0478 15.0505C16.9576 15.1404 16.8505 15.2117 16.7328 15.2602C16.615 15.3088 16.4888 15.3336 16.3615 15.3333H13.4459ZM13.4459 10.7568L17.3334 8.23793V6.60865C17.3334 5.07434 15.632 4.1489 14.3397 4.97726L13.4459 5.55131V10.7568ZM6.55313 10.7578V5.55131L5.66031 4.97726C4.368 4.1489 2.66669 5.07434 2.66669 6.60865V8.23793L6.55313 10.7578Z" fill="white"/>
                </svg>
                <p>{footerData.contact_info.email}</p>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="text-gray-400 items-center flex justify-center self-center pt-5 mt-4 border-t-2 border-[#7C7C7C] w-[80%] text-sm space-x-8">
        <a 
          target="_blank" 
          href={footerData.company_info.xiomig_url}
          className="hover:text-white transition"
          rel="noopener noreferrer"
        >
          Diseñado por{" "}
          <img 
            className="h-4 inline-flex" 
            src="/xiomig.svg" 
            alt="Xiomig"
          />
        </a>
        <a 
          target="_blank" 
          href={footerData.company_info.einsof_url}
          className="hover:text-white transition"
          rel="noopener noreferrer"
        >
          Desarrollado por{" "}
          <img 
            className="h-4 inline-flex" 
            src="/einsof.svg" 
            alt="Einsof"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
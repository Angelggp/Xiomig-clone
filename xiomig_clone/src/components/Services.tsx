import React from 'react';
import WhatsAppButton from './WhatsAppButton';
import FadeInWhenVisible from './FadeInWhenVisible';
import { useServices } from '../hooks/useServices';


const Services: React.FC = () => {
  const { data: services, isLoading, isError } = useServices();

  if (isLoading) {
    return (
      <section id="services" className="p-8 lg:px-16 px-8 text-center text-white">
        <p>Cargando servicios...</p>
      </section>
    );
  }

  if (isError) {
    return (
      <section id="services" className="p-8 lg:px-16 px-8 text-center text-red-500">
        <p>Error al cargar los servicios. Intenta nuevamente.</p>
      </section>
    );
  }

  return (
    <FadeInWhenVisible>
      <section 
        id="services" 
        aria-labelledby="services-title" 
        className="relative scroll-m-5 gradient-background "
      >
        <div className="flex flex-col gap-8 items-center p-8 lg:px-16 px-8">
          <h2 
            id="services-title" 
            className="animate-fade-in text-3xl text-center self-center lg:text-5xl font-bold text-white mb-12 max-w-3xl"
          >
            Nuestros Servicios
          </h2>

          <div className="flex flex-col gap-2 bg-[#11363879] animate-fade-in backdrop-blur-2xl rounded-[1.7rem] md:rounded-[4rem] md:mx-8 md:px-20 md:py-10 py-4">
            <section className="animate-fade-in flex flex-col md:py-4 py-2 md:px-0 px-8">
              <img 
                className="md:h-36 h-20 md:mt-12 mt-8 self-center mx-auto" 
                src="/logo.svg" 
                alt="Xiomig Logo"
              />

              {/* Grid de servicios */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8 max-w-5xl mx-auto text-left">
                {services
                  ?.sort((a, b) => a.order - b.order) // Ordenar por "order"
                  .map((category) => (
                  <div key={category.id}>
                    <h2 className="text-2xl font-semibold text-white mb-4">
                      {category.title}
                    </h2>

                    {category.description && (
                      <p className="text-neutral-200 mb-2">{category.description}</p>
                    )}

                    {category.items && category.items.length > 0 && (
                      <ul className="list-disc pl-5 text-neutral-200 space-y-2">
                        {category.items
                          .filter((item) => item.active) // Solo items activos
                          .sort((a, b) => a.order - b.order) // Ordenar por "order"
                          .map((item) => (
                          <li key={item.id}>{item.title}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>

              {/* Botón de contacto */}
              <div className="self-center mt-8 md:mb-0 mb-8">
                <WhatsAppButton phoneNumber="+51906750768" />
              </div>
            </section>
          </div>
        </div>
      </section>
    </FadeInWhenVisible>
  );
};

export default Services;


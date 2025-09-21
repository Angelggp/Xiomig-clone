import React from 'react';
import WhatsAppButton from './WhatsAppButton';
import FadeInWhenVisible from './FadeInWhenVisible';
import { useServices } from '../hooks/useServices';

const Services: React.FC = () => {
  const { data: services, isLoading, error, isRefetching } = useServices();

  return (
    <FadeInWhenVisible>
      <section 
        id="services" 
        aria-labelledby="services-title" 
        className="relative scroll-m-5 gradient-background "
      >
        <div className="flex flex-col gap-8 items-center p-8 lg:px-16 px-8">
          {/* Título principal */}
          <h2 
            id="services-title" 
            className="animate-fade-in text-3xl text-center self-center lg:text-5xl font-bold text-white mb-12 max-w-3xl"
          >
            Nuestros Servicios
            {/* Indicador sutil de refetch en tiempo real */}
            {isRefetching && !isLoading && (
              <div className="inline-block ml-3">
                <div className="w-3 h-3 bg-green-400 rounded-full opacity-70 animate-pulse"></div>
              </div>
            )}
          </h2>

          {/* Estados de carga y error */}
          {isLoading ? (
            <div className="flex justify-center items-center py-20">
              <div className="flex flex-col items-center gap-4">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
                <p className="text-neutral-300 text-sm">Cargando servicios...</p>
              </div>
            </div>
          ) : error ? (
            <div className="flex justify-center items-center py-20">
              <div className="text-center">
                <p className="text-red-300 mb-4">Error al cargar servicios</p>
                <p className="text-neutral-400 text-sm">{error.message}</p>
                <button 
                  onClick={() => window.location.reload()}
                  className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
                >
                  Reintentar
                </button>
              </div>
            </div>
          ) : services && Array.isArray(services) && services.length > 0 ? (
            /* Contenedor de servicios desde API */
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
          ) : (
            /* Estado vacío */
            <div className="flex justify-center items-center py-20">
              <div className="text-center">
                <p className="text-neutral-300 mb-2">No hay servicios disponibles</p>
                {services && !Array.isArray(services) && (
                  <p className="text-red-400 text-xs">
                    Error: Respuesta inesperada del servidor
                  </p>
                )}
              </div>
            </div>
          )}
        </div>
      </section>
    </FadeInWhenVisible>
  );
};

export default Services;
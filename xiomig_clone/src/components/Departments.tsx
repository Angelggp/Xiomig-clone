import DepartmentCard from './DepartmentCard';
import WhatsAppButton from './WhatsAppButton';
import FadeInWhenVisible from './FadeInWhenVisible';
import { useDepartments } from '../hooks/useDepartments';

const Departments: React.FC = () => {
  const { data: departments, isLoading, error, isRefetching } = useDepartments();

  // Debug: Verificar qué está llegando
  return (
    <FadeInWhenVisible>
      <div className="gradient-background" id="departments">
        <section 
          id="departments" 
          aria-labelledby="services-title" 
          className="relative scroll-mt-[-5rem] py-28 flex flex-col text-neutral-50"
        >
          {/* Título principal */}
          <h2 
            id="services-title" 
            className="animate-fade-in text-3xl text-center self-center lg:text-5xl font-bold text-white mb-12 max-w-3xl is-visible"
          >
            Nuestros Departamentos
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
                <p className="text-neutral-300 text-sm">Cargando departamentos...</p>
              </div>
            </div>
          ) : error ? (
            <div className="flex justify-center items-center py-20">
              <div className="text-center">
                <p className="text-red-300 mb-4">Error al cargar departamentos</p>
                <p className="text-neutral-400 text-sm">{error.message}</p>
                <button 
                  onClick={() => window.location.reload()}
                  className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
                >
                  Reintentar
                </button>
              </div>
            </div>
          ) : departments && Array.isArray(departments) && departments.length > 0 ? (
            /* Tarjetas de departamentos desde API */
            <div className="mt-4 flex flex-col gap-12 justify-center md:flex-row px-8 md:px-16">
              {departments.map((department) => (
                <DepartmentCard
                  key={department.id}
                  imageSrc={department.image}
                  imageAlt={department.title}
                  title={department.title}
                  description={department.description}
                  isVisible={true} // Siempre visible desde API
                />
              ))}
            </div>
          ) : (
            /* Estado vacío */
            <div className="flex justify-center items-center py-20">
              <div className="text-center">
                <p className="text-neutral-300 mb-2">No hay departamentos disponibles</p>
                {departments && !Array.isArray(departments) && (
                  <p className="text-red-400 text-xs">
                    Error: Respuesta inesperada del servidor
                  </p>
                )}
              </div>
            </div>
          )}

          {/* Botón de contacto - solo mostrar si hay datos */}
          {departments && Array.isArray(departments) && departments.length > 0 && (
            <div className="self-center mt-12">
              <WhatsAppButton phoneNumber="+51906750768" />
            </div>
          )}
        </section>
      </div>
    </FadeInWhenVisible>
  );
};

export default Departments;
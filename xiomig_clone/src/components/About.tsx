import React from 'react';
import WhatsAppButton from './WhatsAppButton';
import FedeInWhenVisible from './FadeInWhenVisible';

const About: React.FC = () => {
  const aboutContent = {
    column1: [
      "En Xiomig, somos una agencia de diseño gráfico y comunicación visual con sede en Perú, distinguida por nuestro enfoque en la creatividad y la innovación. En un mundo donde la competencia es feroz y las marcas luchan por captar la atención del consumidor, entendemos que es esencial ofrecer soluciones que no solo sean visualmente atractivas, sino también estratégicas y efectivas. Nuestro compromiso es ayudar a las marcas a destacarse en este entorno dinámico, proporcionando una cartera de servicios que abarca desde el diseño de identidad hasta marketing y publicidad.",
      "Nuestro enfoque integral nos permite abordar cada proyecto de manera holística. No solo diseñamos logotipos o campañas; creamos experiencias completas que reflejan la esencia de cada marca. Desde el primer contacto hasta la entrega final, trabajamos de cerca con nuestros clientes para entender sus objetivos y desafíos. Esto nos permite adaptar nuestras soluciones a sus necesidades específicas, asegurando que cada pieza de comunicación visual no solo cumpla con los estándares estéticos, sino que también esté alineada con la estrategia empresarial del cliente.",
      "Contamos con un equipo de profesionales apasionados y experimentados que aportan una diversidad de habilidades y perspectivas. Cada miembro de nuestro equipo se dedica a transformar ideas abstractas en realidades visuales impactantes. Esta pasión por el diseño se traduce en resultados excepcionales, lo que nos permite construir una sólida reputación tanto a nivel local como internacional. Nuestro trabajo ha resonado especialmente"
    ],
    column2: [
      "en mercados como Cuba y Perú, donde hemos establecido relaciones duraderas con nuestros clientes basadas en la confianza y la colaboración.",
      "En Xiomig, creemos firmemente que cada marca tiene una historia única que merece ser contada. Nos dedicamos a descubrir y resaltar esas historias a través de identidades visuales memorables que conecten emocionalmente con la audiencia. Utilizamos estrategias de marketing efectivas que no solo aumentan la visibilidad de la marca, sino que también fomentan un crecimiento sostenible. Ya sea que necesites un rediseño de logotipo para modernizar tu imagen, una campaña publicitaria creativa que capte la atención, o un diseño editorial cautivador que comunique tus valores, estamos aquí para ayudarte a alcanzar tus objetivos y llevar tu marca al siguiente nivel.",
      "Nuestro enfoque no se limita a crear diseños atractivos; nuestro objetivo es generar experiencias visuales que perduren en la mente de los consumidores. Creemos que una buena comunicación visual puede transformar la percepción de una marca y crear conexiones significativas con su audiencia. Por lo tanto, cada proyecto es una oportunidad para innovar y superar las expectativas de nuestros clientes.",
      "Te invitamos a ponerte en contacto con nosotros y descubrir cómo podemos colaborar para hacer que tu marca brille en el escenario internacional. Juntos, daremos vida a tus ideas y crearemos un impacto duradero en el mundo del diseño y la comunicación visual. En Xiomig, tu éxito es nuestra misión."
    ]
  };

  return (
    <FedeInWhenVisible>
    <section 
      id="about" 
      className="flex flex-col animate-fade-in pb-20 text-white py-8 is-visible gradient-background"
    >
      {/* About Section */}
      <div className="mt-12 scroll-m-2 self-center px-4 grid gap-8 md:px-48">
        <h3 className="text-3xl font-bold uppercase text-center">
          Sobre Nosotros
        </h3>

        <div className="flex md:flex-row flex-col gap-12 px-6">
          {/* Column 1 */}
          <div className="text-neutral-200 flex flex-col gap-2 md:w-1/2 text-sm leading-relaxed">
            {aboutContent.column1.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {/* Column 2 */}
          <div className="text-neutral-200 flex flex-col gap-2 md:w-1/2 text-sm leading-relaxed">
            {aboutContent.column2.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Button */}
      <div className="self-center mt-8">
        <WhatsAppButton phoneNumber="+51906750768" />
      </div>
    </section>
    </FedeInWhenVisible>
  );
};

export default About;
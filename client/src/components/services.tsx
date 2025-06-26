import { Microscope, Heart, Pill, CalendarCheck, Ambulance, Smartphone, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Microscope,
    title: "Diagnóstico IA",
    description: "Análisis instantáneo de síntomas y signos vitales para diagnósticos más precisos y rápidos.",
    highlight: "Precisión 98%",
    color: "bg-vet-blue"
  },
  {
    icon: Heart,
    title: "Monitoreo Continuo",
    description: "Seguimiento en tiempo real de la salud de tu mascota con alertas automáticas.",
    highlight: "24/7 Disponible",
    color: "bg-vet-green"
  },
  {
    icon: Pill,
    title: "Tratamiento Personalizado",
    description: "Planes de tratamiento adaptados específicamente a cada mascota usando IA predictiva.",
    highlight: "100% Personalizado",
    color: "bg-purple-600"
  },
  {
    icon: CalendarCheck,
    title: "Citas Inteligentes",
    description: "Sistema automatizado de citas que optimiza horarios y reduce tiempos de espera.",
    highlight: "Cero Esperas",
    color: "bg-orange-500"
  },
  {
    icon: Ambulance,
    title: "Emergencias IA",
    description: "Detección automática de emergencias con protocolo de respuesta inmediata.",
    highlight: "Respuesta < 5 min",
    color: "bg-red-500"
  },
  {
    icon: Smartphone,
    title: "App Móvil IA",
    description: "Aplicación inteligente para consultas virtuales y seguimiento desde casa.",
    highlight: "Descarga Gratis",
    color: "bg-teal-500"
  }
];

export default function Services() {
  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Nuestros Servicios con <span className="text-vet-blue">Tecnología IA</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Revolucionamos el cuidado veterinario combinando experiencia profesional con inteligencia artificial avanzada
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index}
                className="bg-vet-gray rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`w-16 h-16 ${service.color} rounded-xl flex items-center justify-center mb-6`}>
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                <div className="flex items-center text-vet-green font-semibold">
                  <span>{service.highlight}</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

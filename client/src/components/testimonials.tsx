import { Star } from "lucide-react";

const testimonials = [
  {
    name: "María García",
    pet: "Dueña de Max (Golden Retriever)",
    content: "La IA detectó el problema de Max antes de que fuera grave. Increíble precisión y rapidez. ¡Recomiendo VET-IA totalmente!",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b593?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=64&h=64"
  },
  {
    name: "Carlos Ruiz",
    pet: "Dueño de Luna (Gato Persa)",
    content: "El monitoreo continuo me da muchísima tranquilidad. Recibo alertas inmediatas sobre la salud de Luna.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=64&h=64"
  },
  {
    name: "Ana López",
    pet: "Dueña de Coco (Chihuahua)",
    content: "La app móvil es fantástica. Puedo consultar cualquier duda sobre Coco y recibir respuestas inmediatas.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=64&h=64"
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-vet-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Lo Que Dicen Nuestros <span className="text-vet-blue">Clientes</span>
          </h2>
          <p className="text-xl text-gray-600">
            Historias reales de mascotas y familias que han experimentado el poder de la IA veterinaria
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-6 italic">
                "{testimonial.content}"
              </p>
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover" 
                />
                <div className="ml-4">
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.pet}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Button } from "@/components/ui/button";
import { CalendarPlus, Play } from "lucide-react";

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contacto");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="inicio" className="pt-16 bg-gradient-to-br from-vet-gray to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                El Futuro del <span className="text-vet-blue">Cuidado Veterinario</span> Ya Está Aquí
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Combinamos la calidez del cuidado tradicional con la precisión de la inteligencia artificial para ofrecer la mejor atención a tu mascota
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToContact}
                className="bg-vet-green text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-600 transition-all transform hover:scale-105"
                size="lg"
              >
                <CalendarPlus className="mr-2 h-5 w-5" />
                Agendar Cita Ahora
              </Button>
              <Button 
                variant="outline"
                className="border-2 border-vet-blue text-vet-blue px-8 py-4 rounded-lg text-lg font-semibold hover:bg-vet-blue hover:text-white transition-all"
                size="lg"
              >
                <Play className="mr-2 h-5 w-5" />
                Ver Demo IA
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-vet-blue">500+</div>
                <div className="text-sm text-gray-600">Mascotas Atendidas</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-vet-blue">98%</div>
                <div className="text-sm text-gray-600">Precisión IA</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-vet-blue">24/7</div>
                <div className="text-sm text-gray-600">Disponibilidad</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1576201836106-db1758fd1c97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Veterinario feliz con perro en clínica moderna" 
              className="rounded-2xl shadow-2xl w-full h-auto object-cover" 
            />
            
            {/* Floating AI Badge */}
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold text-gray-700">IA Activa</span>
              </div>
            </div>

            {/* Floating Stats */}
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
              <div className="text-center">
                <div className="text-lg font-bold text-vet-blue">Diagnóstico</div>
                <div className="text-sm text-gray-600">En 3 minutos</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

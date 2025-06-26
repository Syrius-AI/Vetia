import { Button } from "@/components/ui/button";
import { Brain, Eye, TrendingUp, Rocket } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Deep Learning Veterinario",
    description: "Redes neuronales entrenadas específicamente para patologías veterinarias"
  },
  {
    icon: Eye,
    title: "Visión Computacional",
    description: "Análisis automático de radiografías y ecografías en segundos"
  },
  {
    icon: TrendingUp,
    title: "Análisis Predictivo",
    description: "Predicción de enfermedades antes de que se manifiesten"
  }
];

export default function Technology() {
  return (
    <section id="tecnologia" className="py-20 bg-gradient-to-br from-vet-blue to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold">
                Tecnología de <span className="text-vet-green">Vanguardia</span>
              </h2>
              <p className="text-xl text-blue-100 leading-relaxed">
                Nuestra plataforma de IA veterinaria utiliza machine learning avanzado para transformar el diagnóstico y tratamiento de mascotas.
              </p>
            </div>

            {/* AI Features */}
            <div className="space-y-6">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-vet-green rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
                      <p className="text-blue-100">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <Button className="bg-vet-green text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-600 transition-all">
              <Rocket className="mr-2 h-5 w-5" />
              Probar Tecnología IA
            </Button>
          </div>

          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Equipamiento veterinario moderno con tecnología IA" 
              className="rounded-2xl shadow-2xl w-full h-auto object-cover" 
            />
            
            {/* AI Processing Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
            
            {/* Floating AI Stats */}
            <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-vet-green rounded-full animate-pulse"></div>
                <div>
                  <div className="text-sm font-semibold text-gray-700">IA Procesando</div>
                  <div className="text-xs text-gray-500">Análisis en tiempo real</div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
              <div className="text-center">
                <div className="text-lg font-bold text-vet-blue">3.2s</div>
                <div className="text-xs text-gray-600">Tiempo de diagnóstico</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

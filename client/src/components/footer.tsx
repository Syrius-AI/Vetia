import { Heart, Facebook, Instagram, Twitter, Linkedin, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="bg-vet-blue p-2 rounded-lg">
                <Heart className="h-5 w-5 text-white" />
              </div>
              <span className="text-2xl font-bold">VET-IA</span>
            </div>
            <p className="text-gray-300">
              Revolucionando el cuidado veterinario con inteligencia artificial para el bienestar de tu mascota.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-vet-blue rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-vet-blue rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-vet-blue rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-vet-blue rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection("servicios")}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Servicios IA
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("tecnologia")}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Tecnología
                </button>
              </li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Precios</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Blog</a></li>
              <li>
                <button 
                  onClick={() => scrollToSection("contacto")}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contacto
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Servicios</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Diagnóstico IA</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Monitoreo 24/7</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Emergencias</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">App Móvil</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Telemedicina</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contacto</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-vet-green" />
                <span className="text-gray-300">Av. Tecnología 123, Madrid</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-vet-green" />
                <span className="text-gray-300">+34 900 123 456</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-vet-green" />
                <span className="text-gray-300">info@vet-ia.com</span>
              </div>
              <div className="bg-red-600 text-white px-4 py-2 rounded-lg text-center">
                <div className="font-semibold">EMERGENCIAS 24/7</div>
                <div className="text-sm">+34 900 123 456</div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 VET-IA. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacidad</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Términos</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

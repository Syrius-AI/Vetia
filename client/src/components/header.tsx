import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Heart } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-vet-blue p-2 rounded-lg">
              <Heart className="h-5 w-5 text-white" />
            </div>
            <span className="text-2xl font-bold text-vet-blue">VET-IA</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection("inicio")}
              className="text-gray-700 hover:text-vet-blue transition-colors"
            >
              Inicio
            </button>
            <button 
              onClick={() => scrollToSection("servicios")}
              className="text-gray-700 hover:text-vet-blue transition-colors"
            >
              Servicios
            </button>
            <button 
              onClick={() => scrollToSection("tecnologia")}
              className="text-gray-700 hover:text-vet-blue transition-colors"
            >
              Tecnología IA
            </button>
            <button 
              onClick={() => scrollToSection("contacto")}
              className="text-gray-700 hover:text-vet-blue transition-colors"
            >
              Contacto
            </button>
          </nav>

          {/* Emergency Phone & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-red-600">
              <Phone className="h-4 w-4" />
              <span className="font-semibold">+34 900 123 456</span>
            </div>
            <Button 
              onClick={() => scrollToSection("contacto")}
              className="bg-vet-green hover:bg-green-600 transition-colors"
            >
              Agendar Cita
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-vet-blue" />
            ) : (
              <Menu className="h-6 w-6 text-vet-blue" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-4 space-y-4">
              <button 
                onClick={() => scrollToSection("inicio")}
                className="block text-gray-700 w-full text-left"
              >
                Inicio
              </button>
              <button 
                onClick={() => scrollToSection("servicios")}
                className="block text-gray-700 w-full text-left"
              >
                Servicios
              </button>
              <button 
                onClick={() => scrollToSection("tecnologia")}
                className="block text-gray-700 w-full text-left"
              >
                Tecnología IA
              </button>
              <button 
                onClick={() => scrollToSection("contacto")}
                className="block text-gray-700 w-full text-left"
              >
                Contacto
              </button>
              <div className="pt-4 border-t">
                <div className="flex items-center space-x-2 text-red-600 mb-3">
                  <Phone className="h-4 w-4" />
                  <span className="font-semibold">+34 900 123 456</span>
                </div>
                <Button 
                  onClick={() => scrollToSection("contacto")}
                  className="w-full bg-vet-green hover:bg-green-600"
                >
                  Agendar Cita
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

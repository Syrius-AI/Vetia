import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { MapPin, Phone, Mail, Clock, CalendarPlus } from "lucide-react";
import type { InsertAppointment } from "@shared/schema";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    ownerName: "",
    phone: "",
    email: "",
    petName: "",
    petType: "",
    preferredDate: "",
    preferredTime: "",
    reason: "",
    agreedToTerms: 0
  });

  const appointmentMutation = useMutation({
    mutationFn: async (data: InsertAppointment) => {
      const response = await apiRequest("POST", "/api/appointments", data);
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "¡Cita agendada exitosamente!",
        description: data.message,
      });
      // Reset form
      setFormData({
        ownerName: "",
        phone: "",
        email: "",
        petName: "",
        petType: "",
        preferredDate: "",
        preferredTime: "",
        reason: "",
        agreedToTerms: 0
      });
    },
    onError: (error: any) => {
      toast({
        title: "Error al agendar la cita",
        description: error.message || "Por favor, verifica los datos e intenta nuevamente.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.agreedToTerms) {
      toast({
        title: "Error",
        description: "Debes aceptar los términos y condiciones",
        variant: "destructive",
      });
      return;
    }

    appointmentMutation.mutate(formData);
  };

  const handleInputChange = (field: string, value: string | number) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Agenda Tu <span className="text-vet-blue">Primera Consulta IA</span>
              </h2>
              <p className="text-xl text-gray-600">
                Experimenta el futuro del cuidado veterinario. Primera consulta con descuento especial del 50%.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-vet-blue rounded-lg flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Dirección</div>
                  <div className="text-gray-600">Av. Tecnología 123, Madrid, España</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-vet-green rounded-lg flex items-center justify-center">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Teléfono</div>
                  <div className="text-gray-600">+34 900 123 456</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Email</div>
                  <div className="text-gray-600">info@vet-ia.com</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Horarios</div>
                  <div className="text-gray-600">Lun-Vie: 8:00-20:00 | Sáb: 9:00-15:00</div>
                </div>
              </div>
            </div>

            {/* Special Offer */}
            <div className="bg-gradient-to-r from-vet-green to-green-600 rounded-2xl p-6 text-white">
              <div className="flex items-center space-x-4">
                <div className="text-4xl">🎉</div>
                <div>
                  <div className="text-lg font-semibold">¡Oferta Especial!</div>
                  <div className="text-green-100">50% de descuento en tu primera consulta IA</div>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <div className="bg-vet-gray rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Reservar Cita</h3>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="ownerName">Nombre del Dueño</Label>
                  <Input
                    id="ownerName"
                    type="text"
                    placeholder="Tu nombre completo"
                    value={formData.ownerName}
                    onChange={(e) => handleInputChange("ownerName", e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Teléfono</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+34 600 000 000"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="tu@email.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="petName">Nombre de la Mascota</Label>
                  <Input
                    id="petName"
                    type="text"
                    placeholder="Nombre de tu mascota"
                    value={formData.petName}
                    onChange={(e) => handleInputChange("petName", e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="petType">Tipo de Animal</Label>
                  <Select 
                    value={formData.petType} 
                    onValueChange={(value) => handleInputChange("petType", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccionar..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="perro">Perro</SelectItem>
                      <SelectItem value="gato">Gato</SelectItem>
                      <SelectItem value="conejo">Conejo</SelectItem>
                      <SelectItem value="ave">Ave</SelectItem>
                      <SelectItem value="otro">Otro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="preferredDate">Fecha Preferida</Label>
                  <Input
                    id="preferredDate"
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => handleInputChange("preferredDate", e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="preferredTime">Hora Preferida</Label>
                  <Select 
                    value={formData.preferredTime} 
                    onValueChange={(value) => handleInputChange("preferredTime", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccionar hora..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="09:00">09:00</SelectItem>
                      <SelectItem value="10:00">10:00</SelectItem>
                      <SelectItem value="11:00">11:00</SelectItem>
                      <SelectItem value="12:00">12:00</SelectItem>
                      <SelectItem value="15:00">15:00</SelectItem>
                      <SelectItem value="16:00">16:00</SelectItem>
                      <SelectItem value="17:00">17:00</SelectItem>
                      <SelectItem value="18:00">18:00</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="reason">Motivo de la Consulta</Label>
                <Textarea
                  id="reason"
                  rows={4}
                  placeholder="Describe brevemente el motivo de la visita..."
                  value={formData.reason}
                  onChange={(e) => handleInputChange("reason", e.target.value)}
                  required
                />
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="terms"
                  checked={formData.agreedToTerms === 1}
                  onCheckedChange={(checked) => handleInputChange("agreedToTerms", checked ? 1 : 0)}
                />
                <Label htmlFor="terms" className="text-sm text-gray-600">
                  Acepto los términos y condiciones y autorizo el tratamiento IA
                </Label>
              </div>

              <Button 
                type="submit" 
                disabled={appointmentMutation.isPending}
                className="w-full bg-vet-green text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-600 transition-all transform hover:scale-105"
              >
                <CalendarPlus className="mr-2 h-5 w-5" />
                {appointmentMutation.isPending ? "Reservando..." : "Reservar Cita con IA"}
              </Button>

              <p className="text-center text-sm text-gray-500">
                Te confirmaremos la cita en menos de 30 minutos
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

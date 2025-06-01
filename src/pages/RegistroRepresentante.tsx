import React, { useState } from "react";
import Header from "@/components/HeaderLogin";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import ModalRespuestaSi from "@/components/ui/modalRespuestaSi";

const RegistroRepresentante = () => {
  const [form, setForm] = useState({
    Cedula: "",
    Edad: "",
    nombreRepresentante: "",
    telefono: "",
    direccion: "",
    nombreAlumno: "",
    Cursado: "",
    fechaCita: "", // Nuevo campo para la fecha
  });
  const [showModal, setShowModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Nuevo handler para el calendario
  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, fechaCita: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch('http://localhost:3000/alumnos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });
      if (!response.ok) {
        throw new Error("Error al enviar los datos");
      }
      setShowModal(true);
      setForm({
        nombreRepresentante: "",
        Cedula: "",
        telefono: "",
        direccion: "",
        nombreAlumno: "",
        Edad: "",
        Cursado: "",
        fechaCita: "",
      });
    } catch (error) {
      alert("Hubo un error al enviar el formulario");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Función para deshabilitar sábados y domingos
  const getMinDate = () => {
    const today = new Date();
    return today.toISOString().split("T")[0];
  };

  const isWeekend = (dateString: string) => {
    const date = new Date(dateString);
    const day = date.getDay();
    return day === 0 || day === 6;
  };

  return (
    <>
      <Header />
      <ModalRespuestaSi open={showModal} onClose={() => setShowModal(false)} />
      <div className="relative min-h-screen flex items-center justify-center pt-24 md:pt-28">
        <div className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl px-8 py-10 w-full max-w-lg border border-white/40">
          <h2 className="text-2xl font-bold text-primary mb-6 text-center">
            Registro de Representante y Niño
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label
                htmlFor="nombreRepresentante"
                className="text-primary font-medium"
              >
                Nombre completo del representante
              </Label>
              <Input
                id="nombreRepresentante"
                name="nombreRepresentante"
                type="text"
                value={form.nombreRepresentante}
                onChange={handleChange}
                required
                className="bg-white/70 border-gray-300 focus:border-primary focus:ring-primary mt-1"
              />
            </div>
            <div>
              <Label htmlFor="Cedula" className="text-primary font-medium">
                Cédula de identidad
              </Label>
              <Input
                id="Cedula"
                name="Cedula"
                type="text"
                value={form.Cedula}
                onChange={handleChange}
                required
                className="bg-white/70 border-gray-300 focus:border-primary focus:ring-primary mt-1"
              />
            </div>
            <div>
              <Label htmlFor="telefono" className="text-primary font-medium">
                Número de teléfono
              </Label>
              <Input
                id="telefono"
                name="telefono"
                type="tel"
                placeholder="Ej: 0412-3456789"
                value={form.telefono}
                onChange={handleChange}
                required
                className="bg-white/70 border-gray-300 focus:border-primary focus:ring-primary mt-1"
              />
            </div>
            <div>
              <Label htmlFor="direccion" className="text-primary font-medium">
                Dirección
              </Label>
              <Input
                id="direccion"
                name="direccion"
                type="text"
                value={form.direccion}
                onChange={handleChange}
                required
                className="bg-white/70 border-gray-300 focus:border-primary focus:ring-primary mt-1"
              />
            </div>
            <div>
              <Label htmlFor="nombreAlumno" className="text-primary font-medium">
                Nombre Completo del niño
              </Label>
              <Input
                id="nombreAlumno"
                name="nombreAlumno"
                type="text"
                value={form.nombreAlumno}
                onChange={handleChange}
                required
                className="bg-white/70 border-gray-300 focus:border-primary focus:ring-primary mt-1"
              />
            </div>
            <div>
              <Label htmlFor="Edad" className="text-primary font-medium">
                Edad del niño
              </Label>
              <Input
                id="Edad"
                name="Edad"
                type="number"
                min={1}
                max={17}
                value={form.Edad}
                onChange={handleChange}
                required
                className="bg-white/70 border-gray-300 focus:border-primary focus:ring-primary mt-1"
              />
            </div>
            <div>
              <Label htmlFor="Cursado" className="text-primary font-medium">
                Ultimo grado cursado por el niño (Si aplica)
              </Label>
              <Input
                id="Cursado"
                name="Cursado"
                type="text"
                value={form.Cursado}
                onChange={handleChange}
                className="bg-white/70 border-gray-300 focus:border-primary focus:ring-primary mt-1"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 text-lg"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Enviando..." : "Enviar"}
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegistroRepresentante;

import React, { useState } from "react";
import Header from "@/components/HeaderLogin";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const RegistroRepresentante = () => {
  const [form, setForm] = useState({
    nombreRepresentante: "",
    cedula: "",
    telefono: "",
    direccion: "",
    nombreNino: "",
    edadNino: "",
    gradonino: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí puedes manejar el envío del formulario
    alert("Formulario enviado:\n" + JSON.stringify(form, null, 2));
  };

  return (
    <>
      <Header />
      <div className="relative min-h-screen flex items-center justify-center pt-24 md:pt-28">
        <div className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl px-8 py-10 w-full max-w-lg border border-white/40">
          <h2 className="text-2xl font-bold text-primary mb-6 text-center">Registro de Representante y Niño</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="nombreRepresentante" className="text-primary font-medium">
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
              <Label htmlFor="cedula" className="text-primary font-medium">
                Cédula de identidad
              </Label>
              <Input
                id="cedula"
                name="cedula"
                type="text"
                value={form.cedula}
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
              <Label htmlFor="nombreNino" className="text-primary font-medium">
                Nombre del niño
              </Label>
              <Input
                id="nombreNino"
                name="nombreNino"
                type="text"
                value={form.nombreNino}
                onChange={handleChange}
                required
                className="bg-white/70 border-gray-300 focus:border-primary focus:ring-primary mt-1"
              />
            </div>
            <div>
              <Label htmlFor="edadNino" className="text-primary font-medium">
                Edad del niño
              </Label>
              <Input
                id="edadNino"
                name="edadNino"
                type="number"
                min={1}
                value={form.edadNino}
                onChange={handleChange}
                required
                className="bg-white/70 border-gray-300 focus:border-primary focus:ring-primary mt-1"
              />
            </div>
                       <div>
              <Label htmlFor="gradonino" className="text-primary font-medium">
                Edad del niño
              </Label>
              <Input
                id="gradonino"
                name="gradonino"
                type="text"
                placeholder="Grado del niño (Si aplica)"
                value={form.gradonino}
                onChange={handleChange}
                required
                className="bg-white/70 border-gray-300 focus:border-primary focus:ring-primary mt-1"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 text-lg"
            >
              Enviar
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegistroRepresentante;

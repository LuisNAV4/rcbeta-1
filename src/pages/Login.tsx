import React, { useState } from "react";
import Header from "@/components/HeaderLogin";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { ArrowLeft, LogIn } from "lucide-react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login attempt:", { email, password });
    // Add your login logic here
  };

  return (
    <>
      <Header />
      <div className="relative min-h-screen flex items-center justify-center pt-24 md:pt-28">
        {/* Enhanced background matching the main site */}
        <div className="fixed inset-0 -z-10" aria-hidden="true">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/40 via-blue-400/30 to-white/95" />
          <div className="absolute inset-0 bg-gradient-radial from-blue-300/20 via-transparent to-transparent" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />

          {/* Diagonal decorative line */}
          <div className="absolute inset-0 overflow-hidden">
            <div
              className="absolute w-full h-6 bg-gradient-to-r from-orange-400 to-yellow-500 transform -rotate-12 opacity-80"
              style={{
                top: "60%",
                left: "-10%",
                width: "120%",
                animation: "shimmer 3s ease-in-out infinite alternate",
              }}
            />
          </div>
        </div>

        {/* Back to home button */}
        <Link
          to="/"
          className="absolute top-6 left-6 flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
        >
          <ArrowLeft className="h-5 w-5" />
          Volver al inicio
        </Link>

        {/* Login form */}
        <div className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl px-8 py-10 w-full max-w-md border border-white/40">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-primary/10 rounded-full">
                <LogIn className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-primary mb-2">
              Iniciar Sesión
            </h2>
            <p className="text-gray-600">Accede a tu cuenta escolar</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-primary font-medium">
                Correo electrónico
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="correo@ejemplo.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/70 border-gray-300 focus:border-primary focus:ring-primary"
                autoComplete="username"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-primary font-medium">
                Contraseña
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-white/70 border-gray-300 focus:border-primary focus:ring-primary"
                autoComplete="current-password"
                required
              />
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-2 rounded border-gray-300"
                />
                <span className="text-gray-600">Recordarme</span>
              </label>
              <a
                href="#"
                className="text-primary hover:text-primary/80 font-medium"
              >
                ¿Olvidaste tu contraseña?
              </a>
            </div>

            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 text-lg"
            >
              Iniciar Sesión
            </Button>
          </form>

          <div className="mt-6 text-center text-sm text-gray-600">
            ¿No tienes cuenta?{" "}
            <a
              href="#"
              className="text-primary hover:text-primary/80 font-medium"
            >
              Contacta con la administración
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
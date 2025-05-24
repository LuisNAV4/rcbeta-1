import React from "react";

const Login = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-transparent">
      {/* Fondo decorativo igual que el body */}
      <div className="fixed inset-0 -z-10 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-white/80 to-white/95" />
        <div className="absolute inset-0 bg-black/10" />
        <div className="background-wave" />
      </div>
      <form className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl px-8 py-10 w-full max-w-md border border-white/30">
        <h2 className="text-3xl font-bold text-center text-[color:hsl(var(--primary))] mb-8">Iniciar Sesión</h2>
        <div className="mb-6">
          <label className="block text-[color:hsl(var(--primary))] font-medium mb-2" htmlFor="email">
            Correo electrónico
          </label>
          <input
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[color:hsl(var(--primary))] bg-white/70"
            type="email"
            id="email"
            placeholder="correo@ejemplo.com"
            autoComplete="username"
          />
        </div>
        <div className="mb-8">
          <label className="block text-[color:hsl(var(--primary))] font-medium mb-2" htmlFor="password">
            Contraseña
          </label>
          <input
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[color:hsl(var(--primary))] bg-white/70"
            type="password"
            id="password"
            placeholder="********"
            autoComplete="current-password"
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 rounded-lg bg-primary text-white font-semibold text-lg hover:bg-primary/90 transition-colors"
        >
          Entrar
        </button>
      </form>
    </div>
  );
};

export default Login;

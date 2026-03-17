"use client";

export default function Hero() {
  const scrollToForm = () => {
    const el = document.getElementById("contact-form");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="min-h-screen flex items-center justify-center px-6 py-16 relative overflow-hidden"
      style={{ backgroundColor: "#0F1115" }}
    >
      <div className="max-w-2xl text-center relative z-10 flex flex-col items-center gap-6">
        <span
          className="inline-block px-5 py-2 rounded-full text-sm font-semibold"
          style={{
            backgroundColor: "rgba(200,164,93,0.10)",
            border: "1px solid rgba(200,164,93,0.30)",
            color: "#C8A45D",
          }}
        >
          Entrenamiento personal en Valencia
        </span>

        <h1
          className="text-4xl md:text-5xl font-extrabold leading-tight"
          style={{ color: "#F5F7FA" }}
        >
          Mejora tu físico con un plan <span style={{ color: "#C8A45D" }}>adaptado a ti</span>
        </h1>

        <p
          className="text-lg md:text-xl max-w-xl leading-relaxed"
          style={{ color: "#B8C0CC" }}
        >
          Entrenamiento, nutrición y seguimiento con un enfoque realista, presencial u online.
        </p>

        <div className="flex flex-col gap-3 items-center w-full max-w-sm mt-2">
          <button
            onClick={scrollToForm}
            className="w-full py-4 px-8 rounded-lg font-bold text-lg cursor-pointer border-none"
            style={{ backgroundColor: "#C8A45D", color: "#0F1115" }}
          >
            Reserva tu valoración gratuita
          </button>

          <button
            onClick={scrollToForm}
            className="block w-full py-3 px-8 rounded-lg font-semibold text-center"
            style={{ color: "#B8C0CC", border: "1px solid rgba(255,255,255,0.15)" }}
          >
            Prefiero hablar por WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
}
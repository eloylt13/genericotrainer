import ContactForm from "@/components/ContactForm";

export default function FinalCTA({
  quizAnswers,
}: {
  quizAnswers?: Record<string, string>;
}) {
  const colors = {
    bg: "#0F1115",
    card: "#171B22",
    border: "#2E3643",
    text: "#F5F7FA",
    textMuted: "#B8C0CC",
    accent: "#C8A45D",
  };

  return (
    <section
      id="cta-final"
      className="px-6 py-16 md:py-20"
      style={{ backgroundColor: colors.bg }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-8 md:gap-10 items-start">
        <div>
          <p
            className="text-[11px] font-bold tracking-[0.18em] uppercase mb-3"
            style={{ color: colors.accent }}
          >
            Empieza ahora
          </p>

          <h2
            className="text-3xl md:text-4xl font-extrabold leading-tight mb-5"
            style={{ color: colors.text }}
          >
            Reserva tu valoración gratuita y te orientaré según tu objetivo
          </h2>

          <p
            className="text-base md:text-lg leading-relaxed mb-6"
            style={{ color: colors.textMuted }}
          >
            Cuéntame qué quieres conseguir y veremos qué enfoque puede tener más
            sentido para ti, ya sea presencial, online o con un formato híbrido.
          </p>

          <div className="space-y-4">
            <div
              className="rounded-2xl p-5"
              style={{
                border: `1px solid ${colors.border}`,
                backgroundColor: colors.card,
              }}
            >
              <p
                className="font-bold mb-2"
                style={{ color: colors.text }}
              >
                ¿Qué pasa después?
              </p>

              <div
                className="space-y-2 text-sm leading-relaxed"
                style={{ color: colors.textMuted }}
              >
                <p>1. Me envías tu caso</p>
                <p>2. Lo reviso personalmente</p>
                <p>3. Te respondo con la mejor opción para ti</p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => {
                const el =
                  document.getElementById("contact-form") ||
                  document.getElementById("cta-final");
                if (el) {
                  el.scrollIntoView({ behavior: "smooth", block: "start" });
                }
              }}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-colors"
              style={{
                color: colors.text,
                border: `1px solid ${colors.border}`,
                backgroundColor: colors.card,
              }}
            >
              Prefiero hablar por WhatsApp
            </button>
          </div>
        </div>

        <ContactForm quizAnswers={quizAnswers} />
      </div>
    </section>
  );
}
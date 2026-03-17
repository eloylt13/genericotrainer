export default function AboutCoach() {
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
      className="px-6 py-14 md:py-16"
      style={{ backgroundColor: colors.bg }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[0.92fr_1.08fr] gap-8 md:gap-10 items-start">
          <div
            className="rounded-3xl p-8 md:p-10"
            style={{
              border: `1px solid ${colors.border}`,
              backgroundColor: colors.card,
            }}
          >
            <div className="flex flex-col items-center justify-center text-center h-full min-h-[280px]">
              <div
                className="w-28 h-28 rounded-full flex items-center justify-center mb-6"
                style={{
                  backgroundColor: "rgba(200, 164, 93, 0.08)",
                  border: "1px solid rgba(200, 164, 93, 0.28)",
                }}
              >
                <span
                  className="text-4xl font-extrabold"
                  style={{ color: colors.accent }}
                >
                  MC
                </span>
              </div>

              <h3
                className="text-2xl font-bold leading-tight mb-3"
                style={{ color: colors.text }}
              >
                Entrenamiento adaptado a cada persona
              </h3>

              <p
                className="text-sm md:text-base leading-relaxed max-w-md mb-6"
                style={{ color: colors.textMuted }}
              >
                Una demo pensada para mostrar una propuesta profesional,
                cercana y orientada a resultados sostenibles.
              </p>

              <div className="flex flex-wrap justify-center gap-3">
                <span
                  className="px-4 py-2 rounded-full text-sm font-semibold"
                  style={{
                    color: colors.text,
                    border: `1px solid ${colors.border}`,
                    backgroundColor: "rgba(255,255,255,0.02)",
                  }}
                >
                  1:1 personalizado
                </span>
                <span
                  className="px-4 py-2 rounded-full text-sm font-semibold"
                  style={{
                    color: colors.text,
                    border: `1px solid ${colors.border}`,
                    backgroundColor: "rgba(255,255,255,0.02)",
                  }}
                >
                  Presencial y online
                </span>
                <span
                  className="px-4 py-2 rounded-full text-sm font-semibold"
                  style={{
                    color: colors.text,
                    border: `1px solid ${colors.border}`,
                    backgroundColor: "rgba(255,255,255,0.02)",
                  }}
                >
                  Seguimiento real
                </span>
              </div>
            </div>
          </div>

          <div>
            <p
              className="text-[11px] font-bold tracking-[0.18em] uppercase mb-3"
              style={{ color: colors.accent }}
            >
              Sobre Momentum Coach
            </p>

            <h2
              className="text-3xl md:text-4xl font-extrabold leading-tight mb-5"
              style={{ color: colors.text }}
            >
              Entrenamiento personalizado, seguimiento real y un enfoque
              sostenible
            </h2>

            <div
              className="space-y-4 text-sm md:text-base leading-relaxed"
              style={{ color: colors.textMuted }}
            >
              <p>
                Esta demo está pensada para un entrenador personal que quiere
                transmitir claridad, cercanía y resultados realistas.
              </p>

              <p>
                El servicio combina entrenamiento, pautas de nutrición y
                seguimiento para ayudar a cada persona a avanzar con un método
                adaptado a su punto de partida, su objetivo y su rutina.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-7">
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
                  Modalidades
                </p>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: colors.textMuted }}
                >
                  Presencial, online e híbrido
                </p>
              </div>

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
                  Método
                </p>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: colors.textMuted }}
                >
                  Entrenamiento, nutrición y control del progreso
                </p>
              </div>

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
                  Enfoque
                </p>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: colors.textMuted }}
                >
                  Cercano, adaptable y orientado a resultados sostenibles
                </p>
              </div>
            </div>

            <div
              className="rounded-2xl p-5 mt-4"
              style={{
                border: `1px solid ${colors.border}`,
                backgroundColor: colors.card,
              }}
            >
              <div className="flex items-center justify-between gap-3 mb-3">
                <div>
                  <p
                    className="font-bold"
                    style={{ color: colors.text }}
                  >
                    Ubicación
                  </p>
                  <p
                    className="text-sm mt-1"
                    style={{ color: colors.textMuted }}
                  >
                    Valencia, España
                  </p>
                </div>

                <a
                  href="https://maps.google.com/?q=Valencia,España"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold px-3 py-2 rounded-lg"
                  style={{
                    color: colors.accent,
                    border: "1px solid rgba(200, 164, 93, 0.28)",
                    backgroundColor: "rgba(200, 164, 93, 0.08)",
                  }}
                >
                  Abrir en Maps
                </a>
              </div>

              <div
                className="rounded-xl overflow-hidden"
                style={{ border: `1px solid ${colors.border}` }}
              >
                <iframe
                  src="https://www.google.com/maps?q=Valencia,España&z=12&output=embed"
                  width="100%"
                  height="240"
                  style={{
                    border: 0,
                    filter:
                      "invert(90%) hue-rotate(180deg) brightness(0.95) contrast(0.9)",
                  }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación en Valencia"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
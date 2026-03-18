"use client";
import { useState } from "react";

const colors = {
  bg: "#0F1115",
  bgAlt: "#11151B",
  card: "#171B22",
  border: "#2E3643",
  text: "#F5F7FA",
  textMuted: "#B8C0CC",
  accent: "#C8A45D",
};

const steps = [
  {
    key: "objetivo",
    title: "¿Cuál es tu objetivo principal?",
    options: [
      { id: "perder-grasa", label: "Perder grasa", desc: "Quiero bajar de peso y verme mejor." },
      { id: "ganar-musculo", label: "Ganar músculo", desc: "Quiero un físico más fuerte y trabajado." },
      { id: "recomposicion", label: "Perder grasa y ganar músculo", desc: "Quiero cambiar mi físico de forma completa." },
      { id: "salud", label: "Mejorar salud y forma física", desc: "Quiero sentirme mejor y crear hábitos sostenibles." },
    ],
  },
  {
    key: "modalidad",
    title: "¿Cómo prefieres entrenar?",
    options: [
      { id: "presencial", label: "Presencial", desc: "Acompañamiento directo y trabajo adaptado a tu caso." },
      { id: "online", label: "Online con seguimiento", desc: "Plan adaptado y seguimiento sin depender de un lugar físico." },
      { id: "flexible", label: "La mejor opción para mí", desc: "Prefiero que me recomiendes según mi caso." },
    ],
  },
  {
    key: "freno",
    title: "¿Qué te está frenando más ahora mismo?",
    options: [
      { id: "tiempo", label: "No tengo tiempo", desc: "Necesito algo que encaje en mi rutina." },
      { id: "empezar", label: "No sé por dónde empezar", desc: "Quiero una guía clara y personalizada." },
      { id: "constancia", label: "Me cuesta ser constante", desc: "Necesito seguimiento y estructura." },
      { id: "resultados", label: "No veo resultados", desc: "Quiero dejar de improvisar y avanzar de verdad." },
    ],
  },
];

const summaryLabels = ["Objetivo", "Modalidad", "Freno"];

function CheckIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke={colors.accent}
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export default function QuickQualifier({
  onComplete,
}: {
  onComplete?: (answers: Record<string, string>) => void;
}) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [done, setDone] = useState(false);
  const [transitioning, setTransitioning] = useState(false);

  const handleSelect = (id: string) => {
    const newAnswers = [...answers];
    newAnswers[currentStep] = id;
    setAnswers(newAnswers);
    setTransitioning(true);

    if (currentStep < steps.length - 1) {
      setTimeout(() => {
        setCurrentStep((prev) => prev + 1);
        setTransitioning(false);
      }, 450);
    } else {
      setTimeout(() => {
        setDone(true);
        setTransitioning(false);

        if (onComplete) {
          const result: Record<string, string> = {};
          steps.forEach((step, i) => {
            const label = step.options.find((o) => o.id === newAnswers[i])?.label || "";
            result[step.key] = label;
          });
          onComplete(result);
        }
      }, 450);
    }
  };

  const getLabel = (stepIndex: number, id?: string) => {
    if (!id) return "";
    return steps[stepIndex].options.find((o) => o.id === id)?.label || "";
  };

  const scrollToNextSection = () => {
    const el =
      document.getElementById("cta-final") ||
      document.getElementById("contact-form") ||
      document.getElementById("hero");

    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const scrollToMoreContent = () => {
    window.scrollBy({
      top: Math.round(window.innerHeight * 0.72),
      behavior: "smooth",
    });
  };

  if (done) {
    return (
      <section
        className="relative min-h-[85vh] flex flex-col items-center justify-center px-5 py-8 pb-16"
        style={{ backgroundColor: colors.bg }}
      >
        <div className="max-w-md w-full flex flex-col items-center gap-4 text-center">
          <p
            className="text-[11px] font-bold tracking-[0.18em] uppercase"
            style={{ color: colors.accent }}
          >
            Momentum Coach
          </p>

          <div
            className="w-14 h-14 rounded-full flex items-center justify-center"
            style={{
              backgroundColor: colors.accent,
              boxShadow: "0 0 18px rgba(200,164,93,0.18)",
            }}
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke={colors.bg}
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>

          <div className="space-y-2 w-full">
            <p
              className="text-xs uppercase tracking-[0.16em]"
              style={{ color: colors.textMuted }}
            >
              Tus respuestas
            </p>

            <div className="w-full space-y-2 text-left">
              {answers.map((answer, index) => (
                <div
                  key={`${summaryLabels[index]}-${answer}`}
                  className="flex items-center justify-between gap-3 rounded-xl px-4 py-3"
                  style={{
                    border: `1px solid ${colors.border}`,
                    backgroundColor: colors.card,
                  }}
                >
                  <span
                    className="text-xs font-semibold uppercase tracking-[0.12em]"
                    style={{ color: colors.textMuted }}
                  >
                    {summaryLabels[index]}
                  </span>

                  <span
                    className="text-sm font-semibold text-right"
                    style={{ color: colors.accent }}
                  >
                    {getLabel(index, answer)}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-1">
            <p className="text-lg font-bold" style={{ color: colors.text }}>
              Perfecto. Ya sé qué puede encajar contigo.
            </p>
            <p className="text-sm" style={{ color: colors.textMuted }}>
              Ahora te enseño cómo podría ayudarte a conseguirlo con una estrategia clara y personalizada.
            </p>
          </div>

          <button
            onClick={scrollToNextSection}
            className="w-full max-w-xs py-4 rounded-xl font-bold text-base cursor-pointer border-none mt-2 transition-transform duration-200 hover:scale-[1.01]"
            style={{
              backgroundColor: colors.accent,
              color: colors.bg,
              boxShadow: "0 0 20px rgba(200,164,93,0.15)",
            }}
          >
            Reserva tu valoración gratuita
          </button>

          <button
            onClick={scrollToNextSection}
            className="block w-full max-w-xs py-3 rounded-xl font-semibold text-center text-sm transition-colors"
            style={{
              color: colors.textMuted,
              border: `1px solid ${colors.border}`,
              backgroundColor: "rgba(255,255,255,0.02)",
            }}
          >
            Prefiero hablar por WhatsApp
          </button>
        </div>

        <button
          type="button"
          onClick={scrollToMoreContent}
          aria-label="Ver más contenido"
          className="absolute bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-xs opacity-80 hover:opacity-100 transition-opacity"
          style={{ color: colors.textMuted }}
        >
          <span className="uppercase tracking-[0.14em]">Ver más</span>
          <svg
            className="animate-bounce"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke={colors.accent}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </button>
      </section>
    );
  }

  const step = steps[currentStep];

  return (
    <section
      className="relative min-h-[85vh] flex flex-col items-center justify-start px-5 pt-5 pb-16"
      style={{ backgroundColor: colors.bg }}
    >
      <div className="max-w-md w-full flex flex-col items-center gap-2.5">
        <p
          className="text-[11px] font-bold tracking-[0.18em] uppercase"
          style={{ color: colors.accent }}
        >
          Momentum Coach
        </p>

        <h1
          className="text-lg md:text-xl font-extrabold leading-snug text-center max-w-sm"
          style={{ color: colors.text }}
        >
          Encuentra la forma más realista de mejorar tu físico
        </h1>

        <p
          className="text-xs text-center leading-relaxed max-w-sm"
          style={{ color: colors.textMuted }}
        >
          Entrenamiento personalizado con seguimiento real, presencial u online.
        </p>

        <div className="flex gap-2 mt-1">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="h-1 rounded-full transition-all duration-300"
              style={{
                width: i <= currentStep ? "56px" : "40px",
                backgroundColor: i <= currentStep ? colors.accent : "rgba(255,255,255,0.10)",
              }}
            />
          ))}
        </div>

        <p className="text-xs" style={{ color: colors.textMuted }}>
          Paso {currentStep + 1} de 3
        </p>

        <h2
          className="text-base md:text-lg font-bold text-center mt-1"
          style={{ color: colors.text }}
        >
          {step.title}
        </h2>

        <div
          className={`w-full flex flex-col gap-2 transition-opacity duration-200 ${transitioning ? "opacity-60" : "opacity-100"
            }`}
        >
          {step.options.map((option) => {
            const isSelected = answers[currentStep] === option.id;

            return (
              <button
                key={option.id}
                onClick={() => !transitioning && handleSelect(option.id)}
                className="w-full text-left px-4 py-3 rounded-xl cursor-pointer transition-all duration-200 flex items-center gap-3"
                style={{
                  border: isSelected
                    ? `1px solid ${colors.accent}`
                    : `1px solid ${colors.border}`,
                  backgroundColor: isSelected ? "rgba(200,164,93,0.10)" : colors.card,
                  boxShadow: isSelected ? "0 0 15px rgba(200,164,93,0.12)" : "none",
                }}
                aria-pressed={isSelected}
              >
                <div className="flex-1">
                  <p
                    className="font-semibold text-sm"
                    style={{ color: isSelected ? colors.accent : colors.text }}
                  >
                    {option.label}
                  </p>
                  <p className="text-xs mt-0.5" style={{ color: colors.textMuted }}>
                    {option.desc}
                  </p>
                </div>
                {isSelected && <CheckIcon />}
              </button>
            );
          })}
        </div>
      </div>

      <button
        type="button"
        onClick={scrollToMoreContent}
        aria-label="Ver más contenido"
        className="absolute bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-xs opacity-80 hover:opacity-100 transition-opacity"
        style={{ color: colors.textMuted }}
      >
        <span className="uppercase tracking-[0.14em]">Ver más</span>
        <svg
          className="animate-bounce"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke={colors.accent}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
    </section>
  );
}
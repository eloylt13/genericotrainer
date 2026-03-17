const items = [
    {
        question: "¿Necesito experiencia previa para empezar?",
        answer:
            "No. El servicio se adapta al punto de partida de cada persona, tanto si vienes de cero como si ya has entrenado antes.",
    },
    {
        question: "¿Cuánto tiempo a la semana necesito?",
        answer:
            "Depende de tu objetivo y de tu rutina, pero la idea es construir un plan realista que puedas mantener.",
    },
    {
        question: "¿También trabajas online?",
        answer:
            "Sí. La modalidad puede ser presencial, online o una combinación de ambas, según lo que mejor encaje contigo.",
    },
    {
        question: "¿La valoración inicial es gratuita?",
        answer:
            "Sí. Es el primer paso para conocer tu caso y ver qué enfoque tiene más sentido para ti.",
    },
    {
        question: "¿Qué incluye el seguimiento?",
        answer:
            "Incluye revisión del progreso, ajustes y acompañamiento durante el proceso para que no entrenes a ciegas.",
    },
    {
        question: "¿Tengo que seguir una dieta estricta?",
        answer:
            "No necesariamente. La idea es darte pautas realistas y sostenibles que encajen con tu día a día.",
    },
];

export default function FAQ() {
    const colors = {
        bg: "#11151B",
        card: "#171B22",
        border: "#2E3643",
        text: "#F5F7FA",
        textMuted: "#B8C0CC",
        accent: "#C8A45D",
    };

    return (
        <section
            className="px-6 py-12 md:py-16"
            style={{ backgroundColor: colors.bg }}
        >
            <div className="max-w-4xl mx-auto">
                <div className="max-w-2xl mx-auto text-center mb-10 md:mb-12">
                    <p
                        className="text-[11px] font-bold tracking-[0.18em] uppercase mb-3"
                        style={{ color: colors.accent }}
                    >
                        Preguntas frecuentes
                    </p>

                    <h2
                        className="text-3xl md:text-4xl font-extrabold leading-tight"
                        style={{ color: colors.text }}
                    >
                        Resolvemos las dudas más habituales antes de empezar
                    </h2>
                </div>

                <div className="space-y-4">
                    {items.map((item) => (
                        <details
                            key={item.question}
                            className="group rounded-2xl p-5 md:p-6"
                            style={{
                                border: `1px solid ${colors.border}`,
                                backgroundColor: colors.card,
                            }}
                        >
                            <summary className="list-none cursor-pointer flex items-center justify-between gap-4">
                                <span
                                    className="font-bold text-base md:text-lg"
                                    style={{ color: colors.text }}
                                >
                                    {item.question}
                                </span>
                                <span
                                    className="text-xl transition-transform group-open:rotate-45"
                                    style={{ color: colors.accent }}
                                >
                                    +
                                </span>
                            </summary>

                            <p
                                className="text-sm md:text-base leading-relaxed mt-4 pr-6"
                                style={{ color: colors.textMuted }}
                            >
                                {item.answer}
                            </p>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
}
export default function Programs() {
    const colors = {
        bg: "#0F1115",
        card: "#171B22",
        cardAlt: "#1D232D",
        border: "#2E3643",
        text: "#F5F7FA",
        textMuted: "#B8C0CC",
        accent: "#C8A45D",
    };

    const programs = [
        {
            title: "Entrenamiento presencial",
            subtitle: "Acompañamiento directo",
            description:
                "Ideal si buscas corrección técnica, cercanía y más control durante el proceso.",
            bullets: [
                "Sesiones personalizadas",
                "Seguimiento del progreso",
                "Ajustes según evolución",
                "Ideal si valoras supervisión directa",
            ],
        },
        {
            title: "Seguimiento online",
            subtitle: "Flexible y eficaz",
            description:
                "Una opción pensada para personas que quieren resultados con una estructura clara y sin depender de un lugar físico.",
            bullets: [
                "Plan de entrenamiento personalizado",
                "Pautas de nutrición adaptadas",
                "Seguimiento y revisiones",
                "Ideal si necesitas flexibilidad",
            ],
        },
        {
            title: "Plan híbrido",
            subtitle: "Lo mejor de ambos formatos",
            description:
                "Combina la flexibilidad del seguimiento online con sesiones presenciales puntuales para revisar técnica, progreso y estrategia.",
            bullets: [
                "Base de trabajo online",
                "Sesiones presenciales de control",
                "Ajustes periódicos",
                "Ideal si quieres equilibrio y seguimiento",
            ],
        },
    ];

    return (
        <section
            className="px-6 py-16 md:py-20"
            style={{ backgroundColor: colors.bg }}
        >
            <div className="max-w-6xl mx-auto">
                <div className="max-w-2xl mx-auto text-center mb-10 md:mb-12">
                    <p
                        className="text-[11px] font-bold tracking-[0.18em] uppercase mb-3"
                        style={{ color: colors.accent }}
                    >
                        Servicios
                    </p>

                    <h2
                        className="text-3xl md:text-4xl font-extrabold leading-tight"
                        style={{ color: colors.text }}
                    >
                        Elige la modalidad que mejor encaje contigo
                    </h2>

                    <p
                        className="text-base md:text-lg leading-relaxed mt-4"
                        style={{ color: colors.textMuted }}
                    >
                        La base siempre es la misma: entrenamiento, nutrición y seguimiento.
                        Lo que cambia es el formato que mejor encaja contigo y con tu rutina.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {programs.map((program, index) => (
                        <div
                            key={program.title}
                            className="rounded-2xl p-6 md:p-7"
                            style={{
                                border: `1px solid ${index === 0 ? colors.accent : colors.border}`,
                                backgroundColor: index === 0 ? colors.cardAlt : colors.card,
                                boxShadow:
                                    index === 0 ? "0 0 20px rgba(200,164,93,0.08)" : "none",
                            }}
                        >
                            <div className="mb-4">
                                <p
                                    className="text-xs font-bold tracking-[0.16em] uppercase mb-2"
                                    style={{ color: colors.accent }}
                                >
                                    {program.subtitle}
                                </p>

                                <h3
                                    className="text-2xl font-bold leading-tight"
                                    style={{ color: colors.text }}
                                >
                                    {program.title}
                                </h3>
                            </div>

                            <p
                                className="text-sm md:text-base leading-relaxed mb-5"
                                style={{ color: colors.textMuted }}
                            >
                                {program.description}
                            </p>

                            <ul className="space-y-3">
                                {program.bullets.map((bullet) => (
                                    <li
                                        key={bullet}
                                        className="flex items-start gap-3 text-sm md:text-base"
                                        style={{ color: colors.text }}
                                    >
                                        <span
                                            className="mt-2 w-2 h-2 rounded-full shrink-0"
                                            style={{ backgroundColor: colors.accent }}
                                        />
                                        <span>{bullet}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="max-w-2xl mx-auto text-center mt-10">
                    <p
                        className="text-sm md:text-base leading-relaxed"
                        style={{ color: colors.textMuted }}
                    >
                        No hace falta decidirlo todo ahora. En la valoración inicial se puede
                        ver qué opción tiene más sentido para tu caso.
                    </p>
                </div>
            </div>
        </section>
    );
}
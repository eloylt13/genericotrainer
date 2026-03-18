export default function Benefits() {
    const colors = {
        bg: "#0F1115",
        card: "#171B22",
        border: "#2E3643",
        text: "#F5F7FA",
        textMuted: "#B8C0CC",
        accent: "#C8A45D",
    };

    const benefits = [
        {
            title: "Resultados más eficientes",
            description:
                "Entrena con una estructura pensada para tu objetivo, tu nivel y tu rutina real.",
        },
        {
            title: "Entrenamiento + nutrición",
            description:
                "No solo sigues ejercicios: entiendes mejor cómo avanzar con una estrategia más completa.",
        },
        {
            title: "Seguimiento continuo",
            description:
                "Tienes control, ajustes y acompañamiento para no perder el rumbo a mitad del proceso.",
        },
        {
            title: "Presencial u online",
            description:
                "Elige la forma de trabajar que mejor encaje contigo y con tu día a día.",
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
                        Beneficios
                    </p>

                    <h2
                        className="text-3xl md:text-4xl font-extrabold leading-tight"
                        style={{ color: colors.text }}
                    >
                        Deja de improvisar y empieza a avanzar con una estrategia clara
                    </h2>

                    <p
                        className="text-base md:text-lg leading-relaxed mt-4"
                        style={{ color: colors.textMuted }}
                    >
                        Cuando tienes un plan adaptado a ti, todo se vuelve más simple, más
                        sostenible y más eficaz.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                    {benefits.map((benefit) => (
                        <div
                            key={benefit.title}
                            className="rounded-2xl p-6 md:p-7"
                            style={{
                                border: `1px solid ${colors.border}`,
                                backgroundColor: colors.card,
                            }}
                        >
                            <div
                                className="w-10 h-10 rounded-full flex items-center justify-center mb-4"
                                style={{
                                    backgroundColor: "rgba(200, 164, 93, 0.10)",
                                    border: `1px solid rgba(200, 164, 93, 0.30)`,
                                }}
                            >
                                <div
                                    className="w-2.5 h-2.5 rounded-full"
                                    style={{ backgroundColor: colors.accent }}
                                />
                            </div>

                            <h3
                                className="text-xl font-bold leading-snug mb-3"
                                style={{ color: colors.text }}
                            >
                                {benefit.title}
                            </h3>

                            <p
                                className="text-sm md:text-base leading-relaxed"
                                style={{ color: colors.textMuted }}
                            >
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
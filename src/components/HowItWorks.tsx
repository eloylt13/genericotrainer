export default function HowItWorks() {
    const colors = {
        bg: "#11151B",
        card: "#171B22",
        border: "#2E3643",
        text: "#F5F7FA",
        textMuted: "#B8C0CC",
        accent: "#C8A45D",
    };

    const steps = [
        {
            number: "01",
            title: "Me cuentas tu objetivo y tu punto de partida",
            description:
                "Primero revisamos qué quieres conseguir, cómo estás ahora y qué opción encaja mejor contigo.",
        },
        {
            number: "02",
            title: "Hacemos una valoración inicial gratuita",
            description:
                "Resolvemos dudas, revisamos tu caso y definimos un enfoque realista según tu situación.",
        },
        {
            number: "03",
            title: "Empiezas con una estrategia adaptada a ti",
            description:
                "Recibes entrenamiento, pautas de nutrición y seguimiento para avanzar con más estructura y claridad.",
        },
    ];

    return (
        <section
            className="px-6 py-12 md:py-16"
            style={{ backgroundColor: colors.bg }}
        >
            <div className="max-w-6xl mx-auto">
                <div className="max-w-2xl mx-auto text-center mb-10 md:mb-12">
                    <p
                        className="text-[11px] font-bold tracking-[0.18em] uppercase mb-3"
                        style={{ color: colors.accent }}
                    >
                        Cómo funciona
                    </p>

                    <h2
                        className="text-3xl md:text-4xl font-extrabold leading-tight"
                        style={{ color: colors.text }}
                    >
                        Así es el proceso para empezar
                    </h2>

                    <p
                        className="text-base md:text-lg leading-relaxed mt-4"
                        style={{ color: colors.textMuted }}
                    >
                        Sin complicarte, sin promesas vacías y con un enfoque claro desde el
                        principio.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
                    {steps.map((step) => (
                        <div
                            key={step.number}
                            className="rounded-2xl p-6 md:p-7"
                            style={{
                                border: `1px solid ${colors.border}`,
                                backgroundColor: colors.card,
                            }}
                        >
                            <p
                                className="text-sm font-extrabold tracking-[0.18em] uppercase mb-4"
                                style={{ color: colors.accent }}
                            >
                                {step.number}
                            </p>

                            <h3
                                className="text-xl font-bold leading-snug mb-3"
                                style={{ color: colors.text }}
                            >
                                {step.title}
                            </h3>

                            <p
                                className="text-sm md:text-base leading-relaxed"
                                style={{ color: colors.textMuted }}
                            >
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
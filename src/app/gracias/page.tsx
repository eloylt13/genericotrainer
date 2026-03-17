import Link from "next/link";

export default function GraciasPage() {
    const colors = {
        bg: "#0F1115",
        card: "#171B22",
        border: "#2E3643",
        text: "#F5F7FA",
        textMuted: "#B8C0CC",
        accent: "#C8A45D",
    };

    return (
        <main
            className="min-h-screen px-6 py-16 flex items-center justify-center"
            style={{ backgroundColor: colors.bg }}
        >
            <div className="max-w-xl w-full text-center flex flex-col items-center gap-5">
                <p
                    className="text-[11px] font-bold tracking-[0.18em] uppercase"
                    style={{ color: colors.accent }}
                >
                    Momentum Coach
                </p>

                <div
                    className="w-14 h-14 rounded-full flex items-center justify-center shadow-[0_0_18px_rgba(200,164,93,0.18)]"
                    style={{ backgroundColor: colors.accent }}
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

                <h1
                    className="text-3xl md:text-4xl font-extrabold leading-tight"
                    style={{ color: colors.text }}
                >
                    Gracias, he recibido tu solicitud
                </h1>

                <p
                    className="text-base md:text-lg leading-relaxed max-w-lg"
                    style={{ color: colors.textMuted }}
                >
                    Revisaré tu mensaje y te responderé lo antes posible para orientarte
                    según tu objetivo.
                </p>

                <p
                    className="text-sm leading-relaxed max-w-lg"
                    style={{ color: colors.textMuted }}
                >
                    Esta página forma parte de una demo genérica de landing para
                    entrenador personal.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <Link
                        href="/"
                        className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-bold text-base no-underline"
                        style={{
                            backgroundColor: colors.accent,
                            color: colors.bg,
                        }}
                    >
                        Volver al inicio
                    </Link>

                    <Link
                        href="/#cta-final"
                        className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold text-sm no-underline"
                        style={{
                            color: colors.textMuted,
                            border: `1px solid ${colors.border}`,
                            backgroundColor: colors.card,
                        }}
                    >
                        Volver al formulario
                    </Link>
                </div>
            </div>
        </main>
    );
}
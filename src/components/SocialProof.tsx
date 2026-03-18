export default function SocialProof() {
    const testimonials = [
        {
            name: "Ejemplo de cliente",
            result: "Más estructura y mejores resultados",
            text:
                "Lo que más valoro es tener una guía clara, un seguimiento constante y un enfoque que se adapta de verdad a mi rutina.",
        },
        {
            name: "Ejemplo de cliente",
            result: "Cambio físico visible",
            text:
                "Por primera vez sentí que no estaba improvisando. Todo tenía sentido y se notaba tanto en el progreso como en la constancia.",
        },
        {
            name: "Ejemplo de cliente",
            result: "Más confianza y adherencia",
            text:
                "El acompañamiento y la personalización marcan la diferencia. Me resultó mucho más fácil mantener el proceso.",
        },
    ];

    const highlights = [
        {
            title: "Seguimiento continuo",
            description: "Ajustes y acompañamiento para no perder el rumbo.",
        },
        {
            title: "Entrenamiento + nutrición",
            description: "Una estructura más completa para avanzar con sentido.",
        },
        {
            title: "Proceso personalizado",
            description: "Adaptado a tu objetivo, tu nivel y tu rutina real.",
        },
    ];

    return (
        <section
            className="px-6 py-16 md:py-20"
            style={{ backgroundColor: "#11151B" }}
        >
            <div className="max-w-6xl mx-auto">
                <div className="max-w-2xl mx-auto text-center mb-10 md:mb-12">
                    <p
                        className="text-[11px] font-bold tracking-[0.18em] uppercase mb-3"
                        style={{ color: "#C8A45D" }}
                    >
                        Prueba social
                    </p>

                    <h2 className="text-3xl md:text-4xl font-extrabold leading-tight text-white">
                        Lo que transmite un proceso bien trabajado
                    </h2>

                    <p className="text-base md:text-lg leading-relaxed mt-4 text-[#B8C0CC]">
                        Esta demo muestra cómo presentar testimonios, confianza y resultados
                        de forma clara, creíble y orientada a conversión.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {testimonials.map((item, index) => (
                        <div
                            key={`${item.name}-${index}`}
                            className="rounded-2xl p-6 md:p-7"
                            style={{
                                border: `1px solid ${index === 0 ? "#C8A45D" : "#2E3643"}`,
                                backgroundColor: index === 0 ? "#1D232D" : "#171B22",
                                boxShadow:
                                    index === 0 ? "0 0 20px rgba(200,164,93,0.08)" : "none",
                            }}
                        >
                            <div className="mb-4">
                                <p
                                    className="text-xs font-bold tracking-[0.16em] uppercase mb-2"
                                    style={{ color: "#C8A45D" }}
                                >
                                    {item.result}
                                </p>

                                <p className="text-white text-lg font-bold">{item.name}</p>
                            </div>

                            <p className="text-[#D1D5DB] text-sm md:text-base leading-relaxed">
                                “{item.text}”
                            </p>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
                    {highlights.map((item) => (
                        <div
                            key={item.title}
                            className="rounded-2xl p-6 text-center"
                            style={{
                                border: "1px solid #2E3643",
                                backgroundColor: "#171B22",
                            }}
                        >
                            <p
                                className="text-2xl font-extrabold"
                                style={{ color: "#C8A45D" }}
                            >
                                {item.title}
                            </p>
                            <p className="text-[#B8C0CC] text-sm mt-3 leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
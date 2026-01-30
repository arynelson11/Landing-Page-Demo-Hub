import { MotionSection } from "@/components/ui/motion-section";

const steps = [
    {
        step: "01",
        title: "Call rápida",
        desc: "15 min para entender seu negócio e alinhar expectativas.",
    },
    {
        step: "02",
        title: "Personalização",
        desc: "Ajustamos a plataforma com sua marca e cores.",
    },
    {
        step: "03",
        title: "Entrega + Treinamento",
        desc: "Seu site no ar e você dominando o painel administrativo.",
    },
    {
        step: "04",
        title: "Suporte Contínuo",
        desc: "Estamos juntos para garantir que tudo funcione perfeitamente.",
    },
];

export function Timeline() {
    return (
        <section className="py-24 bg-zinc-50 border-y border-zinc-100">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-zinc-950 md:text-4xl">Como funciona</h2>
                </div>

                <div className="relative">
                    {/* Thread Line - Hidden on Mobile, Visible on Desktop */}
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-zinc-200 -translate-y-1/2 z-0" />

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 relative z-10">
                        {steps.map((item, index) => (
                            <MotionSection
                                key={item.step}
                                delay={index * 0.15}
                                className="flex flex-col md:items-center md:text-center bg-zinc-50 md:bg-transparent p-4 md:p-0 rounded-xl relative z-10"
                            >
                                <div className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-zinc-900 to-zinc-700 text-white font-bold text-lg md:text-xl mb-4 shadow-lg shadow-zinc-500/20 mx-auto md:mx-auto border-4 border-white">
                                    {item.step}
                                </div>
                                <h3 className="text-xl font-semibold text-zinc-900 mb-2">{item.title}</h3>
                                <p className="text-zinc-600 text-sm md:text-base max-w-xs mx-auto">{item.desc}</p>
                            </MotionSection>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

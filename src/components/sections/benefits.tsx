"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const benefits = [
    "Mais leads via WhatsApp",
    "Catálogo premium e rápido",
    "Painel simples para cadastrar imóveis",
    "Destaques e organização",
    "Base para SEO e Analytics",
];

export function Benefits() {
    return (
        <section className="bg-zinc-50 py-24">
            <div className="container mx-auto px-4">
                <div className="grid gap-12 md:grid-cols-2 md:items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl font-bold tracking-tight text-zinc-950 md:text-4xl">
                            Desenvolvido para alta performance
                        </h2>
                        <p className="mt-4 text-lg text-zinc-600">
                            Não é apenas um site bonito. É uma ferramenta de vendas projetada para transformar visitantes em contatos reais.
                        </p>
                    </motion.div>

                    <div className="space-y-4">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className="flex items-center gap-3"
                            >
                                <CheckCircle2 className="h-6 w-6 text-zinc-900" />
                                <span className="text-lg font-medium text-zinc-800">{benefit}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

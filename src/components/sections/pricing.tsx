"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const plans = [
    {
        name: "Essencial",
        price: "397",
        setup: "2.500",
        features: ["Até 50 imóveis", "Hospedagem inclusa", "Atualizações mensais", "Suporte padrão"],
    },
    {
        name: "Profissional",
        price: "497",
        setup: "2.500",
        popular: true,
        features: [
            "Imóveis ilimitados",
            "Destaques na home",
            "Hospedagem inclusa",
            "Atualizações mensais",
            "Suporte prioritário",
        ],
    },
    {
        name: "Elite",
        price: "697",
        setup: "2.500",
        features: [
            "SEO Otimizado (Básico-Intermediário)",
            "Analytics avançado",
            "Performance Tuning",
            "Hospedagem inclusa",
            "Atualizações mensais",
        ],
    },
];

export function Pricing() {
    return (
        <section className="py-24">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-zinc-950 md:text-4xl">Planos e Investimento</h2>
                    <p className="mt-4 text-lg text-zinc-600">Escolha o modelo ideal para o seu momento.</p>
                </div>

                <div className="grid gap-8 md:grid-cols-3 lg:gap-12">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className={cn(
                                "relative flex h-full flex-col p-8 transition-all hover:border-zinc-300",
                                plan.popular && "border-zinc-950 shadow-md scale-105 z-10"
                            )}>
                                {plan.popular && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-zinc-950 px-3 py-1 text-sm font-medium text-white">
                                        Mais escolhido
                                    </div>
                                )}

                                <h3 className="text-xl font-semibold text-zinc-900">{plan.name}</h3>
                                <div className="mt-4 mb-8">
                                    <span className="text-4xl font-bold text-zinc-950">R$ {plan.price}</span>
                                    <span className="text-zinc-500">/mês</span>
                                    <p className="text-sm text-zinc-500 mt-1">Setup único de R$ {plan.setup}</p>
                                </div>

                                <ul className="space-y-4 mb-8 flex-1">
                                    {plan.features.map((feature) => (
                                        <li key={feature} className="flex items-center gap-3">
                                            <Check className="h-5 w-5 text-zinc-950 shrink-0" />
                                            <span className="text-zinc-600">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Button asChild className={cn("w-full", !plan.popular && "bg-zinc-100 text-zinc-900 hover:bg-zinc-200")}>
                                    <Link href="https://wa.me/message/3CPMOVVNIKSDG1" target="_blank">
                                        Selecionar {plan.name}
                                    </Link>
                                </Button>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* Project Fechado Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-12"
                >
                    <Card className="bg-zinc-950 text-white p-8 md:p-12">
                        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
                            <div className="flex-1 space-y-4 text-center md:text-left">
                                <div className="flex items-center justify-center md:justify-start gap-2">
                                    <Star className="h-6 w-6 text-zinc-300" fill="currentColor" />
                                    <h3 className="text-2xl font-bold">Projeto Fechado</h3>
                                </div>
                                <p className="text-zinc-400 max-w-lg">
                                    Criação completa de plataforma web imobiliária exclusiva. Ideal para quem busca personalização total e propriedade do código.
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-zinc-300 pt-2">
                                    <span className="flex items-center gap-2"><Check className="h-4 w-4" /> Design UI/UX alto padrão</span>
                                    <span className="flex items-center gap-2"><Check className="h-4 w-4" /> Painel administrativo próprio</span>
                                    <span className="flex items-center gap-2"><Check className="h-4 w-4" /> Gestão de imóveis</span>
                                    <span className="flex items-center gap-2"><Check className="h-4 w-4" /> Performance e SEO</span>
                                    <span className="flex items-center gap-2"><Check className="h-4 w-4" /> Integração WhatsApp e mapas</span>
                                </div>
                            </div>

                            <div className="text-center shrink-0">
                                <span className="block text-5xl font-bold mb-2">R$ 8.000</span>
                                <span className="block text-zinc-400 text-sm mb-6">Pagamento único</span>
                                <Button asChild className="w-full bg-white text-zinc-950 hover:bg-zinc-200 h-12 px-8">
                                    <Link href="https://wa.me/message/3CPMOVVNIKSDG1" target="_blank">
                                        Consultar disponibilidade
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </Card>
                </motion.div>
            </div>
        </section>
    );
}

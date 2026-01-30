"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";
import Link from "next/link";

export function Hero() {
    return (
        <section className="relative flex flex-col items-center justify-center px-4 pt-32 pb-20 text-center md:pt-40 md:pb-28 overflow-hidden">
            {/* Subtle radial gradient background */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-100 via-white to-white opacity-70"></div>

            <div className="max-w-4xl space-y-8 relative z-10">
                {/* Headline Part 1 */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="text-5xl font-bold tracking-tight text-zinc-950 sm:text-6xl md:text-7xl"
                >
                    Seu site precisa vender.
                </motion.h1>

                {/* Headline Part 2 */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                    <span className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl bg-gradient-to-r from-zinc-500 via-indigo-900 to-indigo-600 bg-clip-text text-transparent">
                        Não apenas existir.
                    </span>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="mx-auto max-w-2xl text-lg text-zinc-600 md:text-xl leading-relaxed"
                >
                    Plataforma premium para <span className="text-zinc-900 font-medium">corretores e imobiliárias</span>: site rápido, catálogo elegante e painel administrativo para cadastrar imóveis em minutos.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="flex flex-col items-center justify-center gap-4 sm:flex-row"
                >
                    <Button asChild size="lg" className="h-14 px-8 text-lg bg-[#4F46E5] hover:bg-[#4338ca] shadow-lg shadow-indigo-500/25 transition-all hover:scale-105 active:scale-95 group">
                        <Link href="#demo">
                            Ver demonstração
                            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </Button>

                    <Button asChild variant="outline" size="lg" className="h-14 px-8 text-lg border-zinc-200 text-zinc-700 hover:bg-zinc-50 hover:text-[#06B6D4] hover:border-cyan-200 transition-all active:scale-95">
                        <Link href="https://wa.me/message/3CPMOVVNIKSDG1" target="_blank">
                            <MessageCircle className="mr-2 h-5 w-5 text-green-600" />
                            Agendar apresentação
                        </Link>
                    </Button>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="text-sm text-zinc-500"
                >
                    * O painel administrativo é protegido por login. Demonstração completa em call.
                </motion.p>
            </div>
        </section>
    );
}

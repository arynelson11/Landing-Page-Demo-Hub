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

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl space-y-8"
            >
                <h1 className="text-5xl font-bold tracking-tight text-zinc-950 sm:text-6xl md:text-7xl">
                    Seu site precisa vender. <br className="hidden md:block" />
                    <span className="bg-gradient-to-r from-zinc-400 to-zinc-600 bg-clip-text text-transparent">Não apenas existir.</span>
                </h1>

                <p className="mx-auto max-w-2xl text-lg text-zinc-600 md:text-xl leading-relaxed">
                    Plataforma premium para <span className="text-zinc-900 font-medium">corretores e imobiliárias</span>: site rápido, catálogo elegante e painel administrativo para cadastrar imóveis em minutos.
                </p>

                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <Button asChild size="lg" className="h-14 px-8 text-lg bg-gradient-to-r from-zinc-900 to-zinc-800 hover:to-zinc-700 shadow-lg shadow-zinc-500/20 transition-all hover:scale-105">
                        <Link href="#demo">
                            Ver demonstração
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </Button>

                    <Button asChild variant="outline" size="lg" className="h-14 px-8 text-lg border-zinc-200 hover:bg-zinc-50 hover:text-zinc-900 transition-all">
                        <Link href="https://wa.me/message/3CPMOVVNIKSDG1" target="_blank">
                            <MessageCircle className="mr-2 h-5 w-5 text-green-600" />
                            Agendar apresentação
                        </Link>
                    </Button>
                </div>

                <p className="text-sm text-zinc-500">
                    * O painel administrativo é protegido por login. Demonstração completa em call.
                </p>
            </motion.div>
        </section>
    );
}

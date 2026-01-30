"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";
import Link from "next/link";

export function Hero() {
    return (
        <section className="relative flex flex-col items-center justify-center px-4 pt-32 pb-20 text-center md:pt-40 md:pb-28">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl space-y-8"
            >
                <h1 className="text-5xl font-bold tracking-tight text-zinc-950 sm:text-6xl md:text-7xl">
                    Seu site precisa vender. <br className="hidden md:block" />
                    <span className="text-zinc-400">Não apenas existir.</span>
                </h1>

                <p className="mx-auto max-w-2xl text-lg text-zinc-600 md:text-xl leading-relaxed">
                    Plataforma premium para corretores e imobiliárias: site rápido, catálogo elegante e painel administrativo para cadastrar imóveis em minutos.
                </p>

                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <Button asChild size="lg" className="h-14 px-8 text-lg">
                        <Link href="#demo">
                            Ver demonstração
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </Button>

                    <Button asChild variant="outline" size="lg" className="h-14 px-8 text-lg">
                        <Link href="https://wa.me/message/3CPMOVVNIKSDG1" target="_blank">
                            <MessageCircle className="mr-2 h-5 w-5" />
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

"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Lock } from "lucide-react";
import Link from "next/link";

export function Demo() {
    return (
        <section id="demo" className="container mx-auto px-4 py-20 md:py-32">
            <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
                {/* Card 1: Site Público */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <Card className="flex h-full flex-col justify-between p-8 sm:p-10 hover:border-zinc-300 transition-colors">
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="h-10 w-10 rounded-full bg-zinc-100 flex items-center justify-center">
                                    <ExternalLink className="h-5 w-5 text-zinc-600" />
                                </div>
                                <h3 className="text-2xl font-semibold text-zinc-950">Site público (demo)</h3>
                            </div>
                            <p className="text-zinc-600">
                                A experiência que seus clientes terão. Navegação rápida, fotos grandes e design focado em conversão de leads.
                            </p>
                        </div>
                        <div className="mt-8">
                            <Button asChild className="w-full" variant="secondary">
                                <Link href="https://lumina-estates-nine.vercel.app/" target="_blank">
                                    Abrir site
                                    <ExternalLink className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </div>
                    </Card>
                </motion.div>

                {/* Card 2: Painel Admin */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <Card className="flex h-full flex-col justify-between p-8 sm:p-10 border-zinc-200 bg-zinc-50/50">
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="h-10 w-10 rounded-full bg-zinc-200 flex items-center justify-center">
                                    <Lock className="h-5 w-5 text-zinc-600" />
                                </div>
                                <h3 className="text-2xl font-semibold text-zinc-950">Painel administrativo</h3>
                                <span className="ml-auto text-xs font-medium text-zinc-500 uppercase tracking-wider border border-zinc-200 px-2 py-1 rounded-full bg-white">
                                    Área protegida
                                </span>
                            </div>
                            <p className="text-zinc-600">
                                Onde você cadastra imóveis e gerencia leads. Interface simplificada para você não perder tempo.
                            </p>
                            <p className="text-sm text-zinc-500 italic">
                                Acesso com e-mail e senha (protegido). Eu te mostro ao vivo na call.
                            </p>
                        </div>
                        <div className="mt-8">
                            <Button asChild className="w-full opacity-90" variant="outline" disabled>
                                <span className="flex items-center justify-center">
                                    <Lock className="mr-2 h-4 w-4" />
                                    Acesso Restrito
                                </span>
                            </Button>
                        </div>
                    </Card>
                </motion.div>
            </div>
        </section>
    );
}

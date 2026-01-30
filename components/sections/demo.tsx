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
                    <Card className="flex h-full flex-col justify-between p-8 sm:p-10 transition-all duration-300 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/5 hover:-translate-y-1 group">
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                                    <ExternalLink className="h-5 w-5 text-blue-600" />
                                </div>
                                <h3 className="text-2xl font-semibold text-zinc-950">Site público (demo)</h3>
                            </div>
                            <p className="text-zinc-600">
                                A experiência que seus clientes terão. Navegação rápida, fotos grandes e design focado em conversão de leads.
                            </p>
                        </div>
                        <div className="mt-8">
                            <Button asChild className="w-full bg-white border border-blue-100 text-blue-600 hover:bg-blue-50 hover:border-blue-200 shadow-sm" variant="secondary">
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
                    <Card className="flex h-full flex-col justify-between p-8 sm:p-10 border-zinc-200 bg-zinc-50/50 transition-all duration-300 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-500/5 hover:-translate-y-1 group">
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="h-10 w-10 rounded-full bg-zinc-200 flex items-center justify-center group-hover:bg-indigo-100 transition-colors">
                                    <Lock className="h-5 w-5 text-zinc-600 group-hover:text-indigo-600 transition-colors" />
                                </div>
                                <h3 className="text-2xl font-semibold text-zinc-950">Painel administrativo</h3>
                                <span className="ml-auto text-xs font-medium text-indigo-700 uppercase tracking-wider border border-indigo-100 px-2 py-1 rounded-full bg-indigo-50">
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
                            <Button asChild className="w-full opacity-90 border-zinc-200" variant="outline" disabled>
                                <span className="flex items-center justify-center text-zinc-500">
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

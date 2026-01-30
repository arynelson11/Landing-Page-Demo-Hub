"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Lock } from "lucide-react";
import Link from "next/link";
import { LaptopMock } from "@/components/ui/laptop-mock";
import { MotionSection } from "@/components/ui/motion-section";

export function Demo() {
    return (
        <section id="demo" className="container mx-auto px-4 py-20 md:py-32 overflow-hidden">
            <div className="space-y-16">

                {/* Visual Mockup - The 'Wow' Element */}
                <MotionSection>
                    <div className="mb-20">
                        <div className="text-center mb-10 space-y-2">
                            <h2 className="text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">Experiência Premium</h2>
                            <p className="text-zinc-500 max-w-lg mx-auto">Interface moderna projetada para transmitir confiança e exclusividade.</p>
                        </div>
                        <LaptopMock />
                    </div>
                </MotionSection>

                <div className="grid gap-8 md:grid-cols-2 lg:gap-12 max-w-5xl mx-auto">
                    {/* Card 1: Site Público */}
                    <MotionSection delay={0.1} className="h-full">
                        <Card className="flex h-full flex-col justify-between p-8 sm:p-10 transition-all duration-300 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-[6px] hover:ring-1 hover:ring-blue-100 group bg-white/50 backdrop-blur-sm">
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 group-hover:scale-110 transition-all duration-300">
                                        <ExternalLink className="h-5 w-5 text-blue-600" />
                                    </div>
                                    <h3 className="text-2xl font-semibold text-zinc-950">Site público (demo)</h3>
                                </div>
                                <p className="text-zinc-600 leading-relaxed">
                                    A experiência que seus clientes terão. Navegação rápida, fotos grandes e design focado em conversão de leads.
                                </p>
                            </div>
                            <div className="mt-8">
                                <Button asChild className="w-full bg-white border border-blue-100 text-blue-600 hover:bg-blue-50 hover:border-blue-200 shadow-sm transition-all hover:shadow-md hover:scale-[1.03] active:scale-[0.97]" variant="secondary">
                                    <Link href="https://lumina-estates-nine.vercel.app/" target="_blank">
                                        Abrir site
                                        <ExternalLink className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                            </div>
                        </Card>
                    </MotionSection>

                    {/* Card 2: Painel Admin */}
                    <MotionSection delay={0.2} className="h-full">
                        <Card className="flex h-full flex-col justify-between p-8 sm:p-10 border-zinc-200 bg-zinc-50/50 transition-all duration-300 hover:border-indigo-200 hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-[6px] hover:ring-1 hover:ring-indigo-100 group">
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="h-10 w-10 rounded-full bg-zinc-200 flex items-center justify-center group-hover:bg-indigo-100 group-hover:scale-110 transition-all duration-300">
                                        <Lock className="h-5 w-5 text-zinc-600 group-hover:text-indigo-600 transition-colors" />
                                    </div>
                                    <h3 className="text-2xl font-semibold text-zinc-950">Painel administrativo</h3>
                                    <span className="ml-auto text-xs font-bold text-indigo-700 uppercase tracking-wider border border-indigo-100 px-2.5 py-1 rounded-full bg-indigo-50 shadow-sm">
                                        Área protegida
                                    </span>
                                </div>
                                <p className="text-zinc-600 leading-relaxed">
                                    Onde você cadastra imóveis e gerencia leads. Interface simplificada para você não perder tempo.
                                </p>
                                <p className="text-sm text-zinc-500 italic flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 inline-block" />
                                    Acesso demonstrado em call.
                                </p>
                            </div>
                            <div className="mt-8">
                                <Button asChild className="w-full opacity-70 border-zinc-200 bg-zinc-100 text-zinc-400 hover:bg-zinc-100 cursor-not-allowed" variant="outline" disabled>
                                    <span className="flex items-center justify-center">
                                        <Lock className="mr-2 h-4 w-4" />
                                        Acesso Restrito
                                    </span>
                                </Button>
                            </div>
                        </Card>
                    </MotionSection>
                </div>
            </div>
        </section>
    );
}

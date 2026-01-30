"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { LayoutDashboard, Store, Home, BarChart3 } from "lucide-react";

export function LaptopMock() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % 3);
        }, 4000); // 4 seconds per slide
        return () => clearInterval(timer);
    }, []);

    const slides = [
        {
            id: 0,
            label: "Catálogo / Busca",
            content: (
                <div className="flex flex-col h-full bg-white p-4 gap-4 animate-in fade-in duration-500">
                    <div className="w-full h-32 bg-zinc-100 rounded-lg relative overflow-hidden">
                        {/* Hero Skeleton */}
                        <div className="absolute inset-0 bg-gradient-to-br from-zinc-200 to-zinc-100" />
                        <div className="absolute bottom-4 left-4 w-1/2 h-4 bg-zinc-300 rounded" />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                        {[1, 2].map(i => (
                            <div key={i} className="bg-zinc-50 border border-zinc-100 rounded-lg p-2 space-y-2">
                                <div className="w-full h-16 bg-zinc-200 rounded-md" />
                                <div className="w-3/4 h-3 bg-zinc-200 rounded" />
                                <div className="w-1/2 h-2 bg-zinc-100 rounded" />
                            </div>
                        ))}
                    </div>
                </div>
            )
        },
        {
            id: 1,
            label: "Página do Imóvel",
            content: (
                <div className="flex h-full bg-white p-4 gap-4 animate-in fade-in duration-500">
                    <div className="w-2/3 h-full bg-zinc-100 rounded-lg relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-zinc-200 to-zinc-100" />
                    </div>
                    <div className="w-1/3 space-y-3">
                        <div className="w-full h-4 bg-zinc-300 rounded" />
                        <div className="w-3/4 h-3 bg-zinc-200 rounded" />
                        <div className="w-full h-10 bg-indigo-600/10 rounded mt-4" />
                        <div className="space-y-2 pt-4">
                            {[1, 2, 3].map(i => <div key={i} className="w-full h-2 bg-zinc-100 rounded" />)}
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 2,
            label: "Painel Admin",
            content: (
                <div className="flex h-full bg-zinc-950 p-0 text-white animate-in fade-in duration-500">
                    <div className="w-1/4 h-full border-r border-zinc-800 p-3 space-y-4">
                        <div className="w-8 h-8 bg-indigo-600 rounded-lg" />
                        <div className="space-y-2">
                            {[1, 2, 3, 4].map(i => <div key={i} className="w-full h-4 bg-zinc-900 rounded" />)}
                        </div>
                    </div>
                    <div className="flex-1 p-4 space-y-4">
                        <div className="flex justify-between">
                            <div className="w-32 h-6 bg-zinc-900 rounded" />
                            <div className="w-8 h-8 bg-zinc-800 rounded-full" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="h-24 bg-zinc-900 rounded border border-zinc-800" />
                            <div className="h-24 bg-zinc-900 rounded border border-zinc-800" />
                        </div>
                        <div className="w-full h-32 bg-zinc-900 rounded border border-zinc-800" />
                    </div>
                </div>
            )
        }
    ];

    return (
        <div className="relative mx-auto w-full max-w-2xl">
            {/* Laptop Frame */}
            <div className="relative mx-auto border-zinc-300 bg-zinc-950 border-[8px] rounded-t-xl h-[172px] md:h-[294px] max-w-[301px] md:max-w-[512px]">
                <div className="rounded-lg overflow-hidden h-[156px] md:h-[278px] bg-white w-full relative">

                    {/* Top Bar with Camera */}
                    <div className="absolute top-0 left-0 right-0 h-6 bg-zinc-100 border-b border-zinc-200 flex items-center justify-center z-20">
                        <div className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
                    </div>

                    {/* Content Slide */}
                    <div className="pt-6 h-full w-full">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentSlide}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className="h-full w-full"
                            >
                                {slides[currentSlide].content}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Label Overlay */}
                    <div className="absolute bottom-4 right-4 z-20 bg-black/75 backdrop-blur-md px-3 py-1 rounded-full text-xs text-white font-medium border border-white/10">
                        {slides[currentSlide].label}
                    </div>

                </div>
            </div>
            {/* Laptop Base */}
            <div className="relative mx-auto bg-zinc-300 rounded-b-xl rounded-t-sm h-[17px] max-w-[351px] md:max-w-[596px]">
                <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] md:w-[96px] md:h-[8px] bg-zinc-400"></div>
            </div>

            <div className="text-center mt-6">
                <p className="text-sm text-zinc-400 font-medium">Demonstração visual (exemplo)</p>
            </div>
        </div>
    );
}

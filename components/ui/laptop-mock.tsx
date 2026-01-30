"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { LayoutDashboard, Store, Home, BarChart3 } from "lucide-react";

export function LaptopMock() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % 3);
        }, 8000); // 8 seconds per slide for slower, premium feel
        return () => clearInterval(timer);
    }, []);

    const slides = [
        {
            id: 0,
            label: "Catálogo Exclusivo",
            content: (
                <div className="flex flex-col h-full bg-white animate-in fade-in duration-700">
                    {/* Header */}
                    <div className="h-12 border-b border-zinc-100 flex items-center justify-between px-4 bg-white/80 backdrop-blur-sm sticky top-0 z-10">
                        <div className="w-20 h-4 bg-zinc-900 rounded-sm" />
                        <div className="flex gap-4">
                            <div className="w-12 h-3 bg-zinc-100 rounded-sm" />
                            <div className="w-12 h-3 bg-zinc-100 rounded-sm" />
                            <div className="w-16 h-3 bg-indigo-600 rounded-full opacity-10" />
                        </div>
                    </div>
                    {/* Hero Area */}
                    <div className="w-full h-32 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900 to-indigo-800" />
                        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-400 via-transparent to-transparent" />
                        <div className="absolute bottom-4 left-4 text-white space-y-2">
                            <div className="w-32 h-4 bg-white/20 backdrop-blur-md rounded-sm" />
                            <div className="w-48 h-6 bg-white rounded-sm" />
                        </div>
                    </div>
                    {/* Grid */}
                    <div className="p-4 grid grid-cols-3 gap-3">
                        {[1, 2, 3].map(i => (
                            <div key={i} className="space-y-2 group cursor-pointer hover:-translate-y-0.5 transition-transform duration-300">
                                <div className="aspect-[4/3] bg-zinc-100 rounded-md overflow-hidden relative">
                                    <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.6)]" />
                                </div>
                                <div className="space-y-1">
                                    <div className="w-full h-2 bg-zinc-800 rounded-sm opacity-80" />
                                    <div className="w-1/2 h-2 bg-zinc-300 rounded-sm" />
                                </div>
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
                <div className="flex h-full bg-white animate-in fade-in duration-700">
                    <div className="w-2/3 h-full relative bg-zinc-50 border-r border-zinc-100">
                        <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur px-2 py-1 rounded text-[8px] font-bold tracking-widest text-indigo-600 uppercase shadow-sm">
                            Alto Padrão
                        </div>
                        <div className="w-full h-2/3 bg-zinc-200 overflow-hidden relative">
                            <div className="absolute inset-0 bg-gradient-to-tr from-zinc-200 to-zinc-100" />
                        </div>
                        <div className="p-4 flex gap-2">
                            <div className="w-20 h-12 bg-zinc-100 rounded-md border border-zinc-200" />
                            <div className="w-20 h-12 bg-zinc-100 rounded-md border border-zinc-200" />
                            <div className="w-20 h-12 bg-zinc-100 rounded-md border border-zinc-200" />
                        </div>
                    </div>
                    <div className="w-1/3 p-4 flex flex-col h-full">
                        <div className="w-full h-4 bg-zinc-900 rounded-sm mb-2" />
                        <div className="w-1/2 h-3 bg-indigo-600 rounded-sm mb-6" />

                        <div className="space-y-3 flex-1">
                            <div className="flex justify-between border-b border-zinc-50 pb-2">
                                <div className="w-8 h-2 bg-zinc-300 rounded-sm" />
                                <div className="w-12 h-2 bg-zinc-800 rounded-sm" />
                            </div>
                            <div className="flex justify-between border-b border-zinc-50 pb-2">
                                <div className="w-8 h-2 bg-zinc-300 rounded-sm" />
                                <div className="w-12 h-2 bg-zinc-800 rounded-sm" />
                            </div>
                            <div className="flex justify-between border-b border-zinc-50 pb-2">
                                <div className="w-8 h-2 bg-zinc-300 rounded-sm" />
                                <div className="w-12 h-2 bg-zinc-800 rounded-sm" />
                            </div>
                        </div>

                        <div className="mt-auto w-full h-8 bg-indigo-600 rounded-md shadow-lg shadow-indigo-600/20" />
                    </div>
                </div>
            )
        },
        {
            id: 2,
            label: "Painel Admin",
            content: (
                <div className="flex h-full bg-[#0F172A] p-0 text-white animate-in fade-in duration-700 font-sans">
                    {/* Sidebar */}
                    <div className="w-16 h-full border-r border-indigo-500/10 flex flex-col items-center py-4 gap-4 bg-[#0F172A]">
                        <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-500/30">
                            <div className="w-4 h-4 bg-white/20 rounded-sm" />
                        </div>
                        <div className="w-4 h-0.5 bg-indigo-500/20 rounded-full my-2" />
                        {[1, 2, 3, 4].map(i => (
                            <div key={i} className={`w-8 h-8 rounded-md flex items-center justify-center ${i === 1 ? 'bg-indigo-500/10 text-indigo-400' : 'text-slate-500 hover:bg-slate-800/50'}`}>
                                <div className={`w-4 h-4 rounded-sm ${i === 1 ? 'bg-indigo-400' : 'bg-slate-600'}`} />
                            </div>
                        ))}
                    </div>

                    {/* Dashboard Content */}
                    <div className="flex-1 p-5 space-y-5 bg-[#0F172A]">
                        <div className="flex justify-between items-center">
                            <div>
                                <div className="w-24 h-5 bg-slate-700/50 rounded-sm mb-1" />
                                <div className="w-16 h-3 bg-slate-800 rounded-sm" />
                            </div>
                            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-cyan-500" />
                        </div>

                        {/* Stats Row */}
                        <div className="grid grid-cols-2 gap-3">
                            <div className="bg-slate-800/30 border border-slate-700/50 p-3 rounded-lg relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-12 h-12 bg-indigo-500/10 rounded-bl-full -mr-2 -mt-2 transition-all group-hover:bg-indigo-500/20" />
                                <div className="w-4 h-4 rounded-full bg-indigo-500/20 mb-2" />
                                <div className="w-12 h-6 bg-white rounded-sm mb-1" />
                                <div className="w-20 h-3 bg-slate-600 rounded-sm" />
                            </div>
                            <div className="bg-slate-800/30 border border-slate-700/50 p-3 rounded-lg relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-12 h-12 bg-cyan-500/10 rounded-bl-full -mr-2 -mt-2 transition-all group-hover:bg-cyan-500/20" />
                                <div className="w-4 h-4 rounded-full bg-cyan-500/20 mb-2" />
                                <div className="w-12 h-6 bg-white rounded-sm mb-1" />
                                <div className="w-20 h-3 bg-slate-600 rounded-sm" />
                            </div>
                        </div>

                        {/* Chart Placeholder */}
                        <div className="h-20 bg-slate-800/30 border border-slate-700/50 rounded-lg p-3 relative flex items-end gap-1">
                            {[30, 50, 45, 70, 60, 85, 95].map((h, i) => (
                                <div key={i} className="flex-1 bg-indigo-500/20 rounded-t-sm hover:bg-indigo-500/40 transition-colors" style={{ height: `${h}%` }} />
                            ))}
                        </div>
                    </div>
                </div>
            )
        }
    ];

    return (
        <div className="relative mx-auto w-full max-w-2xl group cursor-default">
            {/* Laptop Frame */}
            <div className="relative mx-auto border-zinc-200 bg-[#09090b] border-[8px] rounded-t-2xl h-[200px] md:h-[340px] max-w-[340px] md:max-w-[580px] shadow-2xl shadow-indigo-500/20 transition-all duration-700 ease-in-out">
                <div className="rounded-lg overflow-hidden h-[184px] md:h-[324px] bg-white w-full relative group-hover:shadow-[0_0_40px_rgba(79,70,229,0.15)] transition-shadow duration-500">

                    {/* Top Bar with Camera */}
                    <div className="absolute top-0 left-0 right-0 h-7 bg-[#fbfbfb] border-b border-zinc-100 flex items-center justify-center z-20">
                        <div className="w-1.5 h-1.5 rounded-full bg-zinc-300 ring-4 ring-zinc-50" />
                    </div>

                    {/* Content Slide */}
                    <div className="pt-7 h-full w-full">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentSlide}
                                initial={{ opacity: 0, scale: 0.98 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 1.02 }}
                                transition={{ duration: 0.8, ease: "easeInOut" }}
                                className="h-full w-full"
                            >
                                {slides[currentSlide].content}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Label Overlay */}
                    <div className="absolute bottom-4 right-4 z-30">
                        <motion.div
                            key={currentSlide}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-full text-[10px] md:text-xs text-white font-medium border border-white/10 shadow-lg flex items-center gap-2"
                        >
                            <span className={`w-1.5 h-1.5 rounded-full ${currentSlide === 2 ? 'bg-indigo-500' : 'bg-cyan-500'} animate-pulse`} />
                            {slides[currentSlide].label}
                        </motion.div>
                    </div>

                </div>
            </div>
            {/* Laptop Base */}
            <div className="relative mx-auto bg-zinc-200 rounded-b-xl rounded-t-sm h-[14px] max-w-[380px] md:max-w-[660px] shadow-sm">
                <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-lg w-[60px] h-[4px] md:w-[100px] md:h-[5px] bg-zinc-300/50"></div>
            </div>

            {/* Reflection / Glow on desk */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[80%] h-20 bg-indigo-500/20 blur-[60px] -z-10 opacity-50 pointer-events-none rounded-full" />
        </div>
    );
}

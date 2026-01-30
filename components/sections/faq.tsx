"use client";

import { motion } from "framer-motion";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import Link from "next/link";

const faqs = [
    {
        question: "Eu já uso o Instagram, preciso de site?",
        answer: "O Instagram é excelente para conexão, mas o site é sua ferramenta de conversão e autoridade. É o seu terreno próprio na internet, onde você não depende do algoritmo para fechar negócios.",
    },
    {
        question: "Já tive site e não deu resultado. Por que esse seria diferente?",
        answer: "Muitos sites antigos são lentos, feios e difíceis de navegar. Nossa plataforma foi desenhada focando na experiência do usuário e em SEO, para garantir que quem visita, entra em contato.",
    },
    {
        question: "Quanto tempo para colocar no ar?",
        answer: "Após o alinhamento inicial e envio dos materiais da marca, conseguimos entregar seu site pronto para venda em até 7 dias úteis.",
    },
    {
        question: "Preciso ter muitos imóveis para começar?",
        answer: "Não. A plataforma é escalável. Você pode começar com poucos imóveis exclusivos e crescer sua carteira aos poucos. O design valoriza o que você tem.",
    },
    {
        question: "Como funciona o painel administrativo?",
        answer: "É extremamente simples. Se você sabe usar WhatsApp ou Instagram, saberá usar o painel. Cadastrar um imóvel leva menos de 5 minutos.",
    },
];

export function FAQ() {
    return (
        <section className="py-24 max-w-3xl mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tight text-zinc-950">Dúvidas Frequentes</h2>
            </div>

            <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="border-b border-zinc-100 data-[state=open]:bg-zinc-50/50 px-4 rounded-lg transition-colors overflow-hidden">
                        <AccordionTrigger className="text-left text-lg font-medium text-zinc-900 hover:text-indigo-600 transition-colors py-6">
                            {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-zinc-600 text-base leading-relaxed pb-6 pl-2 border-l-2 border-indigo-500/20">
                            {faq.answer}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>

            {/* CTA Final */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mt-20 text-center space-y-6 bg-gradient-to-br from-zinc-900 via-zinc-950 to-black rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-2xl"
            >
                {/* Abstract glow */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                <h2 className="text-3xl font-bold text-white relative z-10">Quer ver funcionando ao vivo?</h2>
                <p className="text-zinc-400 text-lg max-w-xl mx-auto relative z-10">
                    Te mostro o cadastro de imóvel no painel e a experiência do cliente em menos de 10 minutos.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 relative z-10">
                    <Button asChild size="lg" className="bg-white text-zinc-950 hover:bg-zinc-100 h-14 px-8 text-lg font-semibold shadow-lg shadow-white/10">
                        <Link href="https://wa.me/message/3CPMOVVNIKSDG1" target="_blank">
                            <MessageCircle className="mr-2 h-5 w-5 text-green-600" />
                            Chamar no WhatsApp
                        </Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="bg-transparent text-white border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900 h-14 px-8 text-lg">
                        <Link href="#demo">
                            Ver site novamente
                        </Link>
                    </Button>
                </div>
            </motion.div>
        </section>
    );
}

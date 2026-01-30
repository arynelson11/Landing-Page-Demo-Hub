"use client";

import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

interface MotionSectionProps {
    children: ReactNode;
    className?: string;
    delay?: number;
}

export function MotionSection({ children, className, delay = 0 }: MotionSectionProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.6, ease: "easeOut", delay }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

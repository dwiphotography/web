"use client";

import { forwardRef, useImperativeHandle, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { cn, shuffleWithoutSamePosition } from "@/lib/utils";
import { useRemoteAsssets } from "@/lib/SparkUtils";

const images = [
    "0.webp",
    "1.webp",
    "2.webp",
    "3.webp",
    "6.webp",
    "7.webp",
    "8.webp",
    "9.webp",
    "11.webp",
    "12.webp",
    "13.webp",
    "15.webp",
    "16.webp",
    "17.webp",
    "18.webp",
    "19.webp",
    "20.webp",
    "21.webp",
    "22.webp",
    "23.webp",
    "24.webp",
];

const baseLayout = [
    [30, 0, 50, 10, 40],
    [10, 40, 20, 50, 15],
    [50, 15, 35, 30, 0],
];

const buildLayout = (size: number) => {
    return Array.from({ length: size }, (_, index) => {
        return baseLayout[index % baseLayout.length];
    });
};

export type PanelsRef = {
    rotate: () => void
    current: number,
    setCurrent: (e: number) => void,
    slides: unknown,
    layout: number[][]
}

export const FolioPanels = forwardRef((props, ref) => {
    const [current, setCurrent] = useState(0);

    const slides = shuffleWithoutSamePosition(images, 4);

    const layouts = buildLayout(slides.length);

    const rotate = () => {
        setCurrent((prev) => (prev + 1) % slides.length);
    }

    useImperativeHandle(ref, () => ({
        rotate, current, setCurrent, slides, layouts
    }))

    return (
        <>
            <div className="flex justify-center gap-2 mt-4 mb-8">
                {slides.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrent(i)}
                        className={cn(
                            "h-2 rounded-full transition-all duration-300",
                            current === i
                                ? "h-3 w-7 bg-white"
                                : "h-3 w-3 bg-neutral-500 hover:bg-neutral-300"
                        )}
                    />
                ))}
            </div>
            <div className="w-full items-center z-2 h-full">
                <div className="relative md:min-h-105 min-h-70 w-full">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={current}
                            className="absolute inset-0 flex items-start justify-center gap-4 md:gap-6"
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            variants={{
                                visible: {
                                    transition: {
                                        staggerChildren: 0.2,
                                    },
                                },
                                exit: {
                                    transition: {
                                        staggerChildren: 0.1,
                                        staggerDirection: -1,
                                    },
                                },
                            }}
                        >
                            {slides.length > current && slides[current]?.length > 0 && slides[current]?.map((src, index) => (
                                <motion.div
                                    key={index + '-' + current}
                                    variants={{
                                        hidden: {
                                            opacity: 0,
                                            y: 30,
                                            scale: 0.96,
                                        },
                                        visible: {
                                            opacity: 1,
                                            y: 0,
                                            scale: 1,
                                            transition: {
                                                duration: 0.8,
                                                ease: "easeInOut",
                                            },
                                        },
                                        exit: {
                                            opacity: 0,
                                            y: -20,
                                            scale: 1.02,
                                            transition: {
                                                duration: 0.5,
                                            },
                                        },
                                    }}
                                    className="relative shrink-0 overflow-hidden shadow-xl aspect-3/5"
                                    style={{
                                        width: "clamp(110px, 22vw, 260px)",
                                        marginTop: `${layouts[current][index]}px`,
                                        clipPath:
                                            "polygon(14% 0%, 100% 0%, 86% 100%, 0% 100%)",
                                    }}
                                >
                                    <img
                                        src={useRemoteAsssets(`/a/${src}`)}
                                        alt="Portrait photography carousel"
                                        className="absolute inset-0 h-full w-full object-cover"
                                        loading="lazy"
                                        decoding="async"
                                        suppressHydrationWarning
                                    />

                                    <div className="absolute inset-0 bg-black/10" />
                                </motion.div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
            
        </>
    );
});
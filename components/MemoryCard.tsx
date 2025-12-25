"use client";

import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";

interface MemoryCardProps {
    title?: string;
    date?: string;
    imageSrc: string;
    loader: any;
}

export default function MemoryCard({
    title,
    date,
    imageSrc,
    loader,
}: MemoryCardProps) {
    // Safety check for empty source strings to prevent console errors
    if (!imageSrc || imageSrc === "") return null;

    return (
        <motion.div
            className="group flex flex-col items-center w-[400px] flex-shrink-0 rounded-xl p-2 border rounded-md"
            initial={{ y: 0 }}
            whileHover={{
                y: -10,
                boxShadow: "0 20px 35px rgba(0,0,0,0.35)",
            }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
        >
            <div className="relative w-full aspect-[4/5] overflow-hidden rounded-lg bg-zinc-900">
                <motion.div
                    className="w-full h-full relative"
                    initial={{ filter: "grayscale(100%) brightness(0.75)" }}
                    whileHover={{ filter: "grayscale(0%) brightness(1)" }}
                    transition={{ duration: 0.5 }}
                >
                    <Image
                        loader={loader}
                        src={imageSrc}
                        alt={title || "Memory"}
                        fill
                        sizes="600px"
                        className="object-cover"
                    />
                </motion.div>

                {/* Subtle border overlay */}
                <div className="absolute inset-0 border border-white/10 rounded-lg pointer-events-none group-hover:border-white/30 transition-colors duration-700" />
            </div>

            <div className="mt-2 text-center text-white">
                {title && <p className="love-text font-semibold text-sm">{title}</p>}
                {date && <p className="text-[15px]">{date}</p>}
            </div>
        </motion.div>
    );
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function GiftBox({ onOpen }: { onOpen: () => void }) {
    const [isOpening, setIsOpening] = useState(false);

    const handleClick = () => {
        setIsOpening(true);
        setTimeout(onOpen, 900);
    };

    return (
        <div className="fixed inset-0 z-[100] w-screen h-screen flex items-center justify-center bg-transparent">
            <AnimatePresence>
                {!isOpening && (
                    <motion.div
                        onClick={handleClick}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="relative w-[180px] h-[180px] md:w-[260px] md:h-[260px] cursor-pointer"
                    >
                        <motion.div
                            animate={{
                                y: [0, -18, 0],
                                rotate: [0, -4, 4, -4, 0],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="relative w-full h-full"
                        >
                            <Image
                                src={`/images/giftbox.png`} // always fresh
                                alt="Gift Box"
                                fill
                                className="object-contain"
                                priority
                                unoptimized
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

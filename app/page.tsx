"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GiftBox from "@/components/GiftBox";
import MemoryGallery from "@/components/MemoryGallery";

const PASSWORD = process.env.NEXT_PUBLIC_GALLERY_PASSWORD || "";

export default function ChristmasApp() {
    const [showPassword, setShowPassword] = useState(false);
    const [passwordInput, setPasswordInput] = useState("");
    const [error, setError] = useState("");
    const [unlocked, setUnlocked] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        // Check if user previously unlocked the gallery
        if (localStorage.getItem("galleryUnlocked") === "true") {
            setUnlocked(true);
        }
    }, []);

    const handlePasswordSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (passwordInput === PASSWORD) {
            setUnlocked(true);
            localStorage.setItem("galleryUnlocked", "true");
        } else {
            setError("Incorrect password!");
            setPasswordInput("");
        }
    };

    if (!mounted) return null;

    return (
        <main className="relative min-h-screen w-full bg-[#ee9ca7] flex items-center justify-center overflow-hidden">
            <AnimatePresence mode="wait">
                {/* 1. GIFT BOX SCREEN */}
                {!showPassword && !unlocked && (
                    <motion.div
                        key="gift-screen"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.1 }}
                        className="flex flex-col items-center"
                    >
                        <header className="text-center mb-12 text-white px-4">
                            <h1
                                className="text-5xl md:text-7xl font-bold drop-shadow-md mb-2"
                                style={{
                                    fontFamily:
                                        "'Mountains of Christmas', cursive",
                                }}
                            >
                                Christmas Gift
                            </h1>
                            <p className="text-xl opacity-90 tracking-widest uppercase font-light">
                                Merry Christmas
                            </p>
                        </header>
                        <GiftBox onOpen={() => setShowPassword(true)} />
                    </motion.div>
                )}

                {/* 2. PASSWORD MODAL */}
                {showPassword && !unlocked && (
                    <motion.div
                        key="password-screen"
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-md px-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.form
                            onSubmit={handlePasswordSubmit}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            className="bg-white p-8 rounded-3xl shadow-2xl flex flex-col gap-4 w-full max-w-sm"
                        >
                            <h2 className="text-center font-bold text-gray-800 text-lg">
                                Enter Secret Code
                            </h2>
                            <input
                                type="password"
                                autoFocus
                                value={passwordInput}
                                onChange={(e) =>
                                    setPasswordInput(e.target.value)
                                }
                                className="p-4 rounded-2xl border border-gray-100 bg-gray-50 text-black text-center text-xl outline-none focus:ring-2 focus:ring-pink-300 transition-all"
                                placeholder="••••"
                            />
                            <button
                                type="submit"
                                className="bg-pink-500 text-white py-4 rounded-2xl font-bold hover:bg-pink-600 transition-all shadow-lg active:scale-95"
                            >
                                Unlock
                            </button>
                            {error && (
                                <p className="text-red-500 text-xs text-center font-bold animate-pulse">
                                    {error}
                                </p>
                            )}
                        </motion.form>
                    </motion.div>
                )}

                {/* 3. GALLERY SCREEN */}
                {unlocked && (
                    <motion.div
                        key="gallery-screen"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="w-full h-full"
                    >
                        <MemoryGallery />
                    </motion.div>
                )}
            </AnimatePresence>
        </main>
    );
}

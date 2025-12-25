"use client";
import { getCldVideoUrl } from "next-cloudinary";

export default function SecretPage() {
    const videoUrl = getCldVideoUrl({
        src: "Penguin/best_enufic",
        format: "mp4",
        quality: "auto",
    });

    return (
        <div className="flex flex-col items-center justify-center w-screen h-screen bg-gradient-to-b from-[#ee9ca7] to-[#ffdde1]">
            <h1>Merry Christmas 2025! This is a secret cookie 🍪</h1>
            <video
                src={videoUrl}
                controls
                width={800}
                height={450}
                className="rounded-md shadow-lg"
            />
        </div>
    );
}

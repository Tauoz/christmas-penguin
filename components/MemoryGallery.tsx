"use client";

import { useRef } from "react";
import MemoryCard from "./MemoryCard";
import LoveButton from "./Love"; // Import the button here
import { getCldImageUrl } from "next-cloudinary";

const CLOUD_FOLDER = process.env.NEXT_PUBLIC_CLOUDINARY_FOLDER || "";

const memories = [
    { name: "one", title: "Is this Fate?", date: "2024" },
    { name: "two", title: "First unofficial date", date: "2024" },
    { name: "three", title: "Same footsteps", date: "2024" },
    { name: "four", title: "Cool SunGlasses", date: "2024" },
    { name: "five", title: "With capybara", date: "2024" },
    { name: "six", title: "First discord call", date: "2024" },
    { name: "seven", title: "First official Date", date: "2024" },
    { name: "eight", title: "Hold my hand", date: "2024" },
    { name: "nine2", title: "Closer for a picture", date: "2024" },
    { name: "ten", title: "First series together", date: "2025" },
    { name: "eleven", title: "Secret Date", date: "2025" },
    { name: "twelve", title: "Last dorm meeting", date: "2025" },
    { name: "thirteen", title: "Sate kout Penguin", date: "2025" },
];

export default function MemoryGallery() {
    const containerRef = useRef<HTMLDivElement>(null);

    const cloudinaryLoader = ({ src, width }: any) => {
        return getCldImageUrl({
            src: CLOUD_FOLDER ? `${CLOUD_FOLDER}/${src}` : src,
            width,
            quality: "auto",
            crop: "fill",
        });
    };

    return (
        <div className="w-full h-screen flex flex-col justify-center">
            <div className="flex items-center justify-center gap-4 mb-8">
                <h2 className="text-white/60 text-sm tracking-widest uppercase font-light">
                    Our Memories
                </h2>
                <LoveButton />
            </div>

            <div
                ref={containerRef}
                className="flex gap-[4vw] px-[10vw] items-center overflow-x-auto snap-x snap-mandatory no-scrollbar w-full h-[70%]"
            >
                <div className="flex-shrink-0 w-[5vw]" />

                {memories.map((memory, i) => (
                    <div key={i} className="snap-center flex-shrink-0">
                        <MemoryCard
                            title={memory.title}
                            date={memory.date}
                            imageSrc={memory.name}
                            loader={cloudinaryLoader}
                        />
                    </div>
                ))}

                <div className="flex-shrink-0 w-[5vw]" />
            </div>
        </div>
    );
}



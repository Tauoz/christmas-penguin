"use client";

import { useRef } from "react";
import MemoryCard from "./MemoryCard";
import LoveButton from "./Love"; // Import the button here
import { getCldImageUrl } from "next-cloudinary";

const CLOUD_FOLDER = process.env.NEXT_PUBLIC_CLOUDINARY_FOLDER || "";

const memories = [
    { name: "one", title: "Aquarium", date: "2025" },
    { name: "two", title: "Dinner", date: "2025" },
    { name: "three", title: "The Walk", date: "2025" },
    { name: "four", title: "Sunset", date: "2025" },
    { name: "five", title: "Beach", date: "2025" },
    { name: "six", title: "Picnic", date: "2025" },
    { name: "seven", title: "Drive", date: "2025" },
    { name: "eight", title: "Hike", date: "2025" },
    { name: "nine2", title: "Concert", date: "2025" },
    { name: "ten", title: "Camping", date: "2025" },
    { name: "eleven", title: "Museum", date: "2025" },
    { name: "twelve", title: "Roadtrip", date: "2025" },
    { name: "thirteen", title: "Picnic 2", date: "2025" },
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



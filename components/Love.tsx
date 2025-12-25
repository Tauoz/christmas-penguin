"use client";

import Link from "next/link";

export default function LoveButton() {
    return (
        <Link href="/secret">
            <button
                className="w-10 h-10"
                aria-label="Secret Love Page"
            >
                ❤️
            </button>
        </Link>
    );
}

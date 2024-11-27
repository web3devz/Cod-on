// @ts-nocheck
"use client";
import { Github } from "lucide-react";
import Link from "next/link";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { Lexend } from "next/font/google";
import clsx from "clsx";
import { useRef } from "react";

const lexend = Lexend({ subsets: ["latin"] });

const Navbar = () => {
    const { scrollY } = useScroll();
    const nav = useRef(null);

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (!nav.current) return;

        if (latest > 0 && nav.current.className) {
            nav.current.className = clsx(nav.current.className, "bg-white/0");
            nav.current.classList.remove("border-b");
            nav.current.classList.remove("border-gray-200");
            nav.current.classList.remove("bg-white/80");
            nav.current.classList.remove("backdrop-blur-xl");
            nav.current.classList.remove("shadow-md");
        } else if (latest === 0) {
            nav.current.className = clsx(nav.current.className, "bg-white/0");
            nav.current.classList.remove("border-b");
            nav.current.classList.remove("border-gray-200");
            nav.current.classList.remove("bg-white/80");
            nav.current.classList.remove("backdrop-blur-xl");
            nav.current.classList.remove("shadow-md");
        }
    });

    return (
        <div
            className={`fixed top-0 w-full z-30 transition-all bg-white/0`}
            ref={nav}>
            <div className="mx-5 flex h-16 max-w-screen-xl items-center justify-between xl:mx-auto">
                <Link
                    href="/"
                    className={clsx(
                        "flex items-center font-display text-3xl font-bold",
                        lexend.className
                    )}>
                    <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
                        CodÆon
                    </h1>
                </Link>
                <div className="flex items-center space-x-4">
                    <a
                        href="https://github.com/web3devz/CodAEon"
                        target="_blank"
                        rel="noopener noreferrer">
                        <Github />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;

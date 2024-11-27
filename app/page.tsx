"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Features from "../components/Features";

export default function Component() {
    const [idea, setIdea] = useState<string>("");
    const router = useRouter();

    return (
        <section className="w-full flex flex-col pt-12 md:pt-24 lg:pt-32 xl:pt-48 bg-gradient-to-b from-gray-900 via-black to-gray-900 mb-8">
            {/* Hero Section */}
            <div className="px-4 pt-32 h-[60vh] md:px-8">
                <div className="grid gap-6 items-center animate-fadeIn">
                    <div className="flex flex-col justify-center space-y-6 text-center">
                        <div className="space-y-4">
                            <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl xl:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 animate-textFocus">
                                Empower Your Blockchain Ideas with Aeternity!
                            </h1>
                            <p className="max-w-[700px] text-gray-300 md:text-lg mx-auto animate-slideUp">
                                We know you don&apos;t know Sophia, well neither
                                do we, but we&apos;ll help you get started with your smart contract journey.
                            </p>
                        </div>
                        <div className="w-full max-w-3xl gap-y-2 mx-auto flex items-center gap-x-4 text-base animate-bounceSlow">
                            {/* Input Field */}
                            <Input
                                name="prompt"
                                placeholder="Your Amazing Smart Contract Idea"
                                className="rounded-lg bg-gray-800 text-gray-400 placeholder-gray-500 border border-gray-700 focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all duration-300 transform hover:scale-105 p-8 text-lg h-[60px]" // Increased padding and height
                                value={idea}
                                onChange={(e) => setIdea(e.target.value)}
                            />
                            {/* Button */}
                            <Button
                                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-6 rounded-lg hover:shadow-lg hover:from-pink-500 hover:to-purple-500 transition-transform duration-300 hover:scale-110"
                                type="submit"
                                onClick={() => {
                                    router.push(
                                        `/editor?idea=${encodeURI(
                                            idea
                                        )}`
                                    );
                                }}>
                                Start Building
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <Features />
        </section>
    );
}

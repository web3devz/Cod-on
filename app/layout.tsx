import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

import { Toaster } from "@/components/ui/toaster";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <title>CodÆon</title>
            <Script src="https://unpkg.com/@aeternity/aepp-sdk/dist/aepp-sdk.browser-script.js" />
            <body className={inter.className}>
                <Navbar />
                <Toaster />
                {children}
            </body>
        </html>
    );
}

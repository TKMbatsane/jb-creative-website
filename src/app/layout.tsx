import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import StructuredData from "../components/structuredData"

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "JB Creative Cinema",
    description: "Professional portrait and headshot photography",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                <NavBar />
                <StructuredData />
                {children}
                <Footer />
            </body>
        </html>
    );
}

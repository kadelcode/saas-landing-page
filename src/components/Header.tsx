"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";
import { X, Menu } from "lucide-react";

export function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const menuButtonRef = useRef<HTMLButtonElement>(null); // Ref for the menu toggle button

    // Close menu when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (menuRef.current &&
                !menuRef.current.contains(event.target as Node) &&
                menuButtonRef.current &&
                !menuButtonRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        }

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isOpen]);

    return (
        <header className="w-full bg-white dark:bg-gray-900 shadow-md fixed top-0 left-0 right-0 z-50">
            <div className="container mx-auto flex justify-between items-center py-4 px-6">
                {/* Logo */}
                <Link href="/" className="text-xl font-bold text-gray-900 dark:text-white">
                    LitAI
                </Link>

                {/* Navigation Links */}
                <nav className="hidden md:flex space-x-6">
                    <Link href="/about" className="hover:text-primary transition">About</Link>
                    <Link href="/pricing" className="hover:text-primary transition">Pricing</Link>
                    <Link href="/faq" className="hover:text-primary transition">FAQ</Link>
                    <Link href="/contact" className="hover:text-primary transition">Contact</Link>
                </nav>

                {/* Theme Toggle & Mobile Menu */}
                <div className="flex items-center space-x-4">
                    <ThemeToggle />

                    {/* Mobile Menu Button */}
                    <Button
                      ref={menuButtonRef}
                      className="md:hidden bg-transparent hover:bg-gray-200 dark:hover:bg-gray-500 shadow-md cursor-pointer transition-all"
                      onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ?
                          <X className="h-8 w-8 text-gray-900 dark:text-white" /> :
                          <Menu className="h-8 w-8 text-gray-900 dark:text-white" />}
                    </Button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div ref={menuRef}>
                    <nav className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-300 dark:border-gray-700 p-4">
                    <Link href="/about" className="block py-2" onClick={() => setIsOpen(false)}>About</Link>
                    <Link href="/pricing" className="block py-2" onClick={() => setIsOpen(false)}>Pricing</Link>
                    <Link href="/faq" className="block py-2" onClick={() => setIsOpen(false)}>FAQ</Link>
                    <Link href="/contact" className="block py-2" onClick={() => setIsOpen(false)}>Contact</Link>
                    </nav>
                </div>
                
            )}
        </header>
    )
}
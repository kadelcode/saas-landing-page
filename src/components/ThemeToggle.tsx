"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Prevents hydration mismatch

  return (
    <div className=''>
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className='p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:cursor-pointer'
        >
            {theme === 'dark' ?
            <Sun className='w-6 h-6' /> :
            <Moon className='w-6 h-6' />}
        </button>
    </div>
  );
}

{/* Dark Mode Toggle */}
/*
{mounted && (
    <div className='fixed top-6 right-6'>
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className='p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:cursor-pointer'
        >
            {theme === 'dark' ?
            <Sun className='w-6 h-6' /> :
            <Moon className='w-6 h-6' />
            }
        </button>
    </div>
)} */
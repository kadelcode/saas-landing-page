export function Footer() {
    return (
        <footer className="w-full bg-gray-100 dark:bg-gray-900 py-6">
            <div className="container mx-auto text-center text-gray-700 dark:text-gray-300">
                <p>&copy; {new Date().getFullYear()} Lit AI. All Rights Reserved.</p>
                <p className="mt-2">
                    Built with ❤️ using Next.js & TailwindCSS.
                </p>
            </div>
        </footer>
    )
}
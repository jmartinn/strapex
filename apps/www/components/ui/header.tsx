import Link from "next/link";

import { Icons } from "./icons";
import ThemeToggle from "./theme-toggle";

export default function Header() {
  return (
    <header className="absolute top-4 z-30 w-full border-b pb-4 shadow-[0_1px_0_0_theme(colors.white/.2)] [border-image:linear-gradient(to_right,transparent,theme(colors.indigo.300/.4),transparent)1] dark:shadow-none dark:[border-image:linear-gradient(to_right,transparent,theme(colors.indigo.300/.16),transparent)1] md:top-6 md:pb-6">
      <div className="px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <div className="relative flex h-12 items-center justify-between gap-x-2 rounded-lg bg-gradient-to-b from-white/90 to-white/70 px-3 shadow dark:from-gray-700/80 dark:to-gray-700/70">
            {/* Border with dots in corners */}
            <div
              className="absolute -inset-1.5 -z-10 rounded-sm bg-indigo-500/15 before:absolute before:inset-y-0 before:left-0 before:w-[10px] before:bg-[length:10px_10px] before:bg-no-repeat before:[background-image:radial-gradient(circle_at_center,theme(colors.indigo.500/.56)_1px,transparent_1px),radial-gradient(circle_at_center,theme(colors.indigo.500/.56)_1px,transparent_1px)] before:[background-position:top_center,bottom_center] after:absolute after:inset-y-0 after:right-0 after:w-[10px] after:bg-[length:10px_10px] after:bg-no-repeat after:[background-image:radial-gradient(circle_at_center,theme(colors.indigo.500/.56)_1px,transparent_1px),radial-gradient(circle_at_center,theme(colors.indigo.500/.56)_1px,transparent_1px)] after:[background-position:top_center,bottom_center] dark:bg-gray-800/50 dark:before:[background-image:radial-gradient(circle_at_center,theme(colors.gray.600/.56)_1px,transparent_1px),radial-gradient(circle_at_center,theme(colors.gray.600/.56)_1px,transparent_1px)] dark:after:[background-image:radial-gradient(circle_at_center,theme(colors.gray.600/.56)_1px,transparent_1px),radial-gradient(circle_at_center,theme(colors.gray.600/.56)_1px,transparent_1px)]"
              aria-hidden="true"
            />
            {/* Site branding */}
            <div className="flex-1">
              {/* Logo */}
              <Link className="group" href="/">
                <Icons.logo />
              </Link>
            </div>
            {/* Navigation links */}
            <nav className="flex justify-center">
              <ul className="flex items-center text-sm font-medium sm:gap-x-3">
                <li>
                  <Link
                    className="rounded-lg px-3 py-1.5 text-gray-800 hover:bg-indigo-100 dark:text-gray-200 dark:hover:bg-gray-800/30"
                    href="/updates"
                  >
                    Docs
                  </Link>
                </li>
                <li>
                  <Link
                    className="rounded-lg px-3 py-1.5 text-gray-800 transition-colors hover:bg-indigo-100 dark:text-gray-200 dark:hover:bg-gray-800/30"
                    href="/faq"
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    className="rounded-lg px-3 py-1.5 text-gray-800 transition-colors hover:bg-indigo-100 dark:text-gray-200 dark:hover:bg-gray-800/30"
                    href="/contact"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Light switch */}
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}

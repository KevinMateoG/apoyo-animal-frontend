"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/catalogo", label: "Ejemplares" },
  { href: "/apadrinar", label: "Apadrinar y Donar" },
];

export default function NavBar() {
  const pathname = usePathname();
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const html = document.documentElement;

    if (isDarkMode) {
      html.setAttribute("data-theme", "dark");
      html.classList.add("dark");
      document.documentElement.classList.add("cs-theme", "dark");
    } else {
      html.removeAttribute("data-theme");
      html.classList.remove("dark");
      document.documentElement.classList.remove("cs-theme", "light");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--clr-border)] bg-[color-mix(in_srgb,var(--clr-bg)_88%,transparent)] backdrop-blur-[12px] transition-[background-color,border-color] duration-300 ease-in-out">
      <nav className="mx-auto flex h-[68px] max-w-[var(--max-w)] items-center gap-[var(--space-xl)] px-[var(--space-lg)] max-[768px]:gap-[var(--space-md)] max-[640px]:h-auto max-[640px]:flex-wrap max-[640px]:justify-center max-[640px]:gap-[var(--space-sm)] max-[640px]:py-[var(--space-sm)] before:max-[640px]:order-2 before:max-[640px]:basis-full before:max-[640px]:content-['']">
        <Link
          href="/"
          className="shrink-0 max-[640px]:order-1 max-[640px]:mr-auto"
        >
          <Image
            src="/logo.png"
            alt="logo de la pagina"
            width={100}
            height={100}
            className="block h-[38px] w-auto shrink-0 object-contain"
          />
        </Link>
        {NAV_LINKS.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`whitespace-nowrap text-[0.9rem] [transition:color_var(--transition)] hover:text-[var(--clr-text)] max-[640px]:order-3 max-[640px]:px-[var(--space-xs)] max-[640px]:text-[0.85rem] ${
                isActive
                  ? "font-medium text-[var(--clr-primary-hover)]"
                  : "text-[var(--clr-text-muted)]"
              }`}
            >
              {link.label}
            </Link>
          );
        })}

        <div className="ml-auto flex items-center gap-[var(--space-sm)] max-[640px]:order-1 max-[640px]:ml-0">
          <button
            onClick={toggleDarkMode}
            id="btn-theme"
            aria-label="Cambiar tema"
            className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-[var(--radius-full)] border border-[var(--clr-border)] bg-transparent text-base leading-none text-[var(--clr-text-secondary)] [transition:background_var(--transition),border-color_var(--transition)] hover:border-[var(--clr-text-secondary)] hover:bg-[var(--clr-bg-elevated)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--clr-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--clr-bg)]"
          >
            {isDarkMode ? "🌙" : "☀️"}
          </button>
          <Link
            href="/catalogo"
            className="inline-flex w-fit cursor-pointer items-center whitespace-nowrap rounded-[var(--radius-full)] border border-transparent bg-[var(--clr-primary)] px-5 py-[0.55rem] text-sm font-medium text-[var(--clr-primary-text)] [transition:background_var(--transition)] hover:bg-[var(--clr-primary-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--clr-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--clr-bg)]"
          >
            Apadrinar
          </Link>
        </div>
      </nav>
    </header>
  );
}

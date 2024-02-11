"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export default function ActiveLink({ children, href }: { children: ReactNode; href: string }) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={`font-bold py-1 px-1 navigation-link  ${
        pathname === href ? "text-[red]" : "text-[black]"
      }`}
    >
      {children}
    </Link>
  );
}

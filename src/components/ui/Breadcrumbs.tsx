"use client";

import Link from "next/link";
import { ChevronRight } from "@/components/icons";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className="mb-6 flex items-center gap-2 text-sm" aria-label="Breadcrumb">
      {items.map((item, i) => (
        <div key={i} className="flex items-center gap-2">
          {i > 0 && (
            <ChevronRight className="h-4 w-4 text-white/40" />
          )}
          {item.href ? (
            <Link
              href={item.href}
              className="text-white/60 transition hover:text-white/80"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-white/90">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  );
}








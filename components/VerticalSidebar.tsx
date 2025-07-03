"use client";

import Link from "next/link";

const navItems = [
  { label: "ABOUT", href: "/about" },
  { label: "SKILLS", href: "/skills" },
  { label: "PROJECTS", href: "/projects" },
  { label: "CONTACT", href: "/contact" },
];

export default function VerticalSidebar() {
  return (
    <div className="hidden lg:flex fixed left-0 top-0 h-screen px-4 z-50">
      <div className="flex flex-col justify-center items-center h-full gap-2">
        <div className="h-[40px] w-[2px] bg-black" />
        {navItems.map((item) => (
          <Link key={item.href} href={item.href}>
            <span
              className="text-[13px] font-bold text-gray-700 hover:line-through focus:line-through transition-all duration-300"
              style={{
                writingMode: "vertical-rl",
                textOrientation: "upright",
              }}
            >
              {item.label}
            </span>
          </Link>
        ))}
        <div className="h-[40px] w-[2px] bg-black" />
      </div>
    </div>
  );
}

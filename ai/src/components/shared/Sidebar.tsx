"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";
import { navLinks } from "../../../constants";

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <aside className="sidebar">
      <div className="flex size-full flex-col gap-4">
        <Link href="/" className="sidebar-logo">
          Logo
        </Link>
        <nav className="sidebar-nav">
          <ul className="sidebar-nav_elements">
            {navLinks.slice(0, 6).map((link) => {
              const isActive = link.route === pathname;
              return (
                <li
                  key={link.route}
                  className={`sidebar-nav_element group border border-red-600 ${
                    isActive ? "gradient-text text-white " : "text-gray-700"
                  }`}
                >
                  <Link className="sidebar-link" href={link.route}>
                    <Image
                      src={link.icon}
                      alt="a logo"
                      width={24}
                      height={24}
                      className={`${isActive && "brightness-200"}`}
                    />
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <ul className="sidebar-nav_elements">
            {navLinks.slice(6).map((link) => {
              const isActive = link.route === pathname;
              return (
                <li
                  key={link.route}
                  className={`sidebar-nav_element group border border-red-600 ${
                    isActive ? "gradient-text text-white " : "text-gray-700"
                  }`}
                >
                  <Link className="sidebar-link" href={link.route}>
                    <Image
                      src={link.icon}
                      alt="a logo"
                      width={24}
                      height={24}
                      className={`${isActive && "brightness-200"}`}
                    />
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;

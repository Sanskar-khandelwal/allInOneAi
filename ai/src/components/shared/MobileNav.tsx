"use client";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { navLinks } from "../../../constants";
import { usePathname } from "next/navigation";

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <header className="header">
      <Link href="/">Home</Link>
      <Sheet>
        <SheetTrigger>
          {" "}
          <Image
            src="/assets/icons/menu.svg"
            alt="menu bar"
            width={32}
            height={32}
            className="cursor-pointer"
          />
        </SheetTrigger>
        <SheetContent className="sheet-content sm:w-64">
          <SheetHeader>
            <>
              <h1>logo</h1>
              <ul className="header-nav_elements">
                {navLinks.map((link) => {
                  const isActive = link.route === pathname;
                  return (
                    <li
                      key={link.route}
                      className={` ${
                        isActive
                          ? "gradient-text  flex whitespace-nowrap text-black"
                          : ""
                      }`}
                    >
                      <Link
                        className="sidebar-link cursor-pointer"
                        href={link.route}
                      >
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
            </>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default MobileNav;

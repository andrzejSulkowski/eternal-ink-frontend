"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import type { EIProps, EIRoute } from "@/types";
import { classNames } from "@/utils/className";
import Button from "@/components/1.atoms/Button/Button";
import Routes from "./parts/Routes/Routes";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import { useIsMobile } from "@/hooks/useIsMobile";

interface Props extends EIProps {
  routes: EIRoute[];
}

function Header({ className, children, routes }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const headerRef = useRef<HTMLDivElement>(null);

  const onCTAClick = useCallback(() => {
    router.push("/engrave");
    setIsMobileMenuOpen(false);
  }, [router, setIsMobileMenuOpen]);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }, [setIsMobileMenuOpen, isMobileMenuOpen]);

  const getMobileMenuHeight = useCallback(() => {
    if (headerRef.current) {
      return headerRef.current.clientHeight;
    }
    return 0;
  }, [headerRef]);

  useEffect(() => {
    //Every time we route to another page we close the mobile menu
    setTimeout(() => setIsMobileMenuOpen(false), 50);
  }, [pathname]);

  const Separator = ({ className }: EIProps) => {
    return (
      <div
        className={classNames("h-1 w-full bg-ei-primary-royal/30", className)}
      />
    );
  };

  return (
    <AnimatePresence>
      <motion.header
        className={classNames(
          "w-full px-6 py-4  font-manrope text-white",
          "border-b border-solid  z-10 border-b-[#242438]",
          `${isMobileMenuOpen ? "bg-black" : "bg-gradient-to-b from-[#070514] to-transparent"}`,
          className
        )}
        animate={{
          backgroundColor: isMobileMenuOpen ? "black" : "transparent",
        }}
        transition={{ type: "tween" }}
        ref={headerRef}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between relative">
          {/* Left Side */}
          <div className="flex justify-center items-center gap-24">
            <Link
              className="font-bold font-kanit text-4xl md:text-2xl"
              href="/"
            >
              Engrave
            </Link>

            {isMobile === false && <Routes routes={routes} />}
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {children}
            <Button onClick={onCTAClick}>
              <Link href="/engrave">Begin Your Legacy</Link>
            </Button>
          </nav>

          {/* Mobile Burger Icon */}
          {isMobile && (
            <div>
              <button
                onClick={toggleMobileMenu}
                aria-label="Toggle Menu"
                className="focus:outline-none"
              >
                {isMobileMenuOpen ? (
                  <HiOutlineX className="w-14 h-14" />
                ) : (
                  <HiOutlineMenu className="w-14 h-14" />
                )}
              </button>
            </div>
          )}
        </div>
        {/* Mobile Menu */}
        {isMobile && (
          <motion.nav
            className={classNames(
              `bg-black rounded-lg shadow-lg absolute bottom-0 left-0 right-0`
            )}
            style={{ top: getMobileMenuHeight() }}
            initial={{
              transform: "translateX(-100%)",
              opacity: 0,
            }}
            animate={{
              transform: isMobileMenuOpen
                ? "translateX(0%)"
                : "translateX(-100%)",
              opacity: isMobileMenuOpen ? 1 : 0,
            }}
            transition={{ type: "tween" }}
          >
            <div className="flex flex-col justify-between h-full items-center w-full">
              {/* Header */}
              <div className="w-full">
                <Separator className="mb-12" />
                <Routes
                  className="flex flex-col"
                  routes={routes}
                  onClick={() => setIsMobileMenuOpen(false)}
                />
              </div>
              {/* Body */}
              <div>{children}</div>

              {/* Footer */}
              <div className="mb-12 w-10/12">
                <Separator className="mb-20" />
                <Button onClick={onCTAClick} className="w-full mt-4 text-4xl">
                  <Link
                    className="text-2xl text-center w-full py-3"
                    href="/engrave"
                  >
                    Begin Your Legacy
                  </Link>
                </Button>
              </div>
            </div>
          </motion.nav>
        )}
      </motion.header>
    </AnimatePresence>
  );
}

export default Header;

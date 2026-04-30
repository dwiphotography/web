import { useDatastore, useRemoteAsssets } from "@/lib/SparkUtils";
import { cn } from "@/lib/utils";
import { Link } from "@tanstack/react-router";
import { Dot, Menu } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const datastore = useDatastore("r--r--r--");

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 25);
        onScroll();
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <>
            <motion.nav
                className={cn(
                    "z-50 transition-all duration-300 ease-out",
                    "fixed top-0 inset-x-0",
                    scrolled && "bg-transparent backdrop-blur-xs"
                )}
                style={{ filter: "brightness(1)" }}
            >
                <div className="mx-auto max-w-8xl px-4 py-3 sm:px-6 sm:py-4 md:px-8 lg:px-12">
                    <div className="flex items-start justify-between gap-8 md:justify-start lg:gap-12">
                        <Link to="/" className="flex items-top gap-2 mr-16">
                            <img
                                alt={`${datastore.name} Logo`}
                                width={30}
                                height={30}
                                className=""
                                src={useRemoteAsssets("/c/logo.webp")}
                            />
                            <span className="flex items-center justify-center text-base font-bold bg-linear-to-br from-yellow-300 via-white to-yellow-600 bg-clip-text text-transparent sm:text-lg">
                                {datastore.name}
                            </span>
                        </Link>
                        <div className="hidden items-start gap-6 lg:flex lg:gap-8">
                            <div className="group relative w-fit mt-1.5 mr-26 align-center isolate">
                                <p className="text-xs text-white uppercase tracking-wider font-bold cursor-pointer z-40">
                                    Services
                                </p>

                                <div
                                    className={
                                        //@NeedImprove
                                        cn(
                                            "absolute top-full left-0 mt-2 space-y-2 translate-y-2 transition-all duration-200 min-w-80 z-30",

                                            scrolled && [
                                                "opacity-0 pointer-events-none",
                                                "group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto",
                                                "bg-neutral-900/70 backdrop-blur-md",
                                                "border border-white/10",
                                                "shadow-lg shadow-black/20",
                                                "pt-8 pb-2 px-8 -ml-4 -mt-7 rounded-xl"
                                            ]
                                        )
                                    }
                                >
                                    <Link to="/studio-photography" className="block text-sm text-neutral-400 hover:text-white transition text-shadow-lg">
                                        Studio Photography
                                    </Link>
                                    <Link to="/wedding-coverage" className="block text-sm text-neutral-400 hover:text-white transition text-shadow-lg">
                                        Wedding Coverage
                                    </Link>
                                    <Link to="/prewedding-shoot" className="block text-sm text-neutral-400 hover:text-white transition text-shadow-lg">
                                        Prewedding Shoot
                                    </Link>
                                    <Link to="/product-shoot" className="block text-sm text-neutral-400 hover:text-white transition text-shadow-lg">
                                        Product Shoot
                                    </Link>
                                </div>
                            </div>
                            <div className="group relative w-fit mt-1.5 mr-26 isolate">
                                <p className="text-xs text-white uppercase tracking-wider font-bold cursor-pointer z-40">
                                    Studio
                                </p>

                                <div
                                    className={
                                        //@NeedImprove
                                        cn(
                                            "absolute top-full left-0 mt-2 space-y-2 translate-y-2 transition-all duration-200 min-w-80 z-30",

                                            scrolled && [
                                                "opacity-0 pointer-events-none",
                                                "group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto",
                                                "bg-neutral-900/70 backdrop-blur-md",
                                                "border border-white/10",
                                                "shadow-lg shadow-black/20",
                                                "pt-8 pb-2 px-8 -ml-4 -mt-7 rounded-xl"
                                            ]
                                        )
                                    }
                                >
                                    <Link to="/about-us" className="block text-sm text-neutral-400 hover:text-white transition text-shadow-lg">
                                        About Us
                                    </Link>
                                    <Link to="/gallery" className="block text-sm text-neutral-400 hover:text-white transition text-shadow-lg">
                                        Gallery
                                    </Link>
                                </div>
                            </div>
                            <div className="space-y-3 isolate">
                                <Link to="/#contact-us" className="text-xs text-white uppercase tracking-wider font-bold">
                                    Contact Us
                                </Link>

                                <div className="space-y-2 mr-8">

                                </div>
                            </div>
                        </div>
                        <button
                            onClick={() => setOpen(!open)}
                            className="absolute right-8 flex h-8 w-8 flex-col items-center justify-center gap-1.5 lg:hidden"
                            aria-label="Toggle menu"
                        >
                            <Menu />
                        </button>
                    </div>
                </div>
            </motion.nav>
            <AnimatePresence>
                {open && (
                    <div className="z-100 lg:hidden">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.35 }}
                            onClick={() => setOpen(false)}
                            className="fixed inset-0 z-80 bg-black/70 backdrop-blur-sm"
                        />

                        <motion.aside
                            initial={{ x: 320, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: 320, opacity: 0 }}
                            transition={{
                                duration: 0.45,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="fixed top-0 right-0 z-90 h-screen w-80 border-l border-white/10 bg-black/30 backdrop-blur-2xl shadow-2xl"
                        >
                            <div
                                className="group/sidebar-btn relative m-2 h-full w-75 shrink-0 px-4 py-4 md:flex md:flex-col justify-between gap-10"
                                style={{ width: 300 }}>
                                <div className="flex flex-1 flex-col overflow-x-hidden overflow-y-auto">
                                    <Link
                                        className="relative z-20 flex items-center space-x-2 px-2 py-1 text-sm font-normal text-black"
                                        to="/"
                                        onClick={() => { setOpen(false) }}
                                    >
                                        <img
                                            alt={`${datastore.name} Logo`}
                                            width={30}
                                            height={30}
                                            className=""
                                            src={useRemoteAsssets("/c/logo.webp")}
                                        />
                                        <span
                                            className="whitespace-pre font-bold bg-linear-to-br from-yellow-300 via-white to-yellow-600 bg-clip-text text-transparent"
                                            style={{ opacity: 1 }}
                                        >
                                            {datastore.name}
                                        </span>
                                    </Link>
                                    <div className="mt-4">
                                        <div className="h-px w-full bg-neutral-200 dark:bg-neutral-700" />
                                        <div className="h-px w-full bg-white dark:bg-neutral-900" />
                                    </div>
                                    <div className="mt-4 flex flex-col gap-1">
                                        <div>
                                            <div className="relative flex w-full items-center gap-2 rounded-md px-2 py-2 text-sm font-medium transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-700 text-neutral-900 dark:text-white">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={24}
                                                    height={24}
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth={2}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="size-5 shrink-0 text-neutral-700 dark:text-neutral-400"
                                                >
                                                    <path d="M5 4h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2" />
                                                </svg>
                                                <span
                                                    className="flex-1 whitespace-pre text-left"
                                                    style={{ display: "inline-block", opacity: 1 }}
                                                >
                                                    Services
                                                </span>
                                            </div>
                                            <div className="overflow-hidden" style={{ height: "auto", opacity: 1 }}>
                                                <div className="mt-1 ml-2 space-y-0.5 border-l border-neutral-200 pl-2 dark:border-neutral-700">
                                                    <Link
                                                        className="group/sidebar flex items-center justify-start gap-2 rounded-md px-2 hover:bg-neutral-100 dark:hover:bg-neutral-700 py-1.5 text-sm"
                                                        to="/studio-photography"
                                                        onClick={() => { setOpen(false) }}
                                                    >
                                                        <Dot />
                                                        <span
                                                            className="m-0! inline-block p-0! whitespace-pre text-sm text-neutral-700 dark:text-neutral-400"
                                                            style={{ display: "inline-block", opacity: 1 }}
                                                        >
                                                            Studio Photography
                                                        </span>
                                                    </Link>
                                                    <Link
                                                        className="group/sidebar flex items-center justify-start gap-2 rounded-md px-2 hover:bg-neutral-100 dark:hover:bg-neutral-700 py-1.5 text-sm"
                                                        to="/wedding-coverage"
                                                        onClick={() => { setOpen(false) }}
                                                    >
                                                        <Dot />
                                                        <span
                                                            className="m-0! inline-block p-0! whitespace-pre text-sm text-neutral-700 dark:text-neutral-400"
                                                            style={{ display: "inline-block", opacity: 1 }}
                                                        >
                                                            Wedding Coverage
                                                        </span>
                                                    </Link>
                                                    <Link
                                                        className="group/sidebar flex items-center justify-start gap-2 rounded-md px-2 hover:bg-neutral-100 dark:hover:bg-neutral-700 py-1.5 text-sm"
                                                        to="/prewedding-shoot"
                                                        onClick={() => { setOpen(false) }}
                                                    >
                                                        <Dot />
                                                        <span
                                                            className="m-0! inline-block p-0! whitespace-pre text-sm text-neutral-700 dark:text-neutral-400"
                                                            style={{ display: "inline-block", opacity: 1 }}
                                                        >
                                                            Prewedding Shoot
                                                        </span>
                                                    </Link>
                                                    <Link
                                                        className="group/sidebar flex items-center justify-start gap-2 rounded-md px-2 hover:bg-neutral-100 dark:hover:bg-neutral-700 py-1.5 text-sm"
                                                        to="/product-shoot"
                                                        onClick={() => { setOpen(false) }}
                                                    >
                                                        <Dot />
                                                        <span
                                                            className="m-0! inline-block p-0! whitespace-pre text-sm text-neutral-700 dark:text-neutral-400"
                                                            style={{ display: "inline-block", opacity: 1 }}
                                                        >
                                                            Product Shoot
                                                        </span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="relative flex w-full items-center gap-2 rounded-md px-2 py-2 text-sm font-medium transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-700 text-neutral-900 dark:text-white">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={24}
                                                    height={24}
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth={2}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="size-5 shrink-0 text-neutral-700 dark:text-neutral-400"
                                                >
                                                    <path d="M5 4h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2" />
                                                </svg>
                                                <span
                                                    className="flex-1 whitespace-pre text-left"
                                                    style={{ display: "inline-block", opacity: 1 }}
                                                >
                                                    Studio
                                                </span>
                                            </div>
                                            <div className="overflow-hidden" style={{ height: "auto", opacity: 1 }}>
                                                <div className="mt-1 ml-2 space-y-0.5 border-l border-neutral-200 pl-2 dark:border-neutral-700">
                                                    <Link
                                                        className="group/sidebar flex items-center justify-start gap-2 rounded-md px-2 hover:bg-neutral-100 dark:hover:bg-neutral-700 py-1.5 text-sm"
                                                        to="/about-us"
                                                        onClick={() => { setOpen(false) }}
                                                    >
                                                        <Dot />
                                                        <span
                                                            className="m-0! inline-block p-0! whitespace-pre text-sm text-neutral-700 dark:text-neutral-400"
                                                            style={{ display: "inline-block", opacity: 1 }}
                                                        >
                                                            About Us
                                                        </span>
                                                    </Link>
                                                    <Link
                                                        className="group/sidebar flex items-center justify-start gap-2 rounded-md px-2 hover:bg-neutral-100 dark:hover:bg-neutral-700 py-1.5 text-sm"
                                                        to="/gallery"
                                                        onClick={() => { setOpen(false) }}
                                                    >
                                                        <Dot />
                                                        <span
                                                            className="m-0! inline-block p-0! whitespace-pre text-sm text-neutral-700 dark:text-neutral-400"
                                                            style={{ display: "inline-block", opacity: 1 }}
                                                        >
                                                            Gallery
                                                        </span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-1 flex flex-col">
                                        <Link
                                            className="group/sidebar flex items-center justify-start gap-2 rounded-md px-2 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-700"
                                            to="/#contact-us"
                                            onClick={() => { setOpen(false) }}
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={24}
                                                height={24}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="size-5 shrink-0 text-neutral-700 dark:text-neutral-400"
                                            >
                                                <path d="M8 9l3 3l-3 3" />
                                                <path d="M13 15l3 0" />
                                                <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
                                            </svg>
                                            <span
                                                className="m-0! inline-block p-0! whitespace-pre text-sm text-neutral-700 dark:text-neutral-400"
                                                style={{ display: "inline-block", opacity: 1 }}
                                            >
                                                Contact Us
                                            </span>
                                        </Link>
                                    </div>
                                    <div className="mt-4">
                                        <div className="h-px w-full bg-neutral-200 dark:bg-neutral-700" />
                                        <div className="h-px w-full bg-white dark:bg-neutral-900" />
                                    </div>
                                </div>
                            </div>
                        </motion.aside>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
}
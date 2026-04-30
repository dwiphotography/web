import { Link } from "@tanstack/react-router";
import { ShinyButton } from "@/components/magicui/shiny-button";
import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";
import { useRemoteAsssets } from "@/lib/SparkUtils";

export default function HeroSection() {
    return (
        <section className="relative flex min-h-screen w-full flex-col justify-end p-4 md:p-14" id="heroSection">
            <div
                className="pointer-events-none absolute overflow-hidden w-full h-full"
            >
                <img
                    alt="Background"
                    className="h-full w-full mask-t-from-20% mask-b-from-50% mask-l-from-50% object-cover object-center"
                    src={useRemoteAsssets("/c/background.webp")}
                    fetchPriority="high"
                />
            </div>
            <div className="pointer-events-none absolute inset-x-0 top-4 h-px w-full md:top-10 bg-neutral-800 opacity-0" />
            <div className="pointer-events-none absolute inset-x-0 bottom-4 h-px w-full md:bottom-10 bg-neutral-800" />
            <div className="pointer-events-none absolute inset-y-0 left-4 h-full w-px md:left-10 bg-neutral-800 opacity-0" />
            <div className="pointer-events-none absolute inset-y-0 right-4 h-full w-px md:right-10 bg-neutral-800 opacity-0" />
            <div className="relative z-40 p-4 md:p-4">
                <h1 className="max-w-3xl font-medium tracking-tight text-neutral-800 text-6xl lg:text-8xl dark:text-neutral-200 font-edwardianscriptitc">
                    Remember Your Moment
                </h1>
                <p className="mt-4 max-w-xl text-base text-neutral-600 md:mt-6 md:text-lg dark:text-neutral-400">
                    Elegant portraits, cinematic wedding shots, and premium studio sessions crafted to preserve every detail beautifully.
                </p>
                <div className="mt-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center md:mt-10">
                    <Link to="/services">
                        <ShinyButton>
                            Book Session
                        </ShinyButton>
                    </Link>
                    <Link to="/services" className="z-10 flex items-center justify-center">
                        <div
                            className="group rounded-lg border text-base text-white transition-all ease-in hover:cursor-pointer border-white/5 bg-neutral-900 hover:bg-neutral-800"
                        >
                            <AnimatedShinyText className="inline-flex items-center justify-center px-6 py-1.5 transition ease-out hover:duration-300 hover:text-neutral-400">
                                <span>View Portfolio</span>
                            </AnimatedShinyText>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
}            
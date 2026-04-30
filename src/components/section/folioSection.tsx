import { FolioPanels, type PanelsRef } from "@/components/section/folioSectionPanels";
import { useRef } from "react";
import { Link } from "@tanstack/react-router";

export default function FolioSection() {
    const panelsRef = useRef<PanelsRef>();

    return (
        <section className="w-full py-16 px-20 md:pb-30">
            <div className="text-center md:text-start mb-12 space-y-3 relative">
                <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-muted-foreground font-medium">
                    {"["} Featured Work {"]"}
                </p>

                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
                    Through Our Lens
                </h2>

                <p className="max-w-2xl text-sm sm:text-base text-muted-foreground leading-relaxed">
                    A curated collection of moments we’ve captured with creativity, detail, and emotion.
                </p>
                <div className="hidden md:block absolute top-0 right-0 -mt-0.5">
                    <Link to="/gallery">Go To Gallery</Link>
                </div>
            </div>
            <FolioPanels ref={panelsRef} />
            <div className="mt-16 md:hidden text-center">
                <Link to="/gallery">Go To Gallery</Link>
            </div>
        </section>
    );
}
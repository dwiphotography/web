import { useDatastore, useRemoteAsssets } from "@/lib/SparkUtils";
import { Link } from "@tanstack/react-router";
import { SectionTemplate } from "@/components/SectionTemplate";

const services: {
    image: string;
    title: string;
    description: string;
}[] = [
  {
    image: "https://images.unsplash.com/photo-1529636798458-92182e662485",
    title: "Digital Copy",
    description: "High-resolution edited photos delivered digitally, ready for download, sharing, and printing anytime you need.",
  },
  {
    image: "https://images.unsplash.com/photo-1519741497674-611481863552",
    title: "Magnetic Album*",
    description: "A premium album with flexible magnetic pages, allowing you to arrange and preserve your photos beautifully your way.",
  },
  {
    image: "https://images.unsplash.com/photo-1520854221256-17451cc331bf",
    title: "Magazine Album*",
    description: "A modern, magazine-style photo book with clean layouts and storytelling design, perfect for showcasing your moments.",
  },
  {
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    title: "Frame Block*",
    description: "A sleek, ready-to-display frame with a solid build, designed to highlight your favorite photo in any space.",
  }
];

export default function InclusionSection() {
  return (
    <SectionTemplate
        catagory="Inclusions"
        title="What You Will Get"
        description="All sessions include high-quality digital photos, with prints and frames available in selected* packages."
        type="left"
        className="relative"
    >
        <div className="grid gap-0 md:grid-cols-2 xl:grid-cols-4 -mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative h-110 md:h-105 overflow-hidden md:rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 md:m-4 cursor-pointer"
            >
              <img
                src={(`${service.image}`)}
                alt={`${service.title} Inclusion`}
                className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent transition duration-300 group-hover:from-black/90 group-hover:via-black/50" />

              <div className="relative z-10 flex h-full flex-col justify-end p-4 sm:p-6 text-white">
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold leading-tight">
                  {service.title} <br className="block sm:hidden" />
                  <span className="inline sm:hidden">Photography</span>
                </h3>

                <p className="mt-2 sm:mt-3 text-xs sm:text-sm leading-relaxed text-white/90 line-clamp-4 sm:line-clamp-4 md:line-clamp-3 xl:line-clamp-4">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-4 h-px w-full md:bottom-10 bg-neutral-800" />
    </SectionTemplate>
  );
}
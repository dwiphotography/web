import { useDatastore, useRemoteAsssets } from "@/lib/SparkUtils";
import { Link } from "@tanstack/react-router";
import { SectionTemplate } from "@/components/SectionTemplate";

const services = useDatastore().services;

export default function ServiceSection() {
  return (
    <SectionTemplate
        catagory="Services"
        title="Capture Every Moment"
        description="Thoughtfully crafted photography services designed to preserve your moments with clarity, emotion, and style that you’ll always remember."
        type="right"
    >
        <div className="grid gap-0 md:grid-cols-2 xl:grid-cols-4 -mb-12">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.href}
              className="group relative h-110 md:h-105 overflow-hidden md:rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 md:m-4 cursor-pointer"
            >
              <img
                src={useRemoteAsssets(`/b/${service.image}`)}
                alt={`${service.title} Photography`}
                className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent transition duration-300 group-hover:from-black/90 group-hover:via-black/50" />

              <div className="relative z-10 flex h-full flex-col justify-end p-4 sm:p-6 text-white">
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold leading-tight">
                  {service.title} <br className="block sm:hidden" />
                  <span className="inline sm:hidden">Photography</span>
                </h3>

                <p className="mt-2 sm:mt-3 text-xs sm:text-sm leading-relaxed text-white/90 line-clamp-3">
                  {service.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
    </SectionTemplate>
  );
}
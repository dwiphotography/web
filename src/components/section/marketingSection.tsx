import { useDatastore, useRemoteAsssets } from "@/lib/SparkUtils";
import { Link } from "@tanstack/react-router";
import { SectionTemplate } from "@/components/SectionTemplate";
import { TestimonialCard } from "../TestimonialCard";

const testimonials = [
    {
        quote:
            "The efficiency it brings is unmatched. It's a vital tool that has helped us cut costs significantly.",
        name: "Eva Green",
        role: "Operations Director",
        avatar: "https://assets.aceternity.com/avatars/7.webp",
    },
    {
        quote:
            "A robust solution that fits perfectly into our workflow. It has enhanced our team's capabilities greatly.",
        name: "Frank Moore",
        role: "Project Manager",
        avatar: "https://assets.aceternity.com/avatars/8.webp",
    },
    {
        quote:
            "It's incredibly intuitive and easy to use. Even non-technical users can leverage its power effectively.",
        name: "Grace Hall",
        role: "Marketing Specialist",
        avatar: "https://assets.aceternity.com/avatars/9.webp",
    },
    {
        quote: "Extra item (won’t show)",
        name: "Hidden User",
        role: "Hidden Role",
        avatar: "",
    },
];

export default function MarketingSection() {
    const visibleItems = testimonials.slice(0, 3);

    return (
        <>
            <SectionTemplate
                catagory="Marketing"
                title="Why Choose Us"
                description="Thoughtfully crafted photography with attention to detail, consistency, and a smooth, professional experience from start to finish."
                type="right"
            >

            </SectionTemplate>
            <SectionTemplate
                title="Testimonials"
                description="Real stories and feedback from clients who trusted us to capture their moments and deliver results they truly value."
                type="left"
                topChildren={(
                    <div className="md:absolute md:top-0 md:right-0">
                        <button
                            type="button"
                            aria-label="Next testimonials"
                            className="flex h-10 w-40 items-center justify-center rounded-full border border-black/15 text-black transition duration-200 hover:bg-black/5 active:scale-98 dark:border-white/20 dark:text-white dark:hover:bg-white/10"
                        >
                            No Data
                            <svg
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                className="size-5"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="m9 18 6-6-6-6" />
                            </svg>
                        </button>
                    </div>
                )}
            >
                <div className="mt-8 grid gap-4 md:mt-12 md:grid-cols-3">
                    {visibleItems.map((item, index) => (
                        <div key={index} className="h-full">
                            <TestimonialCard disable={true} item={item} />
                        </div>
                    ))}
                </div>
            </SectionTemplate>
        </>
    );
}
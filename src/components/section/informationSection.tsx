import { useDatastore, useRemoteAsssets } from "@/lib/SparkUtils";
import { Link } from "@tanstack/react-router";
import { SectionTemplate } from "@/components/SectionTemplate";
import { FAQList } from "../FAQList";
import { FaInstagram, FaTiktok, FaWhatsapp, FaYoutube } from "react-icons/fa6";

type FAQList = {
    question: string;
    answer?: string;
}[];

const items = [
    {
        question: "q",
        answer: "a",
    },
    {
        question: "q",
        answer: "a",
    },
    {
        question: "q",
        answer: "a",
    },
    {
        question: "q",
        answer: "a",
    }
] as FAQList;

export default function InformationSection() {
    return (
        <>
            <SectionTemplate
                catagory="Information"
                title="Pricing Preview"
                description="A quick overview of our packages and what’s included, so you can easily find the option that fits your needs."
                type="right"
            >

            </SectionTemplate>
            <SectionTemplate
                title="FAQ"
                description="Clear answers to common questions about our process, services, and what to expect."
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
                <div className="2xl:max-w-[50%]">
                    <FAQList items={items} />
                </div>
            </SectionTemplate>
            <SectionTemplate
                title="Let’s Connect"
                description="Quick response on WhatsApp or explore our work on Instagram. We’re ready when you are."
                type="right"
            >
                <div className="space-y-6">

                    {/* PRIMARY ACTIONS */}
                    <div className="grid gap-4 sm:grid-cols-2">

                        {/* WhatsApp - MAIN CTA */}
                        <a
                            href="https://wa.me/6281234567890"
                            target="_blank"
                            className="group flex items-center justify-between rounded-2xl bg-green-500 p-6 text-white shadow-xl transition hover:scale-[1.03]"
                        >
                            <div className="flex items-center gap-2">
                                <FaWhatsapp size={50} />
                                <div>
                                    <p className="text-sm opacity-80">Fastest Response</p>
                                    <p className="text-xl font-semibold">Chat on WhatsApp</p>
                                </div>
                            </div>
                            <span className="text-2xl transition group-hover:translate-x-1">↗</span>
                        </a>

                        {/* Instagram Hub */}
                        <div className="rounded-2xl bg-linear-to-br from-pink-500 to-purple-500 p-6 text-white shadow-xl h-84">
                            <div className="flex items-center gap-2">
                                <FaInstagram size={40} className="mb-4" />
                                <div>
                                    <p className="text-sm opacity-80">Our Work</p>
                                    <p className="mb-4 text-xl font-semibold">Instagram</p>
                                </div>
                            </div>

                            <div className="space-y-2 text-sm">
                                {[
                                    { name: "dwiphotography8", label: "Main", url: "https://www.instagram.com/dwiphotography8/" },
                                    { name: "dwiphotography8.studio", label: "Studio", url: "https://www.instagram.com/dwiphotography8.studio/" },
                                    { name: "bisnisviralpurwodadi", label: "Viral", url: "https://www.instagram.com/bisnisviralpurwodadi/" },
                                    { name: "photoboothpurwodadi", label: "Photobooth", url: "https://www.instagram.com/photoboothpurwodadi" },
                                    { name: "linta.fotoprinting", label: "Printing", url: "https://www.instagram.com/linta.fotoprinting" },
                                ].map((acc) => (
                                    <a
                                        key={acc.name}
                                        href={acc.url}
                                        target="_blank"
                                        className="flex items-center justify-between rounded-lg bg-white/10 px-3 py-2 transition hover:bg-white/20"
                                    >
                                        <span>{"@"}{acc.name}</span>
                                        <span className="text-xs">↗</span>
                                    </a>
                                ))}
                            </div>
                        </div>

                    </div>

                    {/* SECONDARY */}
                    <div className="grid gap-4 md:grid-cols-2">

                        {/* Map - subtle */}
                        <div className="overflow-hidden rounded-xl ring-1 ring-black/10 dark:ring-white/10 h-84">
                            <iframe
                                src={"https://www.google.com/maps?q=" + encodeURI("Dwi Photogrpahy Jl. Wirosari–Kuwu Km 5, Desa Kropak, Kecamatan Wirosari, Purwodadi, Jawa Tengah 58192, Indonesia") + "&output=embed"}
                                className="h-84 w-full border-0 opacity-90"
                                loading="lazy"
                            ></iframe>
                        </div>

                        {/* Other Socials */}
                        <div className="flex flex-col justify-center gap-2 rounded-xl bg-white p-4 shadow-sm ring-1 ring-black/10 dark:bg-neutral-900 dark:ring-white/10">
                            <p className="text-sm font-medium opacity-70">More Platforms</p>

                            <a href="#" className="text-sm hover:underline flex items-center gap-2"><FaYoutube />YouTube</a>
                            <a href="#" className="text-sm hover:underline flex items-center gap-2"><FaTiktok />TikTok</a>
                        </div>

                    </div>

                </div>
            </SectionTemplate>
        </>
    );
}
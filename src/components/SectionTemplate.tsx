import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function SectionTemplate({
    catagory,
    title,
    description,
    className,
    children,
    topChildren = (<></>),
    type = "left",
    ...props
}: {
    catagory?: string;
    title: string;
    description?: string;
    className?: string;
    children?: ReactNode;
    topChildren?: ReactNode;
    type?: "left" | "center" | "right";
}) {
    return (
        <section className={cn("w-full py-16 px-20 md:pb-30", className)} {...props}>
            <div className={cn(
                    "text-center items-center mb-12 space-y-3 relative",
                    type === "center" ? "md:text-center md:items-center" : (type === "left" ? "md:text-start md:items-start" : "md:text-end md:items-end")
                )}
            >
                {catagory && (
                    <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-muted-foreground font-medium">
                        {`[ ${catagory} ]`}
                    </p>
                )}

                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
                    {title}
                </h2>

                {description && (
                    <p className={cn("text-sm sm:text-base text-muted-foreground leading-relaxed", type === "left" ? "" : "w-full")}>
                        {description}
                    </p>
                )}
                {topChildren}
            </div>
            {children}
        </section>
    );
}
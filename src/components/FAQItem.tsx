import type { ReactNode } from "react";
import { Skeleton } from "./ui/skeleton";

type FAQItemProps = {
    item: {
        question: string | ReactNode;
        answer?: string | ReactNode;
    };
    open: boolean;
    onToggle: () => void;
    disable?: boolean;
};

export function FAQItem({ item, open, onToggle, disable }: FAQItemProps) {
    return (
        <div
            className={`relative rounded-lg transition-all duration-200 ${open
                ? "bg-white shadow-sm ring-1 shadow-black/10 ring-black/10 dark:bg-neutral-900 dark:shadow-white/5 dark:ring-white/10"
                : "hover:bg-neutral-50 dark:hover:bg-neutral-900"
                }`}
        >
            {/* fancy border */}
            {open && (
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute -left-12.5 -top-0.5 w-[calc(100%+100px)] h-px bg-[linear-gradient(to_right,rgba(0,0,0,0.2)_50%,transparent_0)] bg-size-[5px_1px] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.2)_50%,transparent_0)]" />
                    <div className="absolute -left-12.5 -bottom-0.5 w-[calc(100%+100px)] h-px bg-[linear-gradient(to_right,rgba(0,0,0,0.2)_50%,transparent_0)] bg-size-[5px_1px] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.2)_50%,transparent_0)]" />
                    <div className="absolute -top-12.5 -left-0.5 h-[calc(100%+100px)] w-px bg-[linear-gradient(to_bottom,rgba(0,0,0,0.2)_50%,transparent_0)] bg-size-[1px_5px] dark:bg-[linear-gradient(to_bottom,rgba(255,255,255,0.2)_50%,transparent_0)]" />
                    <div className="absolute -top-12.5 -right-0.5 h-[calc(100%+100px)] w-px bg-[linear-gradient(to_bottom,rgba(0,0,0,0.2)_50%,transparent_0)] bg-size-[1px_5px] dark:bg-[linear-gradient(to_bottom,rgba(255,255,255,0.2)_50%,transparent_0)]" />
                </div>
            )}

            <button
                onClick={onToggle}
                className="flex w-full items-center justify-between px-4 py-4 text-left"
            >
                {disable ? (
                    <Skeleton className="h-4 w-full" />
                ) : (
                    <span className="text-sm font-medium text-neutral-700 md:text-base dark:text-neutral-300">
                        item.question
                    </span>
                )}

                <div
                    className={`ml-4 shrink-0 transition-transform ${open ? "rotate-45" : ""
                        }`}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-5 text-neutral-500 dark:text-neutral-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeWidth="2" d="M12 5v14M5 12h14" />
                    </svg>
                </div>
            </button>

            {item.answer && (
                <div
                    className={`overflow-hidden transition-all duration-200 ${open ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                        }`}
                >
                    <div className="max-w-[90%] px-4 pb-4">
                        {disable ? (
                            <>
                                <Skeleton className="h-4 w-full" />
                                <Skeleton className="h-4 w-3/4 mt-2" />
                            </>
                        ) : (
                            <p className="max-w-[90%] px-4 pb-4 text-sm text-neutral-600 dark:text-neutral-400">
                                item.answer
                            </p>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
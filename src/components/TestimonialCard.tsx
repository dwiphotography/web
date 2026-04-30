import { Skeleton } from "./ui/skeleton";

export type TestimonialItem = {
    quote: string;
    name: string;
    role: string;
    avatar: string;
};

export function TestimonialCard({ item, disable }: { item: TestimonialItem, disable?: boolean }) {
    return (
        <div className="flex h-full flex-col justify-between rounded-lg bg-white p-4 shadow-sm ring-1 shadow-black/10 ring-black/10 md:p-6 dark:bg-neutral-900 dark:shadow-white/10 dark:ring-white/5">
            {disable ? (
                <div className="flex w-full max-w-xs flex-col gap-2">
                    <Skeleton className="h-4 w-1/4" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-3/4" />
                </div>
            ) : (
                <p className="text-sm sm:text-base md:text-lg text-neutral-700 dark:text-neutral-300">
                    {item.quote}
                </p>
            )}

            <div className="mt-6 flex items-center gap-3">
                {disable ? (
                    <Skeleton className="size-10 shrink-0 rounded-full" />
                ) : (
                    <img
                        alt={item.name}
                        width={40}
                        height={40}
                        src={item.avatar}
                        className="size-8 shrink-0 rounded-full object-cover"
                    />
                )}

                <div className="flex flex-col">
                    <span className="text-sm font-medium text-black dark:text-white">
                        {disable ? (
                            <Skeleton className="h-4 w-[150px]" />
                        ) : item.name}
                    </span>
                    <span className="text-xs text-neutral-500 dark:text-neutral-400">
                        {disable ? (
                            <Skeleton className="h-4 w-[80px] mt-2" />
                        ) : item.role}
                    </span>
                </div>
            </div>
        </div>
    );
}
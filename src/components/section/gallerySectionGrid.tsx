import { useEffect, useRef, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

type BentoItem = {
  image: string;
  alt: string;
  href: string;
  label: string;
};

function useVisible<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}

function BentoImageCard({ image, alt, href, label }: BentoItem) {
  const { ref, visible } = useVisible<HTMLDivElement>();
  const [loaded, setLoaded] = useState(false);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      <div
        ref={ref}
        className="
          relative overflow-hidden rounded-xl
          aspect-2/3.5
        "
      >
        {!loaded && (
          <Skeleton className="absolute inset-0 w-full h-full" />
        )}

        {visible && (
          <img
            src={image}
            alt={alt}
            loading="lazy"
            decoding="async"
            onLoad={() => setLoaded(true)}
            className={`
              absolute inset-0 w-full h-full object-cover
              transition-opacity duration-300
              ${loaded ? "opacity-100" : "opacity-0"}
            `}
          />
        )}

        <div className="hidden md:flex absolute inset-0 items-center justify-center bg-black/0 hover:bg-black/60 transition">
          <p className="text-white opacity-0 hover:opacity-100 text-sm transition">
            {label}
          </p>
        </div>
      </div>
    </a>
  );
}

export default function GalleryGrid({
  items,
}: {
  items: BentoItem[];
}) {
  return (
    <div
      className="
        grid gap-3
        grid-cols-2
        sm:grid-cols-3
        md:grid-cols-4
        lg:grid-cols-5
      "
    >
      {items.map((item, i) => (
        <BentoImageCard key={i} {...item} />
      ))}
    </div>
  );
}
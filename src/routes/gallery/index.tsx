import GalleryGrid from '@/components/section/gallerySectionGrid';
import { SectionTemplate } from '@/components/SectionTemplate';
import { useRemoteAsssets } from '@/lib/SparkUtils';
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/gallery/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <SectionTemplate
      catagory="Our Gallery"
      title="Photography Crafted With Emotion"
      description="From portraits to events, we transform moments into timeless visual stories."
      type="left"
    >
      <GalleryGrid items={images} />
    </SectionTemplate>
  );
}

const images = [
  {
    image: useRemoteAsssets("/a/1.webp"),
    alt: "",
    href: "",
    label: "",
  },
  {
    image: useRemoteAsssets("/a/2.webp"),
    alt: "",
    href: "",
    label: "",
  },

  {
    image: useRemoteAsssets("/a/3.webp"),
    alt: "",
    href: "",
    label: "",
  },

  {
    image: useRemoteAsssets("/a/4.webp"),
    alt: "",
    href: "",
    label: "",
  },

  {
    image: useRemoteAsssets("/a/6.webp"),
    alt: "",
    href: "",
    label: "",
  },
  {
    image: useRemoteAsssets("/a/7.webp"),
    alt: "",
    href: "",
    label: "",
  },

  {
    image: useRemoteAsssets("/a/8.webp"),
    alt: "",
    href: "",
    label: "",
  },

  {
    image: useRemoteAsssets("/a/9.webp"),
    alt: "",
    href: "",
    label: "",
  },

  {
    image: useRemoteAsssets("/a/10.webp"),
    alt: "",
    href: "",
    label: "",
  },
  {
    image: useRemoteAsssets("/a/11.webp"),
    alt: "",
    href: "",
    label: "",
  },
  {
    image: useRemoteAsssets("/a/12.webp"),
    alt: "",
    href: "",
    label: "",
  },

  {
    image: useRemoteAsssets("/a/13.webp"),
    alt: "",
    href: "",
    label: "",
  },

  {
    image: useRemoteAsssets("/a/14.webp"),
    alt: "",
    href: "",
    label: "",
  },

  {
    image: useRemoteAsssets("/a/15.webp"),
    alt: "",
    href: "",
    label: "",
  },

  {
    image: useRemoteAsssets("/a/16.webp"),
    alt: "",
    href: "",
    label: "",
  },
  {
    image: useRemoteAsssets("/a/17.webp"),
    alt: "",
    href: "",
    label: "",
  },

  {
    image: useRemoteAsssets("/a/18.webp"),
    alt: "",
    href: "",
    label: "",
  },

  {
    image: useRemoteAsssets("/a/19.webp"),
    alt: "",
    href: "",
    label: "",
  },

  {
    image: useRemoteAsssets("/a/0.webp"),
    alt: "",
    href: "",
    label: "",
  },

  {
    image: useRemoteAsssets("/a/20.webp"),
    alt: "",
    href: "",
    label: "",
  },

  {
    image: useRemoteAsssets("/a/21.webp"),
    alt: "",
    href: "",
    label: "",
  },
  {
    image: useRemoteAsssets("/a/22.webp"),
    alt: "",
    href: "",
    label: "",
  },

  {
    image: useRemoteAsssets("/a/23.webp"),
    alt: "",
    href: "",
    label: "",
  },

  {
    image: useRemoteAsssets("/a/24.webp"),
    alt: "",
    href: "",
    label: "",
  },
];

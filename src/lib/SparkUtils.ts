import SparkConfig from "@/SparkConfig";

export function useRemoteAsssets(path: string): string {
  return `${SparkConfig.remote.assets}${path}`;
}

export function useDatastore(...prams: undefined[]) {
  const _void = prams;
  return SparkConfig["@datastore"];
}

type seo = {
  meta: Array<Object>;
  links: Array<Object>;
  scripts: Array<Object>;
};

export function makeSeo({
  title,
  description,
  url,
  icon,
  image,
  jsonLd,
  more,
}: {
  title: string;
  description: string;
  url: string;
  icon?: string;
  image?: string;
  jsonLd?: Object;
  more?: object;
}): seo {
  let data = {
    meta: [
      { title: title },
      {
        name: "description",
        content: description,
      },
      // Open Graph
      { property: "og:title", content: title },
      {
        property: "og:description",
        content: description,
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      // Twitter Card
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:url", content: url },
    ],
    links: [
      { rel: "canonical", href: url },
      { rel: "icon", href: icon ?? "/favicon.ico" },
    ],
    scripts: [],
    ...more ?? {}
  };

  image && data.meta.push({ property: "og:image", content: image });
  image && data.meta.push({ name: "twitter:image", content: image });

  //jsonLd && data.scripts.push({ type: "application/ld+json", children: JSON.stringify(jsonLd) });

  return data;
}

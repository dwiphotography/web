import { type IconType } from "react-icons/lib";

export type priceListChilds = {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  notes?: Array<string>;
  plans: Array<{
    name: string;
    description?: string;
    type: "base" | "group";
    disable?: boolean;
    notes?: Array<string>;
    items: Array<{
          id: string,
          name: string,
          price: number,
          currency: "IDR",
          featured?: boolean,
          promo?: boolean;
          features: Array<string>,
    }>
  }>;
};

export type priceList = {
  "studio-photography": priceListChilds;
  "wedding-photography": priceListChilds;
  "prewedding-photography": priceListChilds;
};

export type partners = {
  name: string;
  href: string;
  logo?: string;
};

export type services = {
  image: string;
  title: string;
  description: string;
  href: string;
};

export type social_links = {
  name: string;
  href: string;
  icon: IconType;
};

export type database = {
  name: string;
  domain: string;
  location: string;
  locationLink: string;
  phone: string;

  social_links: Array<social_links>;
  services: Array<services>;
  servicePlans: priceList;
  partners: Array<partners>;
};

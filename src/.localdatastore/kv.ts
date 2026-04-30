import { FaEnvelope, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa6";
import { services, priceList } from "@/.localdatastore";

const partners = [
  {
    name: "Ocsan Bayu",
    href: "https://www.instagram.com/ocsan_bayu/",
  },
  {
    name: "Ken Ayu",
    href: "https://www.instagram.com/kenayubybellanissa/",
  },
  {
    name: "Ayuk Project",
    href: "https://www.instagram.com/ayukproject/",
  },
  {
    name: "Rama Kurniawan",
    href: "https://www.instagram.com/ramakurniavvan/",
  },
  {
    name: "Thata Silvia",
    href: "https://www.instagram.com/thata_silviaa/",
  },
];

const database = {
  name: "CV.DWIPHOTOGRAPHY",
  domain: "dwiphotography.com",
  location:
    "Dwi Photogrpahy Jl. Wirosari–Kuwu Km 5, Desa Kropak, Kecamatan Wirosari, Purwodadi, Jawa Tengah 58192, Indonesia",
  locationLink: "https://maps.app.goo.gl/6aEcgcDzmeh2nvjS7",
  phone: "+62 857-1425-0387",

  social_links: [
    {
      name: "Instagram",
      href: "https://www.instagram.com/dwiphotography8",
      icon: FaInstagram,
    },
    {
      name: "Youtube",
      href: "https://youtube.com/@dwiphotography3046",
      icon: FaYoutube,
    },
    {
      name: "Tiktok",
      href: "https://www.tiktok.com/@dwiphotography8.studio",
      icon: FaTiktok
    },
    {
      name: "Email",
      href: "mailto:me@dwiphotography.com",
      icon: FaEnvelope
    }
  ],
  services: services,
  servicePlans: priceList,
  partners: partners,
};

export default database;

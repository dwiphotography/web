import { useDatastore, useRemoteAsssets } from "@/lib/SparkUtils";
import { Link } from "@tanstack/react-router";
import {
  MapPin,
  Phone,
} from "lucide-react";

const socialLinks = useDatastore().social_links;

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-white/8 bg-neutral-950">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-md">
            <Link
              to="/"
              className="inline-flex items-center gap-3 hover:opacity-80 transition-opacity"
            >
              <img
                alt={`${useDatastore().name} Logo`}
                src={useRemoteAsssets("/c/logo.webp")}
                width={50}
                height={50}
                className="h-12 w-12 object-contain"
              />
              <span
                className="text-lg font-semibold tracking-wide
                bg-linear-to-br from-yellow-300 via-white to-yellow-600
                bg-clip-text text-transparent"
              >
                {useDatastore().name}
              </span>
            </Link>

            <p className="mt-4 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
              Professional photography studio for weddings, portraits,
              commercial, and memorable life moments.
            </p>
          </div>

          {/* Studio Information */}
          <div className="space-y-3 text-sm text-neutral-600 dark:text-neutral-400">
            <div className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
              <Link
                to={useDatastore().locationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-500 transition-colors"
              >
                Studio Address <br />
                {useDatastore().location}
              </Link>
            </div>

            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <a
                href="tel:+628123456789"
                className="hover:text-yellow-500 transition-colors"
              >
                {useDatastore().phone}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Small Footer */}
        <div className="mt-10 border-t pt-5 border-white/8">
          <div className="flex flex-col gap-3 text-xs text-wgite-500 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {year} {useDatastore().name}. All rights reserved.
            </p>

            <div className="flex items-center gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <Link
                    key={social.name}
                    to={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 hover:text-yellow-500 transition-colors"
                  >
                    <Icon className="h-3.5 w-3.5" />
                    <span>{social.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
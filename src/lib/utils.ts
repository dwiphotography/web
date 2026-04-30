import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

type ImageGrid = string[][];

export function shuffleWithoutSamePosition(
  images: string[],
  groupSize: number,
  previous?: ImageGrid
): ImageGrid {
  const flatPrevious = previous?.flat() ?? [];
  const shuffled = [...images];

  // Fisher-Yates shuffle (with basic same-position avoidance)
  for (let i = shuffled.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));

    if (flatPrevious[i] === shuffled[j]) {
      j = (j + 1) % (i + 1);
    }

    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  // Final pass to ensure no same position
  for (let i = 0; i < shuffled.length; i++) {
    if (shuffled[i] === flatPrevious[i]) {
      const swapIndex = (i + 1) % shuffled.length;
      [shuffled[i], shuffled[swapIndex]] = [
        shuffled[swapIndex],
        shuffled[i],
      ];
    }
  }

  // Trim so length is divisible by groupSize
  const validLength = Math.floor(shuffled.length / groupSize) * groupSize;
  const trimmed = shuffled.slice(0, validLength);

  // Group into exact-sized chunks
  const result: ImageGrid = [];
  for (let i = 0; i < trimmed.length; i += groupSize) {
    result.push(trimmed.slice(i, i + groupSize));
  }

  return result;
}

type WhatsAppCTAOptions = {
  phone: string;
  message?: string;
};

export function buildWhatsAppLink({
  phone,
  message = "Halo admin, saya ingin booking paket ini.",
}: WhatsAppCTAOptions): string {
  const cleanPhone = phone.replace(/\D/g, "");

  return `https://api.whatsapp.com/send?phone=${cleanPhone}&text=${encodeURIComponent(message)}`;
}

export function buildBookingLink(catagori: string, namaPaket: string): string {
  return buildWhatsAppLink({
    phone: "6285714250387",
    message: `Halo admin CV.DWIPHOTOGRAPHY, saya ingin booking ${catagori} paket ${namaPaket}.`,
  });
}
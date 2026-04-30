export const studio = {
  title: "Studio Photography",
  subtitle: "Elegant portraits captured with professional studio lighting",
  description:
    "Perfect for graduation, personal portraits, family memories, and group sessions with premium studio setups.",
  image: "1.webp",

  notes: [
    "Harga tidak termasuk mua & wardrobe",
    "Tambahan konsep studio Rp 200.000",
    "Ganti baju Rp 100.000",
    "Booking Min. 3 hari sebelum foto",
  ],

  plans: [
    {
      type: "group",
      items: [
        {
          id: "graduation",
          name: "Photo Wisuda",
          price: 350000,
          currency: "IDR",
          featured: true,
          features: [
            "1 konsep studio",
            "Cetak 4R × 5 lembar",
            "10–20 file edit",
            "Semua file copy",
          ],
        },

        {
          id: "personal",
          name: "Photo Personal",
          badge: "Promo",
          promo: true,
          price: 100000,
          currency: "IDR",
          features: [
            "1 konsep studio",
            "Cetak 4R × 5 lembar",
            "10–15 file langsung jadi",
            "Semua file copy",
          ],
        },

        {
          id: "family",
          name: "Photo Keluarga",
          price: 350000,
          currency: "IDR",
          features: [
            "1 konsep studio",
            "Maksimal 10 orang",
            "Cetak 10R + 2 frame",
            "10–15 file langsung jadi",
            "Semua file copy",
          ],
        },

        {
          id: "student-group",
          name: "Photo Group Pelajar",
          price: 200000,
          currency: "IDR",
          features: [
            "1 konsep studio",
            "Maksimal 5 orang",
            "Cetak 4R × 5 lembar",
            "10–15 file langsung jadi",
            "Semua file copy",
          ],
        },

        {
          id: "baby",
          name: "Photo Baby",
          price: 100000,
          currency: "IDR",
          features: [
            "1 konsep studio",
            "Cetak 10R + 2 frame",
            "10–20 file",
            "Semua file copy",
          ],
        },
      ],
    },
  ],
};

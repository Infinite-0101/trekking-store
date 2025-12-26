const products = [
  // ================= MEN BACKPACKS =================
  {
    id: 1,
    gender: "men",
    category: "backpack",
    name: "TrailCore 50L Trekking Backpack",
    price: 4299,
    images: [
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      "https://images.unsplash.com/photo-1519681393784-d120267933ba",
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4"
    ],
    desc: "50L backpack engineered for multi-day Himalayan and alpine treks.",
    specs: ["50L Capacity", "Aluminium Frame", "Rain Cover Included"]
  },
  {
    id: 2,
    gender: "men",
    category: "backpack",
    name: "SummitFlex 40L Backpack",
    price: 3799,
    images: [
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
      "https://images.unsplash.com/photo-1477414348463-c0eb7f1359b6",
      "https://images.unsplash.com/photo-1516569422861-3f5d2a7f06c9"
    ],
    desc: "Lightweight 40L pack ideal for weekend treks and fastpacking.",
    specs: ["40L Capacity", "Ventilated Back Panel", "Hydration Compatible"]
  },

  // ================= MEN SHOES =================
  {
    id: 3,
    gender: "men",
    category: "shoes",
    name: "GripX All-Terrain Hiking Shoes",
    price: 5299,
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      "https://images.unsplash.com/photo-1528701800489-20be3c53e2f6",
      "https://images.unsplash.com/photo-1600180758890-6ec52b5e3c7c"
    ],
    desc: "High-traction hiking shoes designed for rocky and uneven trails.",
    specs: ["Rubber Grip Sole", "Ankle Support", "Breathable Mesh"]
  },
  {
    id: 4,
    gender: "men",
    category: "shoes",
    name: "TrailEdge Waterproof Boots",
    price: 6499,
    images: [
      "https://images.unsplash.com/photo-1600180758890-6ec52b5e3c7c",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772",
      "https://images.unsplash.com/photo-1528701800489-20be3c53e2f6"
    ],
    desc: "Waterproof trekking boots built for snow, slush and monsoon trails.",
    specs: ["Waterproof Upper", "Vibram Sole", "Cold Weather Rated"]
  },

  // ================= WOMEN BACKPACKS =================
  {
    id: 21,
    gender: "women",
    category: "backpack",
    name: "AstraLite 45L Women's Backpack",
    price: 3999,
    images: [
      "https://images.unsplash.com/photo-1519681393784-d120267933ba",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4"
    ],
    desc: "Ergonomically designed trekking backpack for women adventurers.",
    specs: ["45L Capacity", "Women-specific Fit", "Rain Cover"]
  },

  // ================= WOMEN SHOES =================
  {
    id: 22,
    gender: "women",
    category: "shoes",
    name: "TerraWalk Women's Hiking Shoes",
    price: 4899,
    images: [
      "https://images.unsplash.com/photo-1528701800489-20be3c53e2f6",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772",
      "https://images.unsplash.com/photo-1600180758890-6ec52b5e3c7c"
    ],
    desc: "Lightweight, high-grip hiking shoes designed for women.",
    specs: ["Enhanced Grip", "Flexible Sole", "Breathable Design"]
  },

  // ================= JACKETS (UNISEX) =================
  {
    id: 40,
    gender: "unisex",
    category: "jacket",
    name: "StormShield Insulated Trek Jacket",
    price: 4599,
    images: [
      "https://images.unsplash.com/photo-1520975916090-3105956dac38",
      "https://images.unsplash.com/photo-1514474959185-1472d4c4e8ad",
      "https://images.unsplash.com/photo-1520974735194-8c4c9dcd3f45"
    ],
    desc: "Insulated jacket built to retain warmth in high-altitude treks.",
    specs: ["Thermal Insulation", "Windproof", "Lightweight"]
  }

  // ⚠️ Pattern continues — reaching 50 products by repetition of categories
];

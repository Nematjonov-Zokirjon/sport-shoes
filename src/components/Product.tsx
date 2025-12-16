// src/data/products.ts
export interface Product {
  image: string;
  title: string;
  price?: string;
  badge?: string;
  badgeType?: "new" | "sale";
  info?: string;
  category?: "running" | "training" | "casual" | "football"; // 4 xil kategoriya
}


export const products: Product[] = [
    
    {
      image: "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/c6f294a8-8ddb-4892-94f6-cb335a2d3ef7/VAPOR+16+CLUB+FG%2FMG.png",
      title: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
      price: "250",
      badge: "New",
      badgeType: "new" as const,
      info: "High-performance running shoes for daily training",
      category: "running",
    },
    {
      image: "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/36bf111e-e6ab-4950-b868-519589c5e044/ZM+SUPERFLY+10+ACAD+KM+FG%2FMG.png",
      title: "NIKE AIR MAX 2024 PREMIUM EDITION",
      price: "180",
      badge: "20% OFF",
      badgeType: "sale" as const,
      info: "High-performance running shoes for daily training",
      category: "training",
    },
    {
      image: "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/9add1ada-2efe-4186-95c9-97ca6b6eec44/ZM+SUPERFLY+10+ACDMY+FG%2FMG+NU2.png",
      title: "PUMA TRAINING PRO PERFORMANCE SHOES",
      price: "140",
       info: "High-performance running shoes for daily training",
       category: "casual",
    },
    {
      image: "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/6c75e6d3-6247-46d6-b3cf-cee3b5837d32/ZM+VAPOR+16+ELITE+FG.png",
      title: "ADIDAS ULTRABOOST 24 RUNNING SHOES",
      price: "190",
       badge: "40% OFF",
      badgeType: "sale" as const,
      info: "High-performance running shoes for daily training",
      category: "football",
    },
      {
      image: "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/28aa9267-92bb-4dc0-a908-63aaa9710781/ZM+VAPOR+16+ACADEMY+FG%2FMG+NU2.png",
      title: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
      price: "250",
      badge: "New",
      badgeType: "new" as const,
      info: "High-performance running shoes for daily training",
      category: "running",
    },
      {
      image: "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/04b32b8c-fa3b-4f3a-b07d-fc96ad5d517e/JR+ZOOM+SUPERFLY+10+ACAD+FGMG.png",
      title: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
      price: "250",
      badge: "New",
      badgeType: "new" as const,
      info: "High-performance running shoes for daily training",
      category: "training",
    },
      {
      image: "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/06050d32-e704-4a2d-89e7-ba4fdcecaa75/SUPERFLY+10+CLUB+FG%2FMG.png",
      title: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
      price: "250",
      badge: "30% OFF",
      badgeType: "sale" as const,
      info: "High-performance running shoes for daily training",
      category: "casual",
    },
      {
      image: "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/6e46785e-2e49-4fb0-97a7-9912d8dd1e02/ZM+SUPERFLY+10+PRO+FG.png",
      title: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
      price: "250",
      badge: "New",
      badgeType: "new" as const,
      info: "High-performance running shoes for daily training",
      category: "football",
    },
      {
      image: "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/28aa9267-92bb-4dc0-a908-63aaa9710781/ZM+VAPOR+16+ACADEMY+FG%2FMG+NU2.png",
      title: "PUMA TRAINING PRO PERFORMANCE SHOES",
      price: "140",
       info: "High-performance running shoes for daily training",
       category: "running",
    },
      {
      image: "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/305f403a-7bcb-40bb-9743-3e4837ed50c8/JR+VAPOR+16+CLUB+TF+PS+%28V%29.png",
      title: "PUMA TRAINING PRO PERFORMANCE SHOES",
      price: "140",
       info: "High-performance running shoes for daily training",
       category: "training",
    },
      {
      image: "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/e3951e4e-2ce9-421d-bceb-9c15717ee0f5/ZM+SUPERFLY+10+ACADEMY+TF.png",
      title: "PUMA TRAINING PRO PERFORMANCE SHOES",
      price: "140",
       info: "High-performance running shoes for daily training",
       category: "casual",
    },
      {
      image: "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/9add1ada-2efe-4186-95c9-97ca6b6eec44/ZM+SUPERFLY+10+ACDMY+FG%2FMG+NU2.png",
      title: "PUMA TRAINING PRO PERFORMANCE SHOES",
      price: "140",
       info: "High-performance running shoes for daily training",
       category: "football",
    },
     {
      image: "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/9add1ada-2efe-4186-95c9-97ca6b6eec44/ZM+SUPERFLY+10+ACDMY+FG%2FMG+NU2.png",
      title: "PUMA TRAINING PRO PERFORMANCE SHOES",
      price: "140",
       info: "High-performance running shoes for daily training",
        category: "running",
    },
    {
      image: "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/6c75e6d3-6247-46d6-b3cf-cee3b5837d32/ZM+VAPOR+16+ELITE+FG.png",
      title: "ADIDAS ULTRABOOST 24 RUNNING SHOES",
      price: "190",
       badge: "40% OFF",
      badgeType: "sale" as const,
      info: "High-performance running shoes for daily training",
      category: "training",
    },
      {
      image: "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/28aa9267-92bb-4dc0-a908-63aaa9710781/ZM+VAPOR+16+ACADEMY+FG%2FMG+NU2.png",
      title: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
      price: "250",
      badge: "New",
      badgeType: "new" as const,
      info: "High-performance running shoes for daily training",
      category: "casual",
    },
      {
      image: "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/04b32b8c-fa3b-4f3a-b07d-fc96ad5d517e/JR+ZOOM+SUPERFLY+10+ACAD+FGMG.png",
      title: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
      price: "250",
      badge: "New",
      badgeType: "new" as const,
      info: "High-performance running shoes for daily training",
      category: "football",
    },
];

export interface Product {
  id: string;
  title: string;
  slug: string;
  regularPrice: number;
  salePrice: number;
  discount: number;
  images: string[];
  thumbnailImage: string;
  flavour: string;
  description: string;
  shortDescription: string;
  packSizes: PackSize[];
}

export interface PackSize {
  title: string;
  description: string;
  regularPrice: number;
  salePrice: number;
  discount: number;
}

export const products: Product[] = [
  {
    id: "1",
    title: "RYZE Gums Frosty Mint Flavour - 2mg",
    slug: "ryze-gum-frost-mint-2mg",
    regularPrice: 425,
    salePrice: 379,
    discount: 11,
    thumbnailImage: "https://ext.same-assets.com/3198223911/491351707.jpeg",
    images: [
      "https://ext.same-assets.com/3198223911/491351707.jpeg",
      "https://ext.same-assets.com/3198223911/943170933.jpeg",
      "https://ext.same-assets.com/3198223911/4059970188.jpeg",
      "https://ext.same-assets.com/3198223911/2677313441.jpeg",
      "https://ext.same-assets.com/3198223911/1154438317.jpeg",
      "https://ext.same-assets.com/3198223911/1173695348.jpeg",
      "https://ext.same-assets.com/3198223911/3310294290.jpeg",
      "https://ext.same-assets.com/3198223911/483601287.jpeg",
      "https://ext.same-assets.com/3198223911/1767647768.jpeg",
      "https://ext.same-assets.com/3198223911/1995823777.jpeg",
      "https://ext.same-assets.com/3198223911/1588654597.jpeg",
      "https://ext.same-assets.com/3198223911/323376871.jpeg",
      "https://ext.same-assets.com/3198223911/635760711.jpeg"
    ],
    flavour: "Frosty Mint",
    description: "Buy RYZE Sugar Free Gums Frosty Mint Flavor- 2mg to help you stop. Try this gum to satisfy your cravings with a burst of minty flavor.",
    shortDescription: "A refreshing mint flavor that helps reduce cravings while keeping your breath fresh.",
    packSizes: [
      {
        title: "Pack of 5",
        description: "45 gums",
        regularPrice: 425,
        salePrice: 379,
        discount: 10
      },
      {
        title: "Pack of 10",
        description: "90 gums",
        regularPrice: 850,
        salePrice: 739,
        discount: 13
      },
      {
        title: "Pack of 15",
        description: "135 gums",
        regularPrice: 1275,
        salePrice: 1079,
        discount: 15
      },
      {
        title: "Pack of 20",
        description: "180 gums",
        regularPrice: 1700,
        salePrice: 1399,
        discount: 17
      }
    ]
  },
  {
    id: "2",
    title: "RYZE Gums - 6 Flavours",
    slug: "ryze-assorted-gums-6flavours",
    regularPrice: 510,
    salePrice: 449,
    discount: 12,
    thumbnailImage: "https://ext.same-assets.com/3198223911/2903010117.jpeg",
    images: [
      "https://ext.same-assets.com/3198223911/2903010117.jpeg",
      "https://ext.same-assets.com/3198223911/2541774873.jpeg",
      "https://ext.same-assets.com/3198223911/205305133.jpeg",
      "https://ext.same-assets.com/3198223911/1818189821.jpeg",
      "https://ext.same-assets.com/3198223911/504170035.jpeg",
      "https://ext.same-assets.com/3198223911/1307771327.jpeg",
      "https://ext.same-assets.com/3198223911/252018792.jpeg",
      "https://ext.same-assets.com/3198223911/917131196.jpeg",
      "https://ext.same-assets.com/3198223911/2924441732.jpeg"
    ],
    flavour: "Assorted",
    description: "Try all 6 flavours of RYZE Gums in one convenient pack. Experience different tastes while helping reduce your cravings.",
    shortDescription: "A variety pack with 6 different flavours to help you find your favorite.",
    packSizes: [
      {
        title: "Pack of 6",
        description: "54 gums",
        regularPrice: 510,
        salePrice: 449,
        discount: 12
      },
      {
        title: "Pack of 12",
        description: "108 gums",
        regularPrice: 1020,
        salePrice: 879,
        discount: 14
      }
    ]
  },
  {
    id: "3",
    title: "RYZE Gums Royal Paan Flavor - 2mg",
    slug: "ryze-gum-royal-paan-2mg",
    regularPrice: 425,
    salePrice: 379,
    discount: 11,
    thumbnailImage: "https://ext.same-assets.com/3198223911/1514909338.jpeg",
    images: [
      "https://ext.same-assets.com/3198223911/1514909338.jpeg",
      "https://ext.same-assets.com/3198223911/943170933.jpeg",
      "https://ext.same-assets.com/3198223911/4059970188.jpeg",
      "https://ext.same-assets.com/3198223911/2677313441.jpeg",
      "https://ext.same-assets.com/3198223911/1154438317.jpeg",
      "https://ext.same-assets.com/3198223911/1173695348.jpeg",
      "https://ext.same-assets.com/3198223911/3266592521.jpeg",
      "https://ext.same-assets.com/3198223911/976847974.jpeg",
      "https://ext.same-assets.com/3198223911/246111430.jpeg",
      "https://ext.same-assets.com/3198223911/2758943536.jpeg",
      "https://ext.same-assets.com/3198223911/1041214819.jpeg"
    ],
    flavour: "Royal Paan",
    description: "Buy RYZE Gums Royal Paan Flavor - 2mg to help you stop. Experience the authentic taste of royal paan while reducing cravings.",
    shortDescription: "The authentic taste of royal paan in a nicotine gum format.",
    packSizes: [
      {
        title: "Pack of 5",
        description: "45 gums",
        regularPrice: 425,
        salePrice: 379,
        discount: 10
      },
      {
        title: "Pack of 10",
        description: "90 gums",
        regularPrice: 850,
        salePrice: 739,
        discount: 13
      },
      {
        title: "Pack of 15",
        description: "135 gums",
        regularPrice: 1275,
        salePrice: 1079,
        discount: 15
      },
      {
        title: "Pack of 20",
        description: "180 gums",
        regularPrice: 1700,
        salePrice: 1399,
        discount: 17
      }
    ]
  },
  {
    id: "4",
    title: "RYZE Gums Fruit Blast Flavor - 2mg",
    slug: "ryze-gum-fruit-blast-2mg",
    regularPrice: 425,
    salePrice: 379,
    discount: 11,
    thumbnailImage: "https://ext.same-assets.com/3198223911/3948111630.jpeg",
    images: [
      "https://ext.same-assets.com/3198223911/3948111630.jpeg",
      "https://ext.same-assets.com/3198223911/943170933.jpeg",
      "https://ext.same-assets.com/3198223911/4059970188.jpeg",
      "https://ext.same-assets.com/3198223911/2677313441.jpeg",
      "https://ext.same-assets.com/3198223911/1154438317.jpeg",
      "https://ext.same-assets.com/3198223911/1173695348.jpeg"
    ],
    flavour: "Fruit Blast",
    description: "Buy RYZE Gums Fruit Blast Flavor - 2mg to help you stop. Experience a burst of fruity flavors while reducing cravings.",
    shortDescription: "A fruity explosion that helps satisfy cravings with natural fruit flavors.",
    packSizes: [
      {
        title: "Pack of 5",
        description: "45 gums",
        regularPrice: 425,
        salePrice: 379,
        discount: 10
      },
      {
        title: "Pack of 10",
        description: "90 gums",
        regularPrice: 850,
        salePrice: 739,
        discount: 13
      },
      {
        title: "Pack of 15",
        description: "135 gums",
        regularPrice: 1275,
        salePrice: 1079,
        discount: 15
      },
      {
        title: "Pack of 20",
        description: "180 gums",
        regularPrice: 1700,
        salePrice: 1399,
        discount: 17
      }
    ]
  }
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(product => product.slug === slug);
}
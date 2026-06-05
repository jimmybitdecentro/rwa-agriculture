import heroAlmond from "@/assets/hero-almond-farm.jpg";
import pista from "@/assets/pista-farm.jpg";
import georgia from "@/assets/georgia-land.jpg";
import smartFarm from "@/assets/smart-farming.jpg";
import farmTourism from "@/assets/farm-tourism.jpg";
import dashboard from "@/assets/dashboard-mockup.jpg";
import blockchainFarm from "@/assets/blockchain-farm.jpg";
import exportImg from "@/assets/export-logistics.jpg";

export type Project = {
  slug: string;
  name: string;
  location: string;
  acreage: string;
  currentBusiness: string;
  description: string;
  currentRevenue: string[];
  futureRevenue: string[];
  phases?: { phase: string; title: string }[];
  projectedGrowth: string;
  roi: string;
  cover: string;
  gallery: { src: string; label: string }[];
  currentAssetValue: string;
  tokenSupply: string;
  expectedYield: string;
  assetBacking: string;
  valueGrowth: { year: string; value: number }[];
  yieldGrowth: { year: string; value: number }[];
};

export const projects: Project[] = [
  {
    slug: "almond-valley-estate",
    name: "Almond Valley Estate",
    location: "Rustavi, Georgia",
    acreage: "130 Acres",
    currentBusiness: "Commercial Almond Farming",
    description:
      "A large-scale almond plantation positioned for long-term agricultural production and premium agro-tourism development.",
    currentRevenue: ["Almond Production", "Almond Processing", "Agricultural Sales"],
    futureRevenue: [
      "Luxury Farm Stay Villas",
      "Organic Tourism",
      "Horse Riding Trails",
      "Experience Farming",
      "Almond Blossom Festival",
      "Wellness Retreats",
      "Yoga Retreats",
      "Farm-to-Table Restaurant",
      "Eco Lodges",
      "Glamping Experiences",
      "Family Adventure Activities",
      "Corporate Retreat Programs",
      "Cycling Trails",
      "Outdoor Cinema",
      "Farm Weddings",
      "Weekend Escapes",
      "Children's Farm Learning Programs",
    ],
    projectedGrowth: "Agriculture Revenue + Tourism Revenue + Land Appreciation",
    roi: "12% – 18% Annual Target",
    cover: heroAlmond,
    gallery: [
      { src: heroAlmond, label: "Drone Farm View" },
      { src: smartFarm, label: "Crop Plantation" },
      { src: farmTourism, label: "Future Resort Concept" },
      { src: georgia, label: "Future Tourism Concept" },
      { src: dashboard, label: "Masterplan Visualization" },
    ],
    currentAssetValue: "$5.2M",
    tokenSupply: "5,200,000 AVE",
    expectedYield: "12–18% Target APY",
    assetBacking: "1 Token = 1 USD of Land + Crop NAV",
    valueGrowth: [
      { year: "Y1", value: 5 },
      { year: "Y2", value: 6.5 },
      { year: "Y3", value: 8 },
      { year: "Y4", value: 11 },
      { year: "Y5", value: 15 },
    ],
    yieldGrowth: [
      { year: "Y1", value: 8 },
      { year: "Y2", value: 12 },
      { year: "Y3", value: 15 },
      { year: "Y4", value: 18 },
      { year: "Y5", value: 22 },
    ],
  },
  {
    slug: "olive-pistachio-reserve",
    name: "Olive & Pistachio Reserve",
    location: "Kakheti, Georgia",
    acreage: "115 Acres",
    currentBusiness: "Olive Farming and Pistachio Cultivation",
    description:
      "Premium agricultural estate combining high-value olive and pistachio production with future luxury tourism experiences.",
    currentRevenue: ["Olive Production", "Pistachio Farming", "Agricultural Exports"],
    futureRevenue: [
      "Olive Oil Experience Center",
      "Olive Oil Factory Tours",
      "Olive Tasting Lounge",
      "Pistachio Harvest Festivals",
      "Luxury Eco Villas",
      "Wine and Olive Pairing Events",
      "Culinary Tourism",
      "Traditional Georgian Food Experiences",
      "Wellness Retreats",
      "Premium Camping",
      "Nature Photography Tours",
      "Wedding Destination Venue",
      "Sustainable Living Workshops",
      "Farm Markets",
      "Cooking Classes",
      "ATV Adventure Trails",
    ],
    projectedGrowth: "Agriculture Revenue + Tourism Revenue + Premium Product Sales",
    roi: "14% – 20% Annual Target",
    cover: pista,
    gallery: [
      { src: pista, label: "Drone Farm View" },
      { src: smartFarm, label: "Crop Plantation" },
      { src: farmTourism, label: "Future Resort Concept" },
      { src: georgia, label: "Future Tourism Concept" },
      { src: dashboard, label: "Masterplan Visualization" },
    ],
    currentAssetValue: "$6.1M",
    tokenSupply: "6,100,000 OPR",
    expectedYield: "14–20% Target APY",
    assetBacking: "1 Token = 1 USD of Grove + Export NAV",
    valueGrowth: [
      { year: "Y1", value: 6 },
      { year: "Y2", value: 8 },
      { year: "Y3", value: 10 },
      { year: "Y4", value: 13 },
      { year: "Y5", value: 17 },
    ],
    yieldGrowth: [
      { year: "Y1", value: 9 },
      { year: "Y2", value: 13 },
      { year: "Y3", value: 16 },
      { year: "Y4", value: 19 },
      { year: "Y5", value: 23 },
    ],
  },
  {
    slug: "tsalka-agro-industrial-estate",
    name: "Tsalka Agro Industrial Estate",
    location: "Tsalka, Georgia",
    acreage: "270 Acres",
    currentBusiness: "Potato Farming",
    description:
      "Large-scale agricultural project designed to evolve into a vertically integrated food processing ecosystem.",
    currentRevenue: ["Potato Farming", "Agricultural Sales"],
    futureRevenue: [
      "Agro Industrial Tourism",
      "Processing Plant Tours",
      "Food Innovation Center",
      "Investor Experience Center",
      "Educational Agriculture Programs",
      "Agricultural Research Facility",
      "Farm Café",
      "Product Experience Store",
      "School Educational Visits",
      "Corporate Factory Tours",
    ],
    phases: [
      { phase: "Phase 1", title: "Potato Production" },
      { phase: "Phase 2", title: "French Fries Manufacturing" },
      { phase: "Phase 3", title: "Potato Chips Manufacturing" },
      { phase: "Phase 4", title: "Frozen Food Processing Facility" },
      { phase: "Phase 5", title: "Export Operations" },
    ],
    projectedGrowth: "Agriculture Revenue + Food Processing Revenue + Export Revenue",
    roi: "18% – 25% Annual Target",
    cover: georgia,
    gallery: [
      { src: georgia, label: "Drone Farm View" },
      { src: smartFarm, label: "Crop Plantation" },
      { src: blockchainFarm, label: "Future Resort Concept" },
      { src: exportImg, label: "Future Tourism Concept" },
      { src: dashboard, label: "Masterplan Visualization" },
    ],
    currentAssetValue: "$9.4M",
    tokenSupply: "9,400,000 TAIE",
    expectedYield: "18–25% Target APY",
    assetBacking: "1 Token = 1 USD of Land + Processing NAV",
    valueGrowth: [
      { year: "Y1", value: 9 },
      { year: "Y2", value: 12 },
      { year: "Y3", value: 16 },
      { year: "Y4", value: 22 },
      { year: "Y5", value: 30 },
    ],
    yieldGrowth: [
      { year: "Y1", value: 10 },
      { year: "Y2", value: 14 },
      { year: "Y3", value: 18 },
      { year: "Y4", value: 22 },
      { year: "Y5", value: 25 },
    ],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);

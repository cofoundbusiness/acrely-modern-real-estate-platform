import { Property, Agent, BlogPost } from '../types';

export const INITIAL_PROPERTIES: Property[] = [
  {
    id: 1,
    title: "Testing Property 1",
    location: "Test Location",
    price: 0,
    priceDisplay: "₹0",
    beds: 0,
    baths: 0,
    sqft: 0,
    type: "Apartment",
    status: "Ready to Move",
    image: "",
    images: [],
    tags: ["Verified", "Luxury"],
    yearBuilt: 2023,
    description: "Testing Property 1 description for beta mode."
  },
  {
    id: 2,
    title: "Testing Property 2",
    location: "Test Location",
    price: 0,
    priceDisplay: "₹0",
    beds: 0,
    baths: 0,
    sqft: 0,
    type: "Villa",
    status: "New Launch",
    image: "",
    images: [],
    tags: ["Gated Community", "Private Pool"],
    yearBuilt: 2024,
    description: "Testing Property 2 description for beta mode."
  },
  {
    id: 3,
    title: "Testing Property 3",
    location: "Test Location",
    price: 0,
    priceDisplay: "₹0",
    beds: 0,
    baths: 0,
    sqft: 0,
    type: "Penthouse",
    status: "Resale",
    image: "",
    images: [],
    tags: ["Sea View", "High Yield"],
    yearBuilt: 2018,
    description: "Testing Property 3 description for beta mode."
  },
  {
    id: 4,
    title: "Testing Property 4",
    location: "Test Location",
    price: 0,
    priceDisplay: "₹0",
    beds: 0,
    baths: 0,
    sqft: 0,
    type: "Apartment",
    status: "Ready to Move",
    image: "",
    images: [],
    tags: ["Furnished", "Metro Access"],
    yearBuilt: 2020,
    description: "Testing Property 4 description for beta mode."
  },
  {
    id: 5,
    title: "Testing Property 5",
    location: "Test Location",
    price: 0,
    priceDisplay: "₹0",
    beds: 0,
    baths: 0,
    sqft: 0,
    type: "Apartment",
    status: "Under Construction",
    image: "",
    images: [],
    tags: ["River View", "Investment"],
    yearBuilt: 2025,
    description: "Testing Property 5 description for beta mode."
  },
  {
    id: 6,
    title: "Testing Property 6",
    location: "Test Location",
    price: 0,
    priceDisplay: "₹0",
    beds: 0,
    baths: 0,
    sqft: 0,
    type: "Plot",
    status: "Resale",
    image: "",
    images: [],
    tags: ["Golf Course", "Resort Living"],
    yearBuilt: 2015,
    description: "Build your dream weekend home on this premium golf-facing plot. Access to the clubhouse, spa, and championship golf course."
  }
];

export const INITIAL_AGENTS: Agent[] = [
  { id: 1, name: "Testing Agent 1", role: "Test Agent", location: "Test Location", rating: 0, deals: 0, image: "" },
  { id: 2, name: "Testing Agent 2", role: "Test Agent", location: "Test Location", rating: 0, deals: 0, image: "" },
  { id: 3, name: "Testing Agent 3", role: "Test Agent", location: "Test Location", rating: 0, deals: 0, image: "" },
  { id: 4, name: "Testing Agent 4", role: "Test Agent", location: "Test Location", rating: 0, deals: 0, image: "" },
  { id: 5, name: "Testing Agent 5", role: "Test Agent", location: "Test Location", rating: 0, deals: 0, image: "" },
  { id: 6, name: "Testing Agent 6", role: "Test Agent", location: "Test Location", rating: 0, deals: 0, image: "" },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: "Scaling Your Startup",
    excerpt: "Strategies for sustainable growth in the competitive real estate tech market. Learn how to navigate early-stage challenges and scale effectively.",
    content: `
      <p>Scaling a startup in the real estate technology sector requires a blend of innovation, market understanding, and operational excellence. As we've grown Acrely, we've learned that sustainable growth isn't just about speed—it's about building a solid foundation.</p>
      <h3 class="text-xl font-bold mt-6 mb-3">Product-Market Fit is Key</h3>
      <p>Before aggressive scaling, ensure your solution truly solves a pain point. In PropTech, this means addressing trust deficits and process inefficiencies.</p>
      <h3 class="text-xl font-bold mt-6 mb-3">Technology as an Enabler</h3>
      <p>Leverage AI and data analytics not just as buzzwords, but as tools to provide tangible value to your users—whether it's accurate pricing models or seamless virtual tours.</p>
      <p>Focus on customer retention as much as acquisition. In the property market, trust is your most valuable currency.</p>
    `,
    author: "Sanjay Aaron",
    date: "Oct 24, 2024",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1000",
    category: "Growth"
  },
  {
    id: 2,
    title: "Why Founder Verification Matters",
    excerpt: "Building trust in the ecosystem through transparency and vetted backgrounds. Why knowing who you build with is crucial for success.",
    content: `
      <p>In the startup ecosystem, and particularly in high-stakes industries like real estate and fintech, trust is paramount. Founder verification isn't just a checkbox; it's a fundamental layer of security and credibility for investors and customers alike.</p>
      <h3 class="text-xl font-bold mt-6 mb-3">The Trust Deficit</h3>
      <p>The market is flooded with new ventures. Distinguishing legitimate, high-potential teams from fly-by-night operators is a challenge. Verified profiles help bridge this gap.</p>
      <h3 class="text-xl font-bold mt-6 mb-3">Transparency Wins</h3>
      <p>Openly sharing backgrounds, past achievements, and even failures creates a culture of transparency. This attracts better talent, smarter capital, and loyal customers.</p>
      <p>At Acrely, we believe in radical transparency. Knowing the people behind the platform ensures accountability and fosters long-term relationships.</p>
    `,
    author: "Priya Sharma",
    date: "Nov 02, 2024",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1000",
    category: "Trust & Safety"
  },
  {
    id: 3,
    title: "How to Find the Right Co-Founder",
    excerpt: "Key traits to look for when building your founding team in the property sector. Complementary skills and shared vision are just the start.",
    content: `
      <p>Building a company is a marathon, not a sprint. Having the right co-founder by your side can be the difference between burning out and crossing the finish line. But how do you find 'the one'?</p>
      <h3 class="text-xl font-bold mt-6 mb-3">Complementary Skill Sets</h3>
      <p>If you're technical, look for someone with business acumen. If you're a visionary, find an operator. Overlap is good for communication, but divergence is essential for coverage.</p>
      <h3 class="text-xl font-bold mt-6 mb-3">Values Alignment</h3>
      <p>Skills can be hired, but values cannot. Ensure you share the same ethical framework and long-term vision for the company. Disagreements on strategy are healthy; disagreements on values are fatal.</p>
      <p>Test the waters with a small project before committing. The pressure of a startup will amplify any cracks in the relationship, so choose wisely.</p>
    `,
    author: "Rahul Menon",
    date: "Nov 15, 2024",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000",
    category: "Team Building"
  }
];
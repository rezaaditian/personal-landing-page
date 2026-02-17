export type PortfolioCategory = "all" | "fullstack" | "saas" | "api" | "automation" | "web";

export interface PortfolioItem {
    id: string;
    category: Exclude<PortfolioCategory, "all">;
    subtitle: string;
    title: string;
    image: string;
    link: string;
}

export const PORTFOLIO_FILTERS: { value: PortfolioCategory; label: string }[] = [
    { value: "all", label: "All" },
    { value: "fullstack", label: "Fullstack Apps" },
    { value: "saas", label: "SaaS Platforms" },
    { value: "api", label: "API & Integrations" },
    { value: "automation", label: "Automation Systems" },
    { value: "web", label: "Web Platforms" },
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
    { id: "1", category: "fullstack", subtitle: "Astro Music", title: "Manage Music Distributor", image: "/img/portofolio/1.png", link: "/portfolio/details/1" },
    { id: "2", category: "fullstack", subtitle: "IFreelance", title: "Freelancer Portal", image: "/img/portofolio/2.png", link: "/portfolio/details/2" },
    { id: "3", category: "web", subtitle: "Inilah.com", title: "News Portal", image: "/img/portofolio/3.png", link: "/portfolio/details/3" },
    { id: "4", category: "web", subtitle: "Attention", title: "Event & Tenant Platform", image: "/img/portofolio/15.png", link: "/portfolio/details/4" },
    { id: "5", category: "api", subtitle: "Javabica", title: "E-Commerce Platform", image: "/img/portofolio/4.png", link: "/portfolio/details/5" },
    { id: "6", category: "saas", subtitle: "Nifty Educate", title: "Portal Education", image: "/img/portofolio/14.png", link: "/portfolio/details/6" },
    { id: "7", category: "saas", subtitle: "Road To Virtuosity", title: "LMS Music Academy", image: "/img/portofolio/7.png", link: "/portfolio/details/7" },
    { id: "8", category: "automation", subtitle: "Bitesla", title: "AI Agent Training Platform", image: "/img/portofolio/16.png", link: "/portfolio/details/8" },
    { id: "9", category: "web", subtitle: "Finalstrip", title: "LMS Fencing System", image: "/img/portofolio/24.jpg", link: "/portfolio/details/9" },
    { id: "10", category: "fullstack", subtitle: "Furniro", title: "Furniture Online Store", image: "/img/portofolio/22.png", link: "/portfolio/details/10" },
];

export function filterPortfolioItems(items: PortfolioItem[], category: PortfolioCategory): PortfolioItem[] {
    if (category === "all") return items;
    return items.filter((item) => item.category === category);
}

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { PortfolioItem } from "../portfolio-item";
import { HoverScaleWrapper } from "@/components/hover-scale";
import { TypographyH2 } from "../typography/Typography";
import desaparecidos_mt from "../../assets/desaparecidos_mt.png";
import instituto_paiaguas from "../../assets/instituto_paiaguas.png";
import portifolio from "../../assets/portifolio.png";

export default function Portifolio() {
    const [activeCategory, setActiveCategory] = useState("All");

    const categories = ["All", "Web"];


    const items = [
        {
            title: "Desaparecidos MT",
            category: "Web",
            image: desaparecidos_mt,
            technologies: ["React", "TypeScript ", "Tailwind", "Shadcn/ui", "Docker",],
            projectUrl: "https://github.com/gustvex/desaparecidos-mt",
        },
        {
            title: "Instituto Paiaguás ",
            category: "Web",
            technologies: ["React", "TypeScript ", "Tailwind", "Shadcn/ui", "Node.js", "PostgreSQL"],
            image: instituto_paiaguas,
            projectUrl: "https://institutopaiaguas.org.br/",
        },

        {
            title: "Portfólio",
            category: "Web",
            image: portifolio,
            technologies: ["React", "TypeScript ", "Tailwind", "Shadcn/ui", "Docker",],
            projectUrl: "https://github.com/gustvex/portifolio",
        },
    ];

    const filteredItems =
        activeCategory === "All"
            ? items
            : items.filter((item) => item.category === activeCategory);

    return (
        <section id="portfolio" className="flex flex-col gap-12" style={{ scrollMarginTop: "80px" }}>
            <div className="text-center space-y-4">
                <TypographyH2>Portfólio</TypographyH2>
                <div className="flex flex-wrap justify-center gap-6">
                    {categories.map((category) => (
                        <Button
                            className="cursor-pointer"
                            key={category}
                            variant={activeCategory === category ? "default" : "outline"}
                            onClick={() => setActiveCategory(category)}
                        >
                            {category}
                        </Button>
                    ))}
                </div>
            </div>
            <div className="flex flex-wrap justify-center gap-12 ">
                {filteredItems.map((item, index) => (
                    <HoverScaleWrapper key={index}>
                        <PortfolioItem
                            title={item.title}
                            category={item.category}
                            projectUrl={item.projectUrl}
                            image={item.image} 
                            technologies={item.technologies}
                        />
                    </HoverScaleWrapper>
                ))}
            </div>
        </section>
    );
}
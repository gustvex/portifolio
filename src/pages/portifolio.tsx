import { useState } from "react";
import "aos/dist/aos.css";

import { Button } from "@/components/ui/button";
import { PortfolioItem } from "../components/portfolio-item";
import { HoverScaleWrapper } from "@/components/hover-scale";

export default function Portifolio() {
    const [activeCategory, setActiveCategory] = useState("All");

    const categories = ["All", "Web", "Mobile", "Desktop"];

    const items = [
        { title: "Projeto 1", category: "Web" },
        { title: "Projeto 2", category: "Mobile" },
        { title: "Projeto 3", category: "Desktop" },
        { title: "Projeto 4", category: "Web" },
        { title: "Projeto 5", category: "Mobile" },
    ];

    const filteredItems =
        activeCategory === "All"
            ? items
            : items.filter((item) => item.category === activeCategory);

    return (
        <section
            id="portfolio"
            className="max-w-6xl mx-auto p-8 space-y-10 relative"
            style={{ scrollMarginTop: "100px" }} 
       
      >
            <div className="text-center space-y-4">
                <h2 className="text-3xl font-bold text-foreground">Portfólio</h2>

                <div className="flex flex-wrap justify-center flex- gap-10 p-4">
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

            <div className="flex flex-wrap justify-center gap-6">
                {filteredItems.map((item, index) => (
                    <HoverScaleWrapper>
                        <div
                            key={index}
                        >
                            <PortfolioItem title={item.title} category={item.category} />
                        </div>

                    </HoverScaleWrapper>
                ))}
            </div>
        </section>
    );
}

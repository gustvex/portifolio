import { useState, useEffect } from "react";
import AOS from "aos";
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

    useEffect(() => {
        AOS.init({
            duration: 800,
            once: false, // anima toda vez que entra na viewport
        });
        // Se quiser garantir que o AOS reconheça a mudança de itens filtrados:
        AOS.refresh();
    }, [filteredItems]);

    return (
        <section id="portfolio" className="max-w-6xl mx-auto p-8 space-y-10" data-aos="fade-up">
            <div className="text-center space-y-4" data-aos="fade-down" data-aos-delay="100">
                <h2 className="text-3xl font-bold text-foreground">Portfólio</h2>

                <div className="flex justify-center gap-10 p-4">
                    {categories.map((category) => (
                        <Button
                            className="cursor-pointer"
                            key={category}
                            variant={activeCategory === category ? "default" : "outline"}
                            onClick={() => setActiveCategory(category)}
                            data-aos="fade-up"
                            data-aos-delay="150"
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
                            data-aos="fade-up"
                            data-aos-delay={150 + index * 100}
                        >
                            <PortfolioItem title={item.title} category={item.category} />
                        </div>

                    </HoverScaleWrapper>
                ))}
            </div>
        </section>
    );
}

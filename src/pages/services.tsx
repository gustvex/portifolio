import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { HoverScaleWrapper } from "@/components/hover-scale";

export default function Service() {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: false,
        });
    }, []);
    return (
        <section id="services" style={{ scrollMarginTop: "100px" }} className="max-w-6xl mx-auto p-8 space-y-10" data-aos="fade-up">

            <div className="text-center space-y-2" data-aos="fade-down" data-aos-delay="100">
                <h2 className="text-3xl font-bold text-foreground">Serviços</h2>
                <p className="text-muted-foreground">
                    O que posso fazer por você como desenvolvedor frontend
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                {[
                    {
                        title: "Desenvolvimento Frontend",
                        description:
                            "Criação de interfaces modernas com React, Vue.js, Tailwind e Quasar Framework.",
                    },
                    {
                        title: "Consumo de APIs",
                        description:
                            "Integração com APIs RESTful e GraphQL usando Axios, Fetch e ferramentas modernas.",
                    },
                    {
                        title: "Performance & Acessibilidade",
                        description:
                            "Sites rápidos, acessíveis e responsivos. Foco em Lighthouse e boas práticas.",
                    },
                    {
                        title: "Design Responsivo",
                        description:
                            "Desenvolvimento mobile-first com layouts que funcionam em qualquer dispositivo.",
                    },
                    {
                        title: "Manutenção & Suporte",
                        description:
                            "Atualizações, correções e suporte contínuo para manter seu projeto sempre em dia.",
                    },
                    {
                        title: "Otimização SEO",
                        description:
                            "Implementação de boas práticas para melhorar a visibilidade do seu site nos motores de busca.",
                    },
                ].map(({ title, description }, index) => (
                    <HoverScaleWrapper>
                        <Card
                            key={title}
                            className="hover:shadow-lg transition-shadow"
                            data-aos="fade-up"
                            data-aos-delay={150 + index * 100}
                        >
                            <CardHeader>
                                <CardTitle>{title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription>{description}</CardDescription>
                            </CardContent>
                        </Card>
                    </HoverScaleWrapper>
                ))}
            </div>
        </section>
    );
}

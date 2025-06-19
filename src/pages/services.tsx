
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

    return (
        <section id="services" style={{ scrollMarginTop: "100px" }} className="max-w-6xl mx-auto p-8 space-y-10">

            <div className="text-center space-y-2">
                <h2 className="text-3xl font-bold text-foreground">Serviços</h2>
                <p className="text-muted-foreground">
                    O que posso fazer por você como desenvolvedor frontend
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6   ">
                {[
                    {
                        title: "Desenvolvimento Front-End",
                        description:
                            "Criação de interfaces modernas, responsivas e performáticas utilizando React, TypeScript, Tailwind, Vue.js e Quasar.",
                    },
                    {
                        title: "Integração com APIs",
                        description:
                            "Consumo e integração de APIs REST, GraphQL e gRPC, garantindo comunicação eficiente, segura e escalável.",
                    },
                    {
                        title: "Performance & Acessibilidade",
                        description:
                            "Desenvolvimento com foco em velocidade, usabilidade e acessibilidade, seguindo padrões do Lighthouse e das melhores práticas do mercado.",
                    },
                    {
                        title: "Design Responsivo",
                        description:
                            "Interfaces adaptáveis, pensadas no conceito mobile-first, que oferecem uma ótima experiência em qualquer dispositivo.",
                    },
                    {
                        title: "Manutenção & Evolução",
                        description:
                            "Refatoração, implementação de melhorias, correções e suporte contínuo, mantendo seu projeto sempre atualizado e estável.",
                    },
                    {
                        title: "Otimização para SEO",
                        description:
                            "Aplicação de boas práticas de SEO técnico, melhorando a indexação, a visibilidade e o ranqueamento do seu site nos mecanismos de busca.",
                    },
                ]
                    .map(({ title, description },) => (
                        <HoverScaleWrapper className="rounded-xl">
                            <Card className="h-full"
                                key={title}>
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

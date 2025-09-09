import logo from "@/assets/logo.jpeg";
import { cardData } from "@/lib/mocks";
import { TypographyH1, TypographyP, } from "../../typography/Typography";
import SocialIcons from "./social-icons";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Cards from "./about-card";
import { HoverScaleWrapper } from "@/components/hover-scale";


export default function About() {

    return (
        <div id="about" className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center" style={{ scrollMarginTop: "100px" }}>
            <div className="space-y-6" >
                <section>
                    <TypographyH1>
                        Olá, eu sou Gustavo
                    </TypographyH1>
                    <TypographyP>
                        Desenvolvedor Full Stack com experiência em construir soluções escaláveis e performáticas, atuando do front-end ao back-end.
                    </TypographyP>
                </section>

                <section>
                    <TypographyP>
                        Minha atuação inclui o ciclo completo do desenvolvimento, desde a concepção até o deploy, usando tecnologias como <strong className="font-bold">React, Vue.js, TypeScript</strong> no front-end, e <strong className="font-bold">Node.js, NestJS, Docker</strong> e <strong className="font-bold">PostgreSQL</strong> no back-end.
                        Aplico práticas de <strong className="font-bold">DevOps</strong> e <strong className="font-bold">testes unitários</strong> para garantir a confiabilidade e a manutenibilidade do código. Meu foco é entregar produtos alinhados às necessidades de negócio, com código limpo e boas práticas.
                    </TypographyP>
                </section>

                <section>
                    <SocialIcons />
                </section>

                <section className="flex justify-center md:flex-row xl:justify-start gap-6">
                    <HoverScaleWrapper className="rounded-xl">
                        <Link to="#portfolio">
                            <Button variant="default">Ver Projetos</Button>
                        </Link>
                    </HoverScaleWrapper>

                    <HoverScaleWrapper className="rounded-xl">
                        <Link to="https://wa.me/5565992740985"
                            target="_blank"
                            rel="noopener noreferrer">
                            <Button variant="outline">Fale Comigo</Button>
                        </Link>
                    </HoverScaleWrapper>
                </section>

                <section>
                    <Cards cardData={cardData} />
                </section>
            </div>

       
                <img
                    src={logo}
                    alt="Homem de negócios confiante"
                    className="w-full max-w-sm rounded-xl shadow-lg object-cover mx-auto"
                />
        
        </div>
    );
}

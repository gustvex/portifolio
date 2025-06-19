
import "aos/dist/aos.css";

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.jpeg";

import { statsData } from "@/lib/nav-links";
import SocialIcons from "@/components/social-icons";
import StatsCards from "@/components/stats-cards ";


export default function About() {

    return (
        <section id="about" style={{ scrollMarginTop: "100px" }} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center ">
            <div className="space-y-6" >
                <section>
                    <h1 className="titulo">Olá, eu sou Gustavo</h1>
                    <p className="subtitulo">
                        Desenvolvedor Front-End focado em construir interfaces modernas, performáticas e escaláveis.
                    </p>
                </section>

                <section>
                    <p className="paragrafo">
                        Trabalho com React, TypeScript, Tailwind CSS, Vue.js e Quasar, criando soluções que aliam performance, acessibilidade e uma ótima experiência para o usuário.
                        Acredito em código limpo, boas práticas e no desenvolvimento de produtos que gerem valor real para pessoas e negócios.
                    </p>
                </section>

                <div>
                    <SocialIcons />
                </div>



                <section className="flex space-x-4 rounded-md">


                    <Link to="#portfolio">
                        <Button variant="default">Ver Projetos</Button>
                    </Link>


                    <a href="https://wa.me/5565992740985"
                        target="_blank"
                        rel="noopener noreferrer">
                        <Button variant="outline">Fale Comigo</Button>
                    </a>
                </section>

                <div>
                    <StatsCards stats={statsData} />
                </div>
            </div>

            <div>
                <img
                    src={logo}
                    alt="Homem de negócios confiante"
                    className="w-full max-w-sm rounded-xl shadow-lg object-cover mx-auto"
                />
            </div>
        </section>
    );
}

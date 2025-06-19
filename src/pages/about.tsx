import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.jpeg";

import { statsData } from "@/lib/nav-links";
import SocialIcons from "@/components/social-icons";
import StatsCards from "@/components/stats-cards ";


export default function About() {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: false,
        });
    }, []);
    return (
        <section id="about" style={{ scrollMarginTop: "100px" }} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center ">
            <div className="space-y-6" data-aos="fade-up">
                <section data-aos="fade-right" data-aos-delay="100">
                    <h1 className="titulo">Olá, eu sou Gustavo</h1>
                    <p className="subtitulo">
                        Desenvolvedor Front-End focado em construir interfaces modernas, performáticas e escaláveis.
                    </p>
                </section>

                <section data-aos="fade-right" data-aos-delay="200">
                    <p className="paragrafo">
                        Trabalho com React, TypeScript, Tailwind CSS, Vue.js e Quasar, criando soluções que aliam performance, acessibilidade e uma ótima experiência para o usuário.
                        Acredito em código limpo, boas práticas e no desenvolvimento de produtos que gerem valor real para pessoas e negócios.
                    </p>
                </section>

                <div data-aos="fade-right" data-aos-delay="300">
                    <SocialIcons />
                </div>



                <section className="flex space-x-4 rounded-md" data-aos="fade-right" data-aos-delay="300">


                    <Link to="#portfolio">
                        <Button variant="default">Ver Projetos</Button>
                    </Link>


                    <a href="https://wa.me/5565992740985"
                        target="_blank"
                        rel="noopener noreferrer">
                        <Button variant="outline">Fale Comigo</Button>
                    </a>
                </section>

                <div data-aos="fade-up" data-aos-delay="500">
                    <StatsCards stats={statsData} />
                </div>
            </div>

            <div data-aos="fade-left" data-aos-delay="300">
                <img
                    src={logo}
                    alt="Homem de negócios confiante"
                    className="w-full max-w-sm rounded-xl shadow-lg object-cover mx-auto"
                />
            </div>
        </section>
    );
}

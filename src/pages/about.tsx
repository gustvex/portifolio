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
        <section id="about" style={{ scrollMarginTop: "100px" }} className="grid grid-cols-1 md:grid-cols-2 items-center ">
            <div className="space-y-6" data-aos="fade-up">
                <section data-aos="fade-right" data-aos-delay="100">
                    <h1 className="titulo">Olá, eu sou Gustavo</h1>
                    <p className="subtitulo">
                        Programador Frontend focado em qualidade, performance e boas práticas.
                    </p>
                </section>

                <section data-aos="fade-right" data-aos-delay="200">
                    <p className="paragrafo">
                        Tenho experiência com TypeScript, React, Tailwind CSS, Vue.js e Quasar Framework.
                        Meu objetivo é criar interfaces acessíveis, modernas e de alto desempenho.
                    </p>
                </section>

                <div data-aos="fade-right" data-aos-delay="300">
                    <SocialIcons />
                </div>

                <section className="flex space-x-4" data-aos="fade-up" data-aos-delay="400">
                    <Link to="/projects">
                        <Button variant="default">Ver Projetos</Button>
                    </Link>
                    <Link to="/contact">
                        <Button variant="outline">Fale Comigo</Button>
                    </Link>
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

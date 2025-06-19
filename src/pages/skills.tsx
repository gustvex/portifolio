import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { SkillChart } from "@/components/skill-chart";
import { HoverScaleWrapper } from "@/components/hover-scale";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faJsSquare, faHtml5, faCss3Alt } from "@fortawesome/free-brands-svg-icons";

export default function Skills() {
    const skills = [
        { name: "HTML", proeficiencia: 99, icon: <FontAwesomeIcon icon={faHtml5} size={'3x'} /> },
        { name: "Tailwind CSS", proeficiencia: 99, icon: <FontAwesomeIcon icon={faCss3Alt} size={'3x'} /> },
        { name: "JavaScript", proeficiencia: 99, icon: <FontAwesomeIcon icon={faJsSquare} size={'3x'} /> },
        { name: "React", proeficiencia: 99, icon: <FontAwesomeIcon icon={faReact} size={'3x'} /> },
    ];

    useEffect(() => {
        AOS.init({
            duration: 800,
            once: false,
        });
    }, []);

    return (
        <section
            id="skills"
            style={{ scrollMarginTop: "100px" }}
            className="max-w-6xl mx-auto p-8 space-y-10"
            data-aos="fade-up"
        >
            <div className="text-center space-y-2" data-aos="fade-down" data-aos-delay="100">
                <h2 className="text-3xl font-bold text-foreground">Skills</h2>
                <p className="text-muted-foreground">
                    Conheça um pouco das minhas habilidades como desenvolvedor
                </p>
                <p className="text-muted-foreground italic text-sm max-w-xl mx-auto mt-2">
                    Sim, meus níveis de proficiência estão todos no “99%” afinal, ninguém é perfeito, mas posso garantir que sou muito bom no que faço! 😉
                </p>
            </div>

            <div className="flex flex-wrap justify-center gap-6">
                {skills.map((skill, index) => (
                    <HoverScaleWrapper key={index}>
                        <div
                            className="flex justify-center w-[200px]"
                            data-aos="fade-up"
                            data-aos-delay={150 + index * 100}
                        >
                            <SkillChart
                                name={skill.name}
                                proeficiencia={skill.proeficiencia}
                                total={100}
                                icon={skill.icon}
                            />
                        </div>
                    </HoverScaleWrapper>
                ))}
            </div>
        </section>
    );
}

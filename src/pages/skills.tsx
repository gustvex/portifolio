import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { SkillChart } from "@/components/skill-chart";
import { Code, FileCode, Files, Atom, Library } from "lucide-react";
import { HoverScaleWrapper } from "@/components/hover-scale";

export default function Skills() {
    const skills = [
        { name: "HTML", proeficiencia: 90, icon: <FileCode className="w-6 h-6" /> },
        { name: "CSS", proeficiencia: 85, icon: <Code className="w-6 h-6" /> },
        { name: "JavaScript", proeficiencia: 80, icon: <Files className="w-6 h-6" /> },
        { name: "React", proeficiencia: 75, icon: <Atom className="w-6 h-6" /> },
        { name: "Next.js", proeficiencia: 70, icon: <Library className="w-6 h-6" /> },
    ];

    useEffect(() => {
        AOS.init({
            duration: 800,
            once: false, // animação repete toda vez que o elemento entra na viewport
        });
    }, []);

    return (
        <section id="skills" style={{ scrollMarginTop: "100px" }} className="max-w-6xl mx-auto p-8 space-y-10" data-aos="fade-up">
            <div className="text-center space-y-2" data-aos="fade-down" data-aos-delay="100">
                <h2 className="text-3xl font-bold text-foreground">Skills</h2>
                <p className="text-muted-foreground">
                    Conheça um pouco das minhas habilidades como desenvolvedor frontend
                </p>
            </div>

            <div className="flex flex-wrap justify-center">
                {skills.map((skill, index) => (
                       <HoverScaleWrapper>
                    <div
                        key={index}
                        className="flex justify-center w-[200px] "
                        data-aos="fade-up"
                        data-aos-delay={150 + index * 100} // delay para efeito cascata
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

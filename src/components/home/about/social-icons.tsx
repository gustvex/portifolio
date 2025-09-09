import React from "react";
import { Github, Linkedin } from "lucide-react";
import { HoverScaleWrapper } from "@/components/hover-scale";

type SocialLink = {
    href: string;
    label: string;
    Icon: React.ComponentType<{ size?: number }>;
};

const socialLinks: SocialLink[] = [
    {
        href: "https://github.com/gustvex/",
        label: "GitHub",
        Icon: Github,
    },
    {
        href: "https://www.linkedin.com/in/gustavooliveiradevv/",
        label: "LinkedIn",
        Icon: Linkedin,
    },
   
];

export default function SocialIcons() {
    return (
        <section className="flex justify-center md:flex-row xl:justify-start gap-6">
            {socialLinks.map(({ href, label, Icon }) => (
                <HoverScaleWrapper className="rounded-full">

                <div
                    key={label}
                    className="text-foreground p-2 rounded-full inline-block"
                >
                    <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        className="hover:text-primary transition-colors"
                    >
                        <Icon size={24} />
                    </a>
                </div>
                 </HoverScaleWrapper>
            ))}
        </section>
    );
}

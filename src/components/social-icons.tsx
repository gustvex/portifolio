import React from "react";
import { Github, Linkedin, Twitter } from "lucide-react";
import { HoverScaleWrapper } from "./hover-scale";

type SocialLink = {
    href: string;
    label: string;
    Icon: React.ComponentType<{ size?: number }>;
};

const socialLinks: SocialLink[] = [
    {
        href: "https://github.com/seuusuario",
        label: "GitHub",
        Icon: Github,
    },
    {
        href: "https://linkedin.com/in/seuusuario",
        label: "LinkedIn",
        Icon: Linkedin,
    },
    {
        href: "https://twitter.com/seuusuario",
        label: "Twitter",
        Icon: Twitter,
    },
];

export default function SocialIcons() {
    return (
        <section className="flex space-x-6">
            {socialLinks.map(({ href, label, Icon }) => (
                 <HoverScaleWrapper>

                <div
                    key={label}
                    className="text-foreground bg-muted/50 p-2 rounded-full inline-block"
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

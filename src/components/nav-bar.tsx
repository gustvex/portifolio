import { navLinks } from "@/lib/nav-links";

export default function NavBar() {
    return (

        <div className="space-x-20 text-sm font-medium cursor-pointer">
            {navLinks.map(({ label, path }) => (
                <a
                    key={path}
                    href={path}
                    className="transition-colors hover:text-foreground/100"
                >
                    {label}
                </a>
            ))}
        </div>

    );
}

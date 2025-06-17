
import { navLinks } from "@/lib/nav-links";
import { cn } from "@/lib/utils";

type BarMenuProps = {
    className?: string;
};

export default function BarMenu({ className }: BarMenuProps) {
    return (
        <div className={cn("space-x-20 text-sm font-medium cursor-pointer", className)}>
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

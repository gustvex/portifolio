import { ModeToggle } from "./mode-toggle";
import NavBar from "./nav-bar";

export default function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 p-3 flex items-center text-foreground/80">
            <div className="flex-grow" />
            <NavBar />
            <div className="flex-grow flex justify-end">
                <ModeToggle />
            </div>
        </header>
    );
}

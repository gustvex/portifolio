import BarMenu from "../menu-bar";
import HamburgerMenu from "../menu-hamburger";
import { ModeToggle } from "../theme/mode-toggle";

export default function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 p-3 flex items-center justify-between text-foreground/80">

            <div className="flex md:hidden">
                <HamburgerMenu />
            </div>

            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden md:flex">
                <BarMenu />
            </div>

            <div className="flex">
                <ModeToggle />
            </div>

        </header>
    );
}

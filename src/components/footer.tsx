import { Mail, Phone } from "lucide-react";
import SocialIcons from "./social-icons";
import NavBar from "./nav-bar";

export default function Footer() {
    return (
        <footer className="bg-background border-t text-center text-foreground py-10 px-4">
            <div className="space-y-4">
                <NavBar />

                <div className="flex justify-center gap-6">
                    <SocialIcons />
                </div>

                <div className="flex justify-center items-center gap-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        <span>seuemail@email.com</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4" />
                        <span>(99) 99999-9999</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}

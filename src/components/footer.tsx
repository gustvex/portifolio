import { Mail, Phone } from "lucide-react";
import SocialIcons from "./social-icons";

export default function Footer() {
    return (
        <footer className="bg-background border-t text-center text-foreground py-10 px-4">
            <div className="space-y-4">
                <div className="flex justify-center gap-6">
                    <SocialIcons />
                </div>
                <div className="flex justify-center items-center gap-6 text-sm text-muted-foreground">
                    <div className="flex justify-center items-center gap-6 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                            <Mail className="w-4 h-4" />
                            <a
                                href="mailto:gustavooliveiraworks@gmail.com"
                                className="hover:underline"
                            >
                                gustavooliveiraworks@gmail.com
                            </a>
                        </div>
                        <div className="flex items-center gap-2">
                            <Phone className="w-4 h-4" />
                            <a
                                href="tel:+5565992740985"
                                className="hover:underline"
                            >
                                (65) 99274-0985
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    );
}

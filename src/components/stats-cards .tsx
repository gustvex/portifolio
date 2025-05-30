import { Card, CardContent } from "@/components/ui/card";
import { HoverScaleWrapper } from "./hover-scale";

interface Stat {
    value: string;
    label: string;
}

interface StatsCardsProps {
    stats: Stat[];
}

export default function StatsCards({ stats }: StatsCardsProps) {
    return (
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center mt-8 cursor-pointer">
            {stats.map(({ value, label }, index) => (
                <HoverScaleWrapper>

                    <Card
                        key={index}
                        className="p-4"
                    >
                        <CardContent>
                            <p className="text-3xl font-bold text-primary">{value}</p>
                            <p className="text-sm text-muted-foreground">{label}</p>
                        </CardContent>
                    </Card>
                </HoverScaleWrapper>
            ))}
        </section>
    );
}

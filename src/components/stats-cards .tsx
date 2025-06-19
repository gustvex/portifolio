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
        <section
        className="flex flex-wrap justify-center md:justify-start gap-4 text-center mt-8 cursor-pointer"

       
      >
        {stats.map(({ value, label }, index) => (
          <HoverScaleWrapper key={index} className="rounded-xl">
            <Card className="w-[150px] h-[120px]">
              <CardContent className="flex flex-col items-center justify-center h-full">
                <p className="text-3xl font-bold text-primary">{value}</p>
                <p className="text-sm text-muted-foreground">{label}</p>
              </CardContent>
            </Card>
          </HoverScaleWrapper>
        ))}
      </section>
      
    );
}

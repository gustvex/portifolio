import { HoverScaleWrapper } from "@/components/hover-scale";
import { Card, CardContent } from "@/components/ui/card";

type CardItem = {
    value: string;
    label: string;
}

interface CardProps {
  cardData: CardItem[];
}

export default function Cards({ cardData }: CardProps) {
    return (
        <section
        className="flex flex-wrap justify-center xl:justify-start gap-6 text-center cursor-pointer">
        {cardData.map(({ value, label }, index) => (
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

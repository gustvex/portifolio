import { HoverScaleWrapper } from "../hover-scale";
import { TypographyH2, TypographyH3, TypographyP } from "../typography/Typography";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";

type SpecialtieItem = {
    title: string;
    description: string;
}

interface SpecialtieProps {
    frontendSpecialties: SpecialtieItem[];
    backendSpecialties: SpecialtieItem[];
}

export default function Specialties({ frontendSpecialties, backendSpecialties  }:SpecialtieProps) {
    return (
        <section id="specialties" className="flex flex-col gap-6" style={{ scrollMarginTop: "80px" }} >
            <div className="flex flex-col text-center gap-6">
                <TypographyH2>Especialidades</TypographyH2>
                <TypographyP className="text-muted-foreground">
                    Desenvolvimento completo, do front-end ao back-end, para entregar soluções escaláveis e performáticas.
                </TypographyP>
            </div>

            <div className="flex flex-wrap justify-center  gap-12 text-center cursor-pointer">
                <div className="space-y-4">
                    <TypographyH3>Desenvolvimento Front-End</TypographyH3>
                    <div className="grid grid-cols-1 gap-4">
                        {frontendSpecialties.map(({ title, description }) => (
                            <HoverScaleWrapper className="rounded-xl min-w-[280px] max-h-[180px] max-w-[500px] mx-auto" key={title}>
                                <Card className="h-full ">
                                    <CardHeader>
                                        <CardTitle>{title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <CardDescription>{description}</CardDescription>
                                    </CardContent>
                                </Card>
                            </HoverScaleWrapper>
                        ))}
                    </div>
                </div>
                <div className="space-y-4">
                    <TypographyH3>Desenvolvimento Back-End</TypographyH3>
                    <div className="grid grid-cols-1 gap-4">
                        {backendSpecialties.map(({ title, description }) => (
                            <HoverScaleWrapper className="rounded-xl min-w-[280px] max-h-[180px] max-w-[500px] mx-auto" key={title}>
                                <Card className="h-full">
                                    <CardHeader>
                                        <CardTitle>{title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <CardDescription>{description}</CardDescription>
                                    </CardContent>
                                </Card>
                            </HoverScaleWrapper>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
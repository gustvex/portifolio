import * as React from "react";
import { Label, Pie, PieChart } from "recharts";
import {

    CardFooter,
} from "@/components/ui/card";
import {
    type ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart";

interface SkillChartProps {
    name: string;
    proeficiencia: number;
    total: number;
    icon: React.ReactNode;  // ícone passado por prop
}

export function SkillChart({ name, proeficiencia, total, icon }: SkillChartProps) {
    const remaining = total - proeficiencia;

    const chartData = [
        { label: name, value: proeficiencia, fill: "var(--foreground)" }, 
        { label: "Restante", value: remaining, fill: "var(--muted)" },
    ];

    const chartConfig = {
        [name]: { label: name, color: "var(--foreground)" },
        Restante: { label: "Restante", color: "var(--muted)" },
    } satisfies ChartConfig;
      

    return (
        <div className=" h-auto w-[200px] cursor-pointer ">
            <div className="h-full w-full flex items-center justify-center ">
                <ChartContainer
                    config={chartConfig}
                    className="aspect-square w-full max-w-[160px]"
                >
                    <PieChart>
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                        />
                        <Pie
                            data={chartData}
                            dataKey="value"
                            nameKey="label"
                            innerRadius={50}
                            outerRadius={70}
                            strokeWidth={5}
                        >
                            {/* Renderiza o ícone no centro */}
                            <Label
                                content={({ viewBox }) => {
                                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                        return (
                                            <foreignObject
                                                x={viewBox.cx - 20}
                                                y={viewBox.cy - 20}
                                                width={40}
                                                height={40}
                                            >
                                                <div className="flex items-center justify-center w-full h-full">
                                                    {icon}
                                                </div>
                                            </foreignObject>
                                        );
                                    }
                                    return null;
                                }}
                            />
                        </Pie>
                    </PieChart>
                </ChartContainer>
            </div>

            <CardFooter className="flex flex-col items-center gap-1 text-center text-sm">
                <span className="text-2xl font-bold">{proeficiencia}%</span>
                <span className="text-muted-foreground">{name}</span>
            </CardFooter>
        </div>
    );
}

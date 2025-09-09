import type { ReactNode } from "react";

interface TypographyProps {
    children: ReactNode;
    className?: string;
}

export function TypographyH1({ children, className }: TypographyProps) {
    return (
        <h1 className={`${className} scroll-m-20 text-4xl font-extrabold tracking-tight text-balance`}>
            {children}
        </h1>
    );
}

export function TypographyH2({ children }: TypographyProps) {
    return (
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            {children}
        </h2>
    );
}

export function TypographyH3({ children }: TypographyProps) {
    return (
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            {children}
        </h3>
    );
}

export function TypographyH4({ children }: TypographyProps) {
    return (
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
            {children}
        </h4>
    );
}

export function TypographyP({ children }: TypographyProps) {
    return (
        <p className="leading-7 [&:not(:first-child)]:mt-6">
            {children}
        </p>
    );
}

export function TypographyBlockquote({ children }: TypographyProps) {
    return (
        <blockquote className="mt-6 border-l-2 pl-6 italic">
            {children}
        </blockquote>
    );
}

// Para a lista, a melhor abordagem ainda é passar um array de itens.
interface TypographyListProps {
    items: ReactNode[];
}

export function TypographyList({ items }: TypographyListProps) {
    return (
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            {items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    );
}

export function TypographyLead({ children }: TypographyProps) {
    return (
        <p className="text-muted-foreground text-xl">
            {children}
        </p>
    );
}

export function TypographyLarge({ children }: TypographyProps) {
    return <div className="text-lg font-semibold">{children}</div>;
}

export function TypographySmall({ children }: TypographyProps) {
    return (
        <small className="text-sm leading-none font-medium">
            {children}
        </small>
    );
}

export function TypographyMuted({ children }: TypographyProps) {
    return (
        <p className="text-muted-foreground text-sm">
            {children}
        </p>
    );
}
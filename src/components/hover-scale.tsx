type HoverScaleWrapperProps = {
    children: React.ReactNode;
    className?: string;
};

export function HoverScaleWrapper({ children, className }: HoverScaleWrapperProps) {
    return (
        <div
            className={`inline-flex transition-transform duration-300 hover:scale-110 hover:shadow-lg hover:z-10 relative cursor-pointer ${className}`}
        >
            {children}
        </div>
    );
}

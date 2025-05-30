export function HoverScaleWrapper({ children }: { children: React.ReactNode }) {
    return (
        <div className="transition-transform duration-300 hover:scale-110 hover:shadow-lg hover:z-10 relative cursor-pointer">
            {children}
        </div>
    );
}
  
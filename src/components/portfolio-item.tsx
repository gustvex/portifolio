
interface PortfolioItemProps {
    title: string;
    category: string;
}

export function PortfolioItem({ title, category }: PortfolioItemProps) {
    return (
        <div className="bg-black w-[300px] h-[400px] rounded-md flex items-center justify-center text-white text-xl font-semibold">
            {title} - {category}
        </div>
    );
}

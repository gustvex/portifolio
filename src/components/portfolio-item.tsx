interface PortfolioItemProps {
    title: string;
    category: string;
    image: string; 
    projectUrl: string; 
    technologies: string[];
}

export function PortfolioItem({
    title,
    category,
    image,
    projectUrl,
    technologies,
}: PortfolioItemProps) {
    return (
        <div className="flex flex-col items-center gap-4"> 
            <div className="flex flex-col text-center">
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="text-sm text-gray-500">{category}</p>
                <p className="text-sm text-gray-500">{technologies.join(" | ")}</p>
            </div>
            <a href={projectUrl} target="_blank" rel="noopener noreferrer">
                <div
                    className="max-w-[500px] h-auto rounded-md overflow-hidden shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer"
                >
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-[250px] object-cover"
                    />
                </div>
            </a>
        </div>
    );
}
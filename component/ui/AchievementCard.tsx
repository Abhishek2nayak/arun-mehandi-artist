interface AchievementCardProps {
    title: string;
    description: string;
    highlight: string;
}

const AchievementCard: React.FC<AchievementCardProps> = ({
    title,
    highlight,
}) => {
    return (
        <div
            className="flex items-center justify-center rounded-md px-4 py-2 shadow-md text-center transition-all duration-300"
            style={{
                backgroundColor: "#E7C8B4", // primaryBg
                border: "2px solid rgb(138,103,35)", // darkYellow
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
        >
            <span
                className="mr-2 text-2xl font-bold"
                style={{
                    color: "rgb(76,43,22)", // darkBrown
                }}
            >
                {highlight}
            </span>
            <span
                className="text-lg font-medium"
                style={{
                    color: "rgb(122,57,22)", // mediumBrown
                }}
            >
                {title}
            </span>
        </div>
    );
};



export default AchievementCard;
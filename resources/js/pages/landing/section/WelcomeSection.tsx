interface WelcomeSectionProps {
    barangay: string;
    missionStatement: string;
    missionStatementAuthor: string;
    title1: string;
    title2: string;
    title3: string;
    logo: string;
}

export default function WelcomeSection({ barangay, missionStatement, missionStatementAuthor, title1, title2, title3, logo }: WelcomeSectionProps) {
    return (
        <div>
            <div className="absolute inset-0 flex items-center justify-center opacity-10">
                <img
                    src={logo}
                    alt="Background logo"
                    className="h-[60%] w-[60%] rounded-full object-contain sm:h-[100%] sm:w-[100%] md:h-[80%] md:w-[80%] lg:h-[150%] lg:w-[150%]"
                />
            </div>
            <div className="absolute inset-0 overflow-hidden opacity-10">
                <div className="absolute h-24 w-24 rounded-full bg-red-500 md:-top-20 md:-left-20 md:h-44 md:w-44 lg:h-64 lg:w-64"></div>
                <div className="absolute right-1 bottom-10 h-24 w-24 rounded-full bg-blue-500 md:h-56 md:w-56 lg:h-72 lg:w-72"></div>
            </div>
            <div className="relative z-10 mx-auto max-w-7xl text-center">
                <div className="mb-8 flex flex-col items-center justify-center">
                    <h2 className="mb-2 text-xl font-semibold tracking-wider text-gray-600 uppercase sm:text-2xl">{title1}</h2>
                    <h1 className="text-center text-6xl font-extrabold tracking-tight sm:text-7xl md:text-8xl">
                        <span className="block text-red-500">{title2}</span>
                        <span className="block text-blue-500">{title3}</span>
                    </h1>
                    <h3 className="mt-3 text-3xl font-bold tracking-wide text-gray-800 uppercase sm:text-4xl md:text-5xl">
                        OF <span>{barangay}</span>
                    </h3>

                    <div className="mt-8 max-w-2xl">
                        <p className="text-md text-gray-600 italic sm:text-lg md:text-xl">
                            {missionStatement}
                            <span className="ml-2 block text-right font-medium not-italic">
                                —<span>{missionStatementAuthor}</span>
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

interface CallToActionSectionProps {
    title: string;
    description: string;
    anchorLabel: string;
    href: string;
}
export default function CallToActionSection({ title, description, href, anchorLabel }: CallToActionSectionProps) {
    return (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
                <h2 className="text-xl font-bold md:text-4xl">{title}</h2>
                <p className="text-opacity-90 mx-auto max-w-2xl text-base text-white md:mt-4 md:text-xl">{description}</p>
                <div className="md:mt-8 mt-4">
                    <a
                        href={href}
                        className="rounded-full bg-white px-8 py-2 text-base font-medium text-blue-500 shadow-md transition-all hover:bg-gray-100 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-500 focus:outline-none sm:px-10 md:py-3"
                    >
                        {anchorLabel}
                    </a>
                </div>
            </div>
        </div>
    );
}

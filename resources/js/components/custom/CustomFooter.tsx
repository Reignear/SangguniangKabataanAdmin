interface FooterLink {
    label: string;
    href: string;
}

interface FooterProps {
    links: FooterLink[];
    copyrightText: string;
    backgroundColor?: string;
}
export default function CustomFooter({ links, copyrightText, backgroundColor }: FooterProps) {
    return (
        <footer className={`${backgroundColor} py-8 text-white`}>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-between md:flex-row">
                    <div className="mb-4 md:mb-0">
                        <p className="md:text-sm text-[8px] text-gray-300">{copyrightText}</p>
                    </div>
                    <div className="flex space-x-6">
                        {links.map((link, index) => (
                            <a key={index} href={link.href} className="text-[8px] md:text-sm text-gray-300 hover:text-white">
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}

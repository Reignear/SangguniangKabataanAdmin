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
                        <p className="text-sm text-gray-300">
                            {/* © {new Date().getFullYear()} Sangguniang Kabataan of Barangay Balagunan. All rights reserved. */}
                            {copyrightText}
                        </p>
                    </div>
                    <div className="flex space-x-6">
                        {links.map((link, index) => (
                            <a key={index} href={link.href} className="text-sm text-gray-300 hover:text-white">
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}

interface SocialMediaLink {
    href: string;
    svgFillRule?: 'evenodd' | 'nonzero' | 'inherit';
    svgD: string;
    svgClipRule?: string;
    className: string;
}
interface ContactUsSectionProps {
    links: SocialMediaLink[];
    address: string;
    email: string;
    phone: string;
    officeHours: string;
}
export default function Contact({ links, address, email, phone, officeHours }: ContactUsSectionProps) {
    return (
        <div className="mx-auto my-4 h-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
                <h2 className="text-base font-bold tracking-tight text-gray-900 sm:text-4xl">Contact Us</h2>
                <p className="mx-auto max-w-2xl text-[10px] text-gray-500 md:mt-4 md:text-xl">
                    Have questions or want to get involved? Reach out to us.
                </p>
            </div>
            <div className="mt-4 grid gap-4 md:mt-12 md:grid-cols-2 md:gap-8">
                <div className="rounded-lg p-6">
                    <h3 className="mb-4 text-sm font-bold md:text-xl">Contact Information</h3>
                    <div className="space-y-4">
                        <p className="flex items-center text-[10px] md:text-base">
                            <span className="mr-2 font-medium">Address:</span> {address}
                        </p>
                        <p className="flex items-center text-[10px] md:text-base">
                            <span className="mr-2 font-medium">Email:</span> {email}
                        </p>
                        <p className="flex items-center text-[10px] md:text-base">
                            <span className="mr-2 font-medium">Phone:</span> {phone}
                        </p>
                        <p className="flex items-center text-[10px] md:text-base">
                            <span className="mr-2 font-medium">Office Hours:</span> {officeHours}
                        </p>
                    </div>
                </div>

                <div className="rounded-lg p-6">
                    <h3 className="mb-4 text-sm font-bold md:text-xl">Follow Us</h3>
                    <p className="mb-4 text-[10px] md:text-base">Stay connected with us on social media for the latest updates and announcements.</p>
                    <div className="flex space-x-4">
                        {links.map((link, index) => (
                            <a key={index} href={link.href} className={`${link.className} rounded-full p-1 md:p-3`}>
                                <span className="sr-only">Facebook</span>
                                <svg className="h-4 w-4 md:h-6 md:w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fillRule={link.svgFillRule} d={link.svgD} clipRule={link.svgClipRule} />
                                </svg>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

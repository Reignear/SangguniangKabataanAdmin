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
        <div className="mx-auto h-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contact Us</h2>
                <p className="mx-auto mt-4 max-w-2xl text-xl text-gray-500">Have questions or want to get involved? Reach out to us.</p>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-2">
                <div className="rounded-lg bg-gray-50 p-6 shadow-md">
                    <h3 className="mb-4 text-xl font-bold text-gray-900">Contact Information</h3>
                    <div className="space-y-4">
                        <p className="flex items-center text-gray-600">
                            <span className="mr-2 font-medium">Address:</span> {address}
                        </p>
                        <p className="flex items-center text-gray-600">
                            <span className="mr-2 font-medium">Email:</span> {email}
                        </p>
                        <p className="flex items-center text-gray-600">
                            <span className="mr-2 font-medium">Phone:</span> {phone}
                        </p>
                        <p className="flex items-center text-gray-600">
                            <span className="mr-2 font-medium">Office Hours:</span> {officeHours}
                        </p>
                    </div>
                </div>

                <div className="rounded-lg bg-gray-50 p-6 shadow-md">
                    <h3 className="mb-4 text-xl font-bold text-gray-900">Follow Us</h3>
                    <p className="mb-4 text-gray-600">Stay connected with us on social media for the latest updates and announcements.</p>
                    <div className="flex space-x-4">
                        {links.map((link, index) => (
                            <a key={index} href={link.href} className={`${link.className} rounded-full p-3`}>
                                <span className="sr-only">Facebook</span>
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
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

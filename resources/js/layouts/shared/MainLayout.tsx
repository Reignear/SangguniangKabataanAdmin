import CustomHeader from '@/components/custom/CustomHeader';

interface MainLayoutProps {
    children: React.ReactNode;
    classname?: string;
}

const landingNavItems = [
    { title: 'Log In', href: '/login' },
    { title: 'Register', href: '/register' },
];
const landingNavTitle = 'Sangguniang Kabataan';

export default function MainLayout({ children, classname }: MainLayoutProps) {
    return (
        <>
            <CustomHeader title={landingNavTitle} rightNavItems={landingNavItems} />
            <div>
                <main className={`w-full flex${classname}`}>{children}</main>
            </div>
        </>
    );
}

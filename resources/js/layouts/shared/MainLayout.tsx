import CustomHeader from '@/components/custom/CustomHeader';
interface MainLayoutProps {
    children: React.ReactNode;
    classname?: string;
}

const landingNavItems = [
    { title: 'Log In', href: '/login' },
    { title: 'Register', href: '/register' },
];
const landingNavTitle = 'SANGUNIANG KABATAAN';
const landingNavBarangay = 'BALAGUNAN';

export default function MainLayout({ children, classname }: MainLayoutProps) {
    return (
        <>
            <div className="gradient-bg">
                <div className="pt-2">
                    <CustomHeader title={landingNavTitle} barangay={landingNavBarangay} rightNavItems={landingNavItems} />
                </div>
                <div>
                    <main className={`w-full flex${classname}`}>{children}</main>
                </div>
            </div>
        </>
    );
}

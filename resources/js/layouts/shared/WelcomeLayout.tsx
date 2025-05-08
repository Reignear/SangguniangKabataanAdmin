import CustomHeader from '@/components/custom/CustomHeader';
import SKLogo from '../../../assets/logo.png';
interface WelcomeLayoutProps {
    children: React.ReactNode;
    classname?: string;
}

const landingNavItems = [
    { title: 'Log In', href: route('login') },
    { title: 'Register', href: route('register') },
];
const landingNavTitle = 'SANGUNIANG KABATAAN';
const landingNavBarangay = 'BALAGUNAN';

export default function WelcomeLayout({ children, classname }: WelcomeLayoutProps) {
    return (
        <>
            <div className="gradient-bg">
                <div>
                    <CustomHeader logo={SKLogo} title={landingNavTitle} barangay={landingNavBarangay} rightNavItems={landingNavItems} />
                </div>
                <div>
                    <main className={`w-full flex${classname}`}>{children}</main>
                </div>
            </div>
        </>
    );
}

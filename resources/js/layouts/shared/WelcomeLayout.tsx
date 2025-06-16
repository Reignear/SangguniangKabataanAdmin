import CustomHeader from '@/components/custom/CustomHeader';
import SKLogo from '../../../assets/logo.png';
interface WelcomeLayoutProps {
    children: React.ReactNode;
    classname?: string;
}

const sectionItems = [
    { title: 'Home', href: '#home' },
    { title: 'About Us', href: '#about' },
    { title: 'Programs  ', href: '#programs' },
    { title: 'Join Us', href: '#callToAction' },
    { title: 'Officials', href: '#officials' },
    { title: 'News & Updates', href: '#news' },
    { title: 'Contact Us', href: '#contact' },
];
const landingNavTitle = 'SK';
const landingNavBarangay = 'BALAGUNAN';

export default function WelcomeLayout({ children, classname }: WelcomeLayoutProps) {
    return (
        <div className="">
            <CustomHeader logo={SKLogo} title={landingNavTitle} barangay={landingNavBarangay} rightNavItems={sectionItems} />

            <main className={`w-full flex${classname}`}>{children}</main>
        </div>
    );
}

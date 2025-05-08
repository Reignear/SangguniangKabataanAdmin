import CustomFooter from '@/components/custom/CustomFooter';
import WelcomeLayout from '@/layouts/shared/WelcomeLayout';
import { Head } from '@inertiajs/react';
import { AboutUsData, AboutUsDescription, AboutUsTitle } from '../../../data/AboutUsData';
import { CallToActionAnchorLabel, CallToActionDescription, CallToActionHref, CallToActionTitle } from '../../../data/CallToActionData';
import { ContactUsAddress, ContactUsEmail, ContactUsOfficeHours, ContactUsPhone, SocialMediaLinks } from '../../../data/ContactUsData';
import { FooterCopyrightText, FooterData } from '../../../data/FooterData';
import { NewsAndUpdatesData, NewsAndUpdatesDescription, NewsAndUpdatesTitle } from '../../../data/NewsAndUpdatesData';
import { OfficialsData, OfficialsDescription, OfficialsTitle } from '../../../data/OfficialsData';
import { ProgramData, ProgramDescription, ProgramTitle } from '../../../data/ProgramData';
import {
    WelcomeDataBarangay,
    WelcomeDataLogo,
    WelcomeDataMissionStatement,
    WelcomeDataMissionStatementAuthor,
    WelcomeDataTitle1,
    WelcomeDataTitle2,
    WelcomeDataTitle3,
} from '../../../data/WelcomeData';
import CallToActionSection from '../../../js/pages/landing/section/CallToActionSection';
import ContactUsSection from '../../../js/pages/landing/section/ContactUsSection';
import NewsAndUpdateSection from '../../../js/pages/landing/section/NewsAndUpdateSection';
import OfficialsSection from '../../../js/pages/landing/section/OfficialsSection';
import ProgramSection from '../../../js/pages/landing/section/ProgramSection';
import AboutUsSection from './section/AboutUsSection';
import WelcomeSection from './section/WelcomeSection';

export default function Welcome() {
    return (
        <>
            <Head title="Sangguniang Kabataan | Barangay Balagunan" />
            <div className="min-h-screen overflow-x-hidden bg-gray-100">
                <WelcomeLayout>
                    {/* Hero Section - Enhanced version of your original section */}
                    <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden px-4 py-16 sm:px-6 lg:px-8">
                        <WelcomeSection
                            barangay={WelcomeDataBarangay}
                            missionStatement={WelcomeDataMissionStatement}
                            missionStatementAuthor={WelcomeDataMissionStatementAuthor}
                            title1={WelcomeDataTitle1}
                            title2={WelcomeDataTitle2}
                            title3={WelcomeDataTitle3}
                            logo={WelcomeDataLogo}
                        />
                    </section>

                    {/* About Section */}
                    <section id="about" className="max-h-full min-h-screen bg-white py-8">
                        <AboutUsSection cards={AboutUsData} title={AboutUsTitle} description={AboutUsDescription} />
                    </section>

                    {/* Programs Section */}
                    <section id="programs" className="max-h-full min-h-screen bg-gray-50 py-16">
                        <ProgramSection programs={ProgramData} title={ProgramTitle} description={ProgramDescription} />
                    </section>

                    {/* Call to Action */}
                    <section className="min-h-screen bg-gradient-to-r from-red-500 to-blue-500 py-16 text-white">
                        <CallToActionSection
                            title={CallToActionTitle}
                            description={CallToActionDescription}
                            anchorLabel={CallToActionAnchorLabel}
                            href={CallToActionHref}
                        />
                    </section>

                    {/* Officials Section */}
                    <section id="officials" className="min-h-screen bg-white py-8 pb-16">
                        <OfficialsSection officials={OfficialsData} title={OfficialsTitle} description={OfficialsDescription} />
                    </section>

                    {/* News & Updates Section */}
                    <section id="news" className="max-h-full min-h-screen bg-gray-50 py-8">
                        <NewsAndUpdateSection newsItem={NewsAndUpdatesData} title={NewsAndUpdatesTitle} description={NewsAndUpdatesDescription} />
                    </section>

                    {/* Contact Section */}
                    <section id="contact" className="max-h-full min-h-screen bg-white py-16">
                        <ContactUsSection
                            links={SocialMediaLinks}
                            address={ContactUsAddress}
                            email={ContactUsEmail}
                            phone={ContactUsPhone}
                            officeHours={ContactUsOfficeHours}
                        />
                    </section>

                    {/* Footer */}
                    <CustomFooter links={FooterData} copyrightText={FooterCopyrightText} backgroundColor="bg-gray-800" />
                </WelcomeLayout>
            </div>
        </>
    );
}

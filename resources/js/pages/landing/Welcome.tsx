/* eslint-disable @typescript-eslint/no-unused-vars */
import MainLayout from '@/layouts/shared/WelcomeLayout';
import { type SharedData } from '@/types';
import { Head, usePage } from '@inertiajs/react';

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Head title="SK" />
            <div className="h-screen overflow-hidden bg-gray-100">
                <MainLayout>
                    <section className="flex h-screen w-full items-center justify-evenly">
                        <div className="flex w-full flex-col items-center justify-center gap-2 p-2">
                            <div className="flex w-full flex-col items-center">
                                <div className="flex w-full flex-col items-center justify-center">
                                    <h1 className="text-6xl font-bold">OFFICIAL WEBSITE OF THE </h1>
                                    <h1 className="text-8xl font-extrabold text-red-500">
                                        SANGUNIANG <span className="text-blue-500"> BALAGUNAN</span>
                                    </h1>
                                    <h1 className="text-5xl font-bold">OF BARANGAY BALAGUNAN</h1>
                                </div>
                            </div>
                            <div className="flex w-full items-center justify-center pt-2">
                                <p className="pr-11 pl-13 italic text-xl">
                                    "Transparency is not the same as looking into a clear glass. It’s the ability to be open about what’s behind the
                                    glass." <span className="not-italic"> —Simon Sinek</span>
                                </p>
                            </div>
                        </div>
                    </section>
                </MainLayout>
            </div>
        </>
    );
}

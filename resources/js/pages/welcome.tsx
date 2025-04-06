/* eslint-disable @typescript-eslint/no-unused-vars */
import MainLayout from '@/layouts/shared/WelcomeLayout';
import { type SharedData } from '@/types';
import { Head, usePage } from '@inertiajs/react';
import Background from '../../assets/background.jpg';

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Head title="SK" />
            <div className="h-screen overflow-hidden bg-gray-100">
                <MainLayout>
                    <section className="flex h-screen w-full items-center justify-center p-2">
                        <div className="mb-15 flex h-1/2 w-3xl flex-row items-center justify-center rounded-lg border-2 shadow-lg">
                            <div className="flex w-1/2 flex-col items-center justify-center gap-2">
                                <h1 className="text-center text-2xl font-bold">
                                    SANGGUNIANG KABATAAN <br /> OF <br /> BALAGUNAN
                                </h1>
                                <p className="italic">Guiding Growth Together</p>
                            </div>
                            <div
                                className="flex w-1/2 flex-col items-center justify-center"
                                style={{
                                    backgroundImage: `url(${Background})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    height: '100%',
                                    borderRadius: '0 10px 10px 0',
                                }}
                            ></div>
                        </div>
                    </section>
                </MainLayout>
            </div>
        </>
    );
}

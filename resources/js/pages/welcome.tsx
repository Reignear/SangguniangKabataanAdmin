/* eslint-disable @typescript-eslint/no-unused-vars */
import MainLayout from '@/layouts/shared/MainLayout';
import { type SharedData } from '@/types';
import { Head, usePage } from '@inertiajs/react';
import SKBackground from '../../assets/background.jpg';

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Head title="SK" />
            <div className="h-screen overflow-hidden bg-gray-700" >
                <MainLayout>
                    <section>
                        <div className="relative flex h-screen items-center justify-center bg-cover bg-center">
                            <div className="relative m-2 rounded-lg border-2 border-slate-300 bg-white/50 p-4 text-center shadow-lg sm:m-2 md:m-2">
                                <h1 className="text-4xl font-bold  ">Welcome to the Sanguniang Kabataan Portal</h1>
                                <p className="mt-4 text-lg ">Hello Admin</p>
                                <p className="text-md mt-2  ">This is your landing page.</p>
                            </div>
                        </div>
                    </section>
                </MainLayout>
            </div>
        </>
    );
}

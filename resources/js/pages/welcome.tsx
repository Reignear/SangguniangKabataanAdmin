/* eslint-disable @typescript-eslint/no-unused-vars */
import Header from '@/layouts/shared/HeaderLayout';
import { type SharedData } from '@/types';
import { Head, usePage } from '@inertiajs/react';
import MainLayout from '@/layouts/shared/MainLayout';

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Head />
            <MainLayout>
                <section>
                    asd
                </section>
            </MainLayout>
        </>
    );
}

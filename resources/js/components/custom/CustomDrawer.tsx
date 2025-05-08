import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer';

import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

interface DrawerDemoProps {
    title?: string;
    description?: string;
    trigger?: React.ReactNode;
    children?: React.ReactNode;
    submit?: React.ReactNode;
    cancel?: React.ReactNode;
    className?: string;
    image?: string;
    firstLetter?: string;
}

export default function DrawerDemo({ trigger, children, title, description, className, image, firstLetter }: DrawerDemoProps) {
    return (
        <Drawer>
            <DrawerTrigger>{trigger}</DrawerTrigger>
            <DrawerContent className="h-[450px] w-screen">
                <div className="flex w-full flex-col items-center justify-center gap-1">
                    <h1 className="mt-2">{title}</h1>
                    <p>{description}</p>
                </div>
                <div className="h-full w-full">
                    <div className="flex h-full w-full flex-row items-center justify-start gap-3">
                        <Avatar className="m-4 h-72 w-72">
                            <AvatarImage src={image}></AvatarImage>
                            <AvatarFallback>{firstLetter}</AvatarFallback>
                        </Avatar>

                        <div className={className}>{children}</div>
                    </div>
                </div>
            </DrawerContent>
        </Drawer>
    );
}

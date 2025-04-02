import { LucideIcon } from 'lucide-react';
import React from 'react';
interface CustomIconProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    icon?: LucideIcon | null;
    imgSrc?: string;
    alt?: string;
    className?: string;
}

export default function CustomIcon({ icon: LucidIcon, imgSrc, alt, className }: CustomIconProps) {
    if (LucidIcon) {
        return <LucidIcon className={className} />;
    }
    if (imgSrc) {
        return (
            <div className='flex items-center justify-center'>
                <img src={imgSrc} alt={alt} className={className} />
            </div>
        );
    }
    return null;
}

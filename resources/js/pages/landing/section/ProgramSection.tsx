import { ExternalLink } from 'lucide-react';
interface Program {
    title: string;
    description: string;
    link?: string;
    img?: string;
}
interface ProgramSectionProps {
    programs: Program[];
    title: string;
    description: string;
}
export default function ProgramSection({ programs, title, description }: ProgramSectionProps) {
    return (
        <div className="mx-auto h-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
                <h2 className="text-base font-bold tracking-tight text-gray-900 sm:text-4xl md:text-4xl">{title}</h2>
                <p className="mx-auto max-w-2xl text-[10px] text-gray-500 md:mt-4 md:text-xl">{description}</p>
            </div>

            <div className="hide-scrollbar my-2 flex h-full flex-col gap-6 overflow-x-auto rounded-lg p-4 pb-10 md:mt-8 md:flex-row md:p-10">
                {programs.map((program, index) => (
                    <div
                        key={index}
                        className="w-full overflow-hidden rounded-lg bg-white shadow-md transition-all duration-1000 ease-out hover:scale-105 hover:shadow-lg md:max-w-[calc(33.333%-1rem)] md:flex-shrink-0"
                    >
                        <div className="h-48 bg-gradient-to-r from-red-500 to-blue-500 p-4">
                            <div className="bg-opacity-20 flex h-full items-center justify-center rounded-md bg-white text-white">
                                {program.img ? (
                                    <img src={program.img} alt={program.title} className="h-full w-full object-cover" />
                                ) : (
                                    <span className="text-2xl font-bold">{program.title.charAt(0) || '?'}</span>
                                )}
                            </div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold">{program.title}</h3>
                            <p className="text-sm text-gray-600 md:text-base">{program.description}</p>

                            <div className="mt-4 flex items-center text-sm font-medium text-blue-500">
                                <span>Learn more</span>
                                <ExternalLink className="ml-1 h-4 w-4" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

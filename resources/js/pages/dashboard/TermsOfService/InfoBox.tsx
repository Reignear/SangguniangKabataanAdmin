import CustomDialog from '@/components/custom/CustomDialog';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Info, Plus, SquarePen } from 'lucide-react';
import React from 'react';
interface InfoBoxProps {
    officials: {
        id: string;
        name: string;
        position: string;
        totalVotes: number;
        precinct: string;
    }[];
}

export default function InfoBox({ officials }: InfoBoxProps) {
    const [temporaryOfficials, setTemporaryOfficials] = React.useState<InfoBoxProps['officials']>([]);
    const years = Array.from({ length: 2050 - 2020 + 1 }, (_, i) => 2020 + i);

    React.useEffect(() => {
        setTemporaryOfficials(officials);
    }, [officials]);

    const handleAddOfficial = (e: React.MouseEvent) => {
        e.preventDefault();
        setTemporaryOfficials([
            ...temporaryOfficials,
            {
                id: '',
                name: '',
                position: '',
                totalVotes: 0,
                precinct: '',
            },
        ]);
    };
    const handleRemoveOfficial = (index: number, e: React.MouseEvent) => {
        e.stopPropagation();
        e.preventDefault();
        setTemporaryOfficials(temporaryOfficials.filter((_, i) => i !== index));
    };
    const renderEditDialog = () => {
        if (temporaryOfficials.length === 0) {
            return (
                <div className="flex flex-col items-center justify-center p-4">
                    <p className="text-center text-gray-500">No officials available.</p>
                    <Button
                        variant="outline"
                        className="mt-2 w-full"
                        onClick={() => {
                            setTemporaryOfficials([{ id: Math.random().toString(), name: '', position: '', totalVotes: 0, precinct: '' }]);
                        }}
                    >
                        <Plus className="h-4 w-4" />
                        Add Official
                    </Button>
                </div>
            );
        }
        return (
            <form action="">
                <div className="grid grid-cols-1 gap-5">
                    {temporaryOfficials.map((official, index) => (
                        <Card className="p-2" key={official.id || index}>
                            <CardTitle className="flex flex-row items-center justify-between">
                                <h1 className='md:text-base text-[14px]'>Official #{index + 1} </h1>

                                <Button className='md:text-sm text-[12px] ' variant="destructive" onClick={(e) => handleRemoveOfficial(index, e)}>
                                    Remove
                                </Button>
                            </CardTitle>
                            <CardContent className="grid grid-cols-1 gap-2">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="flex flex-col gap-1">
                                        <Label className="text-[12px] md:text-base">Name:</Label>
                                        <Input className="text-[10px] md:text-base" defaultValue={official.name} />
                                    </div>

                                    <div className="flex flex-col gap-1">
                                        <Label className="text-[12px] md:text-base">Position:</Label>
                                        <Input className="text-[10px] md:text-base" defaultValue={official.position} />
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="flex flex-col gap-1">
                                        <Label className="text-[12px] md:text-base">Total Votes:</Label>
                                        <Input className="text-[10px] md:text-base" defaultValue={official.totalVotes} />
                                    </div>

                                    <div className="flex flex-col gap-1">
                                        <Label className="text-[12px] md:text-base">Precinct ID:</Label>
                                        <Input className="text-[10px] md:text-base" defaultValue={official.precinct} />
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                    <Button variant="outline" className="mt-2 w-full" onClick={handleAddOfficial}>
                        <Plus className="h-4 w-4" />
                        Add Official
                    </Button>
                </div>
            </form>
        );
    };
    const renderNewTermDialog = () => {
        return (
            <form action="" className="grid grid-cols-1 gap-2 md:grid-cols-2">
                <div>
                    <Label>Start Year</Label>
                    <Select>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select Start Year" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                {years.map((year) => (
                                    <SelectItem key={year} value={year.toString()}>
                                        {year}
                                    </SelectItem>
                                ))}
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
                <div>
                    <Label>End Year</Label>
                    <Select>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select Start Year" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                {years.map((year) => (
                                    <SelectItem key={year} value={year.toString()}>
                                        {year}
                                    </SelectItem>
                                ))}
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
            </form>
        );
    };
    return (
        <div className="grid grid-cols-1 gap-2">
            <div className="rounded-lg border bg-red-500 shadow-lg transition-all hover:cursor-pointer">
                <div className="flex flex-col items-center justify-between p-5 md:flex-row">
                    <div className="flex flex-row items-center gap-2">
                        <Info className="h-6 w-6 text-white" />
                        <div>
                            <h1 className="text-lg text-white">Officials </h1>
                            <h1 className="text-2xl font-bold text-white">SK Officials Directory</h1>
                        </div>
                    </div>
                    <div>
                        <CustomDialog
                            customWidth="md:min-w-[600px] min-w-[300px]"
                            trigger={
                                <Button className="w-36 transition-all hover:cursor-pointer" variant="outline">
                                    <SquarePen className="h-4 w-4" />
                                    Edit
                                </Button>
                            }
                            title="Edit Official"
                            description="Add, edit, or remove officials from the directory."
                            children={renderEditDialog()}
                            buttonVariant={'add'}
                            buttonName={'Save Changes'}
                        />
                    </div>
                </div>
            </div>
            <div className="rounded-lg border bg-red-500 shadow-lg transition-all hover:cursor-pointer">
                <div className="flex flex-row items-center justify-between p-5">
                    <div className="flex flex-row items-center gap-2">
                        <Info className="h-6 w-6 text-white" />
                        <div>
                            <h1 className="text-lg text-white">Officials </h1>
                            <h1 className="text-2xl font-bold text-white">Current Term Status {'2023-2025'}</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rounded-lg border bg-red-500 shadow-lg transition-all hover:cursor-pointer">
                <div className="flex flex-col items-center justify-between p-5 md:flex-row">
                    <div className="flex flex-row items-center gap-2">
                        <Info className="h-6 w-6 text-white" />
                        <div>
                            <h1 className="text-lg text-white">Officials </h1>
                            <h1 className="text-2xl font-bold text-white">Term Management</h1>
                        </div>
                    </div>

                    <CustomDialog
                        customWidth="min-w-[300px] "
                        trigger={
                            <Button className="w-36 transition-all hover:cursor-pointer" variant="outline">
                                <Plus className="h-4 w-4" />
                                New Term
                            </Button>
                        }
                        title="New Term"
                        description="Create a new term for the newly elected Sangguniang Kabataan officials."
                        buttonVariant={'add'}
                        buttonClassName="w-full"
                        buttonName={'Create Term'}
                        children={renderNewTermDialog()}
                    />
                </div>
            </div>
        </div>
    );
}

import CustomDialog from '@/components/custom/CustomDialog';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useForm } from '@inertiajs/react';
import { Info, LoaderCircle, Plus, SquarePen } from 'lucide-react';
import React, { FormEventHandler } from 'react';

interface Officials {
    official_id: string;
    official_firstname: string;
    official_lastname: string;
    official_middlename: string;
    official_position: string;
    official_vote: number;
    official_precinct: string;
}
interface ActiveTerm {
    term_year_start: string;
    term_year_end: string;
}
interface PageProps {
    Officials: Officials[];
    activeTerm: ActiveTerm;
}
type AddOfficialFormData = {
    official_id: string;
    official_firstname: string;
    official_lastname: string;
    official_middlename: string;
    official_position: string;
    official_vote: number;
    official_precinct: string;
};

type NewTermFormData = {
    term_year_start: string;
    term_year_end: string;
};

export default function InfoBox({ Officials, activeTerm }: PageProps) {
    const [temporaryOfficials, setTemporaryOfficials] = React.useState<PageProps['Officials']>([]);
    const years = Array.from({ length: 2050 - 2020 + 1 }, (_, i) => 2020 + i);
    const {
        data: termData,
        setData: setTermData,
        post: termPost,
        processing: termProcessing,
        reset: termReset,
    } = useForm<NewTermFormData>({
        term_year_start: '',
        term_year_end: '',
    });

    const {
        data: officialData,
        setData: setOfficialData,
        post: officialPost,
        processing: officialProcessing,
        reset: resetOfficialData,
    } = useForm<AddOfficialFormData>({
        official_id: '',
        official_firstname: '',
        official_lastname: '',
        official_middlename: '',
        official_position: '',
        official_vote: 0,
        official_precinct: '',
    });
    //new term
    const submitTerm: FormEventHandler = (e) => {
        e.preventDefault();
        termPost(route('dashboard.termsofservice.create.year'), {
            onFinish: () => termReset('term_year_start', 'term_year_end'),
        });
    };
    //add official form
    React.useEffect(() => {
        setTemporaryOfficials(Officials);
    }, [Officials]);

    const handleAddOfficial = (e: React.MouseEvent) => {
        e.preventDefault();
        setTemporaryOfficials([
            ...temporaryOfficials,
            {
                official_id: '',
                official_firstname: '',
                official_lastname: '',
                official_middlename: '',
                official_position: '',
                official_vote: 0,
                official_precinct: '',
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
                            setTemporaryOfficials([
                                {
                                    official_id: '',
                                    official_firstname: '',
                                    official_lastname: '',
                                    official_middlename: '',
                                    official_position: '',
                                    official_vote: 0,
                                    official_precinct: '',
                                },
                            ]);
                        }}
                    >
                        <Plus className="h-4 w-4" />
                        Add Official
                    </Button>
                </div>
            );
        }
        return (
            <form>
                <div className="grid grid-cols-1 gap-5">
                    {temporaryOfficials.map((official, index) => (
                        <Card className="p-2" key={official.official_id || index}>
                            <CardTitle className="flex flex-row items-center justify-between">
                                <h1 className="text-[14px] md:text-base">Official #{index + 1} </h1>

                                <Button className="text-[12px] md:text-sm" variant="destructive" onClick={(e) => handleRemoveOfficial(index, e)}>
                                    Remove
                                </Button>
                            </CardTitle>
                            <CardContent className="grid grid-cols-1 gap-2">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="flex flex-col gap-1">
                                        <Label className="text-[12px] md:text-base">Name:</Label>
                                        <Input
                                            className="text-[10px] md:text-sm"
                                            defaultValue={`${official.official_firstname}  ${official.official_middlename} ${official.official_lastname}`}
                                        />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <Label className="text-[12px] md:text-base">Position:</Label>
                                        <Input className="text-[10px] md:text-sm" defaultValue={official.official_position} />
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="flex flex-col gap-1">
                                        <Label className="text-[12px] md:text-base">Total Votes:</Label>
                                        <Input className="text-[10px] md:text-sm" defaultValue={official.official_vote} />
                                    </div>

                                    <div className="flex flex-col gap-1">
                                        <Label className="text-[12px] md:text-base">Precinct ID:</Label>
                                        <Input className="text-[10px] md:text-sm" defaultValue={official.official_precinct} />
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
            <form onSubmit={submitTerm} className="grid grid-cols-1 gap-2">
                <div className="grid grid-cols-2 gap-2">
                    <div>
                        <Label>Start Year</Label>
                        <Select
                            onValueChange={(value) => setTermData('term_year_start', value)}
                            value={termData.term_year_start}
                            disabled={termProcessing}
                        >
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
                        <Select
                            onValueChange={(value) => setTermData('term_year_end', value)}
                            value={termData.term_year_end}
                            disabled={termProcessing}
                        >
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select End Year" />
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
                </div>
                <div>
                    <Button type="submit" variant={'add'} className="w-full" disabled={termProcessing}>
                        {termProcessing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                        Create New Term
                    </Button>
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
                            <h1 className="text-2xl font-bold text-white">
                                Current Term Status {activeTerm.term_year_end} - {activeTerm.term_year_start}
                            </h1>
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
                        children={renderNewTermDialog()}
                    />
                </div>
            </div>
        </div>
    );
}

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

import { X } from 'lucide-react';

const CommitteeOptions = ['Good Governance', 'Youth Development', 'Environmental Protection'];
const OfficialSettings = () => {
    return (
        <div className="flex w-full flex-col gap-5">
            <Card>
                <CardContent className="flex flex-col gap-5">
                    <div>
                        <h1 className="text-2xl font-bold">Official Information</h1>
                        <p className="text-muted-foreground">Your Sangguniang Kabataan official details and responsibilities</p>
                    </div>
                    <div className="grid grid-cols-1 items-start gap-3">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex w-full flex-col items-start gap-1">
                                <Label htmlFor="position" className="text-sm">
                                    Position
                                </Label>
                                <Input id="position" className="w-full" />
                            </div>
                            <div className="flex w-full flex-col items-start gap-1">
                                <Label htmlFor="barangay" className="text-sm">
                                    Barangay
                                </Label>
                                <Input id="barangay" className="w-full" />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex w-full flex-col items-start gap-1">
                                <Label htmlFor="cityMunicipality" className="text-sm">
                                    City/ Municipality
                                </Label>
                                <Input id="cityMunicipality" className="w-full" />
                            </div>
                            <div className="flex w-full flex-col items-start gap-1">
                                <Label htmlFor="barangay" className="text-sm">
                                    Province
                                </Label>
                                <Input id="Province" className="w-full" />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex w-full flex-col items-start gap-1">
                                <Label htmlFor="termStart" className="text-sm">
                                    Term Start
                                </Label>
                                <Input id="termStart" className="w-full" />
                            </div>
                            <div className="flex w-full flex-col items-start gap-1">
                                <Label htmlFor="termEnd" className="text-sm">
                                    Term End
                                </Label>
                                <Input id="termEnd" className="w-full" />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 gap-2">
                            <div>
                                <h1 className="text-lg font-bold">Committee Membership</h1>
                                <div className="flex w-fit flex-row items-center rounded-lg border px-2">
                                    <p className=" ">Good Governance</p>
                                    <Button variant={'empty'} className="p-0 hover:cursor-pointer">
                                        <X className="h-4 w-4" />
                                    </Button>
                                </div>
                            </div>
                            <div className="">
                                <Select>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select assigned Committee" />
                                    </SelectTrigger>

                                    <SelectContent>
                                        <SelectGroup>
                                            {CommitteeOptions.map((option, index) => (
                                                <SelectItem key={index} value={option}>
                                                    {option}
                                                </SelectItem>
                                            ))}
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 items-start gap-4">
                            <div className="flex w-full flex-col items-start gap-1">
                                <Label htmlFor="firstName" className="text-sm">
                                    Official Biography
                                </Label>
                                <Textarea
                                    className="w-full"
                                    placeholder="Brief description of your background, achievements, and goals as an SK official..."
                                />
                            </div>
                        </div>
                        <div className='flex flex-row items-center justify-end gap-2'>
                            <Button variant={'outline'}>Cancel</Button>
                            <Button variant={'default'}>Save Changes</Button>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default OfficialSettings;

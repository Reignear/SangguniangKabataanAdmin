import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { usePage } from '@inertiajs/react';
import { useEffect, useState } from 'react';

interface Region {
    id: number;
    psgCode: string;
    regCode: string;
    regDesc: string;
}
interface Province {
    id: number;
    psgCode: string;
    provCode: string;
    provDesc: string;
    regCode: string;
}
interface cityMunicipality {
    id: number;
    psgCode: string;
    citymunDesc: string;
    citymunCode: string;
    provCode: string;
    regCode: string;
}

interface PageProps {
    [key: string]: string | object;
    addressData: {
        regions: Region[];
        provinces: Province[];
        cityMunicipality: cityMunicipality[];
    };
}

export default function AddressSettings() {
    const { addressData } = usePage<PageProps>().props;

    const [selectedRegion, setSelectedRegion] = useState('');
    const [selectedProvince, setSelectedProvince] = useState('');
    const [selectedCity, setSelectedCity] = useState('');

    const [regions] = useState<Region[]>(addressData?.regions || []);
    const [provinces, setProvinces] = useState<Province[]>([]);
    const [citiesMunicipality, setCityMunicipality] = useState<cityMunicipality[]>([]);

    useEffect(() => {
        if (!selectedRegion) {
            setProvinces([]);
            return;
        }
        const filteredProvinces = addressData.provinces.filter((province) => province.regCode === selectedRegion);
        setProvinces(filteredProvinces);
        setSelectedProvince('');
    }, [selectedRegion, addressData.provinces]);

    useEffect(() => {
        if (!selectedProvince) {
            setCityMunicipality([]);
            return;
        }
        const filteredCities = addressData.cityMunicipality.filter((city) => city.provCode === selectedProvince);
        setCityMunicipality(filteredCities);
        setSelectedCity('');
    }, [selectedProvince, addressData.cityMunicipality]);
    const handleRegionChange = (value: string) => {
        setSelectedRegion(value);
    };
    const handleProvinceChange = (value: string) => {
        setSelectedProvince(value);
    };
    const handleCityChange = (value: string) => {
        setSelectedCity(value);
    };

    return (
        <div>
            <Card>
                <CardContent>
                    <form className="flex w-full flex-col items-start gap-5">
                        <div className="flex flex-col items-start gap-1">
                            <h1 className="text-2xl font-bold">Address Information</h1>
                            <p className="text-muted-foreground">Update your address information here</p>
                        </div>

                        <div className="grid w-full grid-cols-1 items-start gap-3">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="flex w-full flex-col items-start gap-1">
                                    <Label htmlFor="region" className="text-sm">
                                        Region
                                    </Label>
                                    <Select value={selectedRegion} onValueChange={handleRegionChange}>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select a region" />
                                        </SelectTrigger>
                                        <SelectContent className="max-h-80">
                                            <SelectGroup>
                                                {regions &&
                                                    regions.length > 0 &&
                                                    regions.map((region) => (
                                                        <SelectItem key={region.regCode} value={region.regCode}>
                                                            {region.regDesc}
                                                        </SelectItem>
                                                    ))}
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="flex w-full flex-col items-start gap-1">
                                    <Label htmlFor="province" className="text-sm">
                                        Province
                                    </Label>
                                    <Select value={selectedProvince} onValueChange={handleProvinceChange} disabled={!selectedRegion}>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select a province" />
                                        </SelectTrigger>
                                        <SelectContent className="max-h-80">
                                            <SelectGroup>
                                                {provinces &&
                                                    provinces.length > 0 &&
                                                    provinces.map((province) => (
                                                        <SelectItem key={province.provCode} value={province.provCode}>
                                                            {province.provDesc}
                                                        </SelectItem>
                                                    ))}
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="flex w-full flex-col items-start gap-1">
                                    <Label htmlFor="city" className="text-sm">
                                        City / Municipality
                                    </Label>
                                    <Select value={selectedCity} onValueChange={handleCityChange} disabled={!selectedProvince}>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select a City or Municipality" />
                                        </SelectTrigger>
                                        <SelectContent className="max-h-80">
                                            <SelectGroup>
                                                {citiesMunicipality &&
                                                    citiesMunicipality.length > 0 &&
                                                    citiesMunicipality.map((city) => (
                                                        <SelectItem key={city.citymunCode} value={city.citymunCode}>
                                                            {city.citymunDesc}
                                                        </SelectItem>
                                                    ))}
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="flex w-full flex-col items-start gap-1">
                                    <Label htmlFor="barangay" className="text-sm">
                                        Barangay
                                    </Label>
                                    <Input id="barangay" className="w-full" disabled={!selectedCity} />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="flex w-full flex-col items-start gap-1">
                                    <Label htmlFor="purok" className="text-sm">
                                        Purok
                                    </Label>
                                    <Input id="purok" className="w-full" />
                                </div>

                                <div className="flex w-full flex-col items-start gap-1">
                                    <Label htmlFor="street" className="text-sm">
                                        Street
                                    </Label>
                                    <Input id="street" className="w-full" />
                                </div>
                            </div>

                            <div className="flex flex-row">
                                <div className="flex w-full flex-col items-start gap-1">
                                    <Label htmlFor="zipcode" className="text-sm">
                                        Zipcode
                                    </Label>
                                    <Input id="zipcode" className="w-full" />
                                </div>
                            </div>
                        </div>

                        <div className="flex w-full flex-row items-center justify-end gap-2">
                            <Button variant="outline">Cancel</Button>
                            <Button type="submit">Save Changes</Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}

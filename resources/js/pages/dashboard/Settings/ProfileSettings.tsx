import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

import { Camera } from 'lucide-react';

const ProfileSettings = () => {
    return (
        <div className="flex w-full flex-col gap-5">
            <Card>
                <CardContent className="flex flex-col items-start gap-5">
                    <div className="flex flex-col items-start gap-1">
                        <h1 className="text-2xl font-bold">Profile Information</h1>
                        <p className="text-muted-foreground">Manage your profile information and settings</p>
                    </div>
                    <div className="flex flex-row items-start gap-2">
                        <div className="relative">
                            <Avatar className="h-24 w-24">
                                <AvatarImage src={''} />
                                <AvatarFallback>{'SK'}</AvatarFallback>
                            </Avatar>
                            <label
                                htmlFor="image-upload"
                                className="bg-primary text-primary-foreground hover:bg-primary/90 absolute -right-0 -bottom-0 cursor-pointer rounded-full p-2 transition-colors"
                            >
                                <Camera className="h-4 w-4" />
                                <input type="file" accept="image/*" id="image-upload" className="sr-only" />
                            </label>
                        </div>
                        <div className="flex flex-col items-start justify-start">
                            <div>
                                <h1 className="text-xl font-bold">Profile Photo</h1>
                                <p className="text-muted-foreground text-sm">
                                    Upload a professional photo for your SK profile. Recommended size: 400x400px
                                </p>
                            </div>
                            <div className="mt-2 flex flex-row gap-2">
                                <Button className="w-32" variant="outline">
                                    Remove
                                </Button>
                                <Button className="w-32" variant="default">
                                    Change Photo
                                </Button>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
            <Card>
                <CardContent className="flex w-full flex-col items-start gap-5">
                    <div className="flex flex-col items-start gap-1">
                        <h1 className="text-2xl font-bold">Personal Information</h1>
                        <p className="text-muted-foreground">Update your profile picture and display information</p>
                    </div>
                    <div className="grid w-full grid-cols-1 items-start gap-3">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex w-full flex-col items-start gap-1">
                                <Label htmlFor="firstName" className="text-sm">
                                    First Name
                                </Label>
                                <Input id="firstName" className="w-full" />
                            </div>
                            <div className="flex w-full flex-col items-start gap-1">
                                <Label htmlFor="lastName" className="text-sm">
                                    Last Name
                                </Label>
                                <Input id="lastName" className="w-full" />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex w-full flex-col items-start gap-1">
                                <Label htmlFor="middleName" className="text-sm">
                                    Middle Name
                                </Label>
                                <Input id="middleName" className="w-full" />
                            </div>
                            <div className="flex w-full flex-col items-start gap-1">
                                <Label htmlFor="suffix" className="text-sm">
                                    Suffix
                                </Label>
                                <Input id="suffix" className="w-full" />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex w-full flex-col items-start gap-1">
                                <Label htmlFor="birthdate" className="text-sm">
                                    Birthdate
                                </Label>
                                <Input id="birthdate" className="w-full" />
                            </div>
                            <div className="flex w-full flex-col items-start gap-1">
                                <Label htmlFor="gender" className="text-sm">
                                    Gender
                                </Label>
                                <Input id="gender" className="w-full" />
                            </div>
                        </div>
                        <div className="flex flex-row">
                            <div className="flex w-full flex-col items-start gap-1">
                                <Label htmlFor="firstName" className="text-sm">
                                    Complete Address
                                </Label>
                                <Textarea className="w-full" />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex w-full flex-col items-start gap-1">
                                <Label htmlFor="phone" className="text-sm">
                                    Phone Number
                                </Label>
                                <Input id="phone" className="w-full" />
                            </div>
                            <div className="flex w-full flex-col items-start gap-1">
                                <Label htmlFor="email" className="text-sm">
                                    Email Address
                                </Label>
                                <Input type="email" id="email" className="w-full" />
                            </div>
                        </div>
                    </div>
                    <div className="flex w-full flex-row items-center justify-end gap-2">
                        <Button variant={'outline'}>Cancel</Button>
                        <Button>Save Changes</Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default ProfileSettings;

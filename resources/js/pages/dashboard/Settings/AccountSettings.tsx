import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const AccountSettings = () => {
    return (
        <div className="flex w-full flex-col gap-4">
            <Card>
                <CardContent className="flex flex-col gap-4">
                    <div className="flex flex-col">
                        <h1 className="text-2xl font-bold">Account Settings</h1>
                        <p className="text-muted-foreground">Manage your login credentials and security settings</p>
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                        <div className="flex w-full flex-col items-start gap-1">
                            <Label htmlFor="username" className="text-sm">
                                Username:
                            </Label>
                            <Input id="username" className="w-full" />
                        </div>
                        <div className="flex w-full flex-col items-start gap-1">
                            <Label htmlFor="password" className="text-sm">
                                Password:
                            </Label>
                            <Input id="password" type="password" className="w-full" />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex w-full flex-col items-start gap-1">
                            <Label htmlFor="newPassword" className="text-sm">
                                New Password:
                            </Label>
                            <Input id="newPassword" type="password" className="w-full" />
                        </div>
                        <div className="flex w-full flex-col items-start gap-1">
                            <Label htmlFor="confirmPassword" className="text-sm">
                                Confirm Password:
                            </Label>
                            <Input id="confirmPassword" type="password" className="w-full" />
                        </div>
                    </div>
                    <div className="flex flex-row items-center justify-end gap-2">
                        <Button variant={'outline'}>Cancel</Button>
                        <Button variant={'default'}>Save Changes</Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default AccountSettings;

import { Card, CardContent } from '@/components/ui/card';
import { Avatar } from '@radix-ui/react-avatar';

const ProfileSettings = () => {
    return (
        <div className="flex w-full flex-col">
            <Card>
                <CardContent className="flex flex-col items-start gap-4">
                    <div className="flex flex-col items-start gap-1">
                        <h1 className="text-2xl font-bold">Profile Information</h1>
                        <p className="text-muted-foreground">Manage your profile information and settings</p>
                    </div>
                    <div className="flex flex-row items-start gap-2">
                        <div>
                            <Avatar className="h-5 w-5 border p-5 rounded-full"></Avatar>
                        </div>
                        <div></div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default ProfileSettings;

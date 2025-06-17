import { Button } from '@/components/ui/button';
import DashboardLayout from '@/layouts/shared/DashboardLayout';
import { MonitorCog, Shield, User } from 'lucide-react';
import { useState } from 'react';
import AccountSettings from './Settings/AccountSettings';
import OfficialSettings from './Settings/OfficialSettings';
import ProfileSettings from './Settings/ProfileSettings';

const settingsButtons = [
    { id: 1, name: 'Profile Information', icon: User },
    { id: 2, name: 'Official Information', icon: Shield },
    { id: 3, name: 'Account Information', icon: MonitorCog },
];
const Settings = () => {
    const [activeCategory, setActiveCategory] = useState('Profile Information');
    return (
        <DashboardLayout className="overflow-hidden" breadCrumbTitle="Settings">
            <div className="h-full w-full">
                <div className="flex w-full flex-col gap-5">
                    <div className="flex flex-col">
                        <h1 className="text-3xl font-bold">Settings</h1>
                        <p className="text-muted-foreground">Manage your account and official information</p>
                    </div>
                    <div className="grid w-full grid-cols-3 gap-2 rounded-sm border p-1">
                        {settingsButtons.map((button) => (
                            <Button
                                key={button.id}
                                variant={'empty'}
                                className={`rounded-sm border transition-all ${activeCategory === button.name ? 'bg-blue-500 text-white' : 'text-muted-foreground'}`}
                                onClick={() => setActiveCategory(button.name)}
                            >
                                <button.icon className="mr-2 h-4 w-4" />
                                {button.name}
                            </Button>
                        ))}
                    </div>
                    <div className="w-full">
                        {activeCategory === 'Profile Information' && <ProfileSettings />}
                        {activeCategory === 'Official Information' && <OfficialSettings />}
                        {activeCategory === 'Account Information' && <AccountSettings />}
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default Settings;

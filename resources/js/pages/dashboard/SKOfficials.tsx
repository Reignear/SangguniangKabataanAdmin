import CustomDrawer from '@/components/custom/CustomDrawer';
import CustomForm from '@/components/custom/CustomForm';
import { Avatar } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import DashboardLayout from '@/layouts/shared/DashboardLayout';
import { Mail, Phone, User } from 'lucide-react';
import Hisoka from '../../../assets/hisoka.jpg';
import { OfficerDrawerDataFields, OfficerDrawerDataFields2, OfficerDrawerDataFields3 } from '../../../data/OfficerDrawerDataFields';
const OfficialData = [
    {
        id: 1,
        OfficialAvatar: Hisoka,
        OfficialName: 'Reignear Magallanes',
        OfficialPosition: 'SK Councilor',
        OfficialEmail: 'reignearm@gmail.com',
        OfficialPhoneNumber: '09075288220',
        OfficialNickname: 'Ebyong',
    },
    {
        id: 2,
        OfficialAvatar: Hisoka,
        OfficialName: 'Reignear Magallanes',
        OfficialPosition: 'SK Councilor',
        OfficialEmail: 'reignearm@gmail.com',
        OfficialPhoneNumber: '09075288220',
        OfficialNickname: 'Ebyong',
    },
    {
        id: 3,
        OfficialAvatar: Hisoka,
        OfficialName: 'Reignear Magallanes',
        OfficialPosition: 'SK Councilor',
        OfficialEmail: 'reignearm@gmail.com',
        OfficialPhoneNumber: '09075288220',
        OfficialNickname: 'Ebyong',
    },
    {
        id: 4,
        OfficialAvatar: Hisoka,
        OfficialName: 'Reignear Magallanes',
        OfficialPosition: 'SK Councilor',
        OfficialEmail: 'reignearm@gmail.com',
        OfficialPhoneNumber: '09075288220',
        OfficialNickname: 'Ebyong',
    },
    {
        id: 5,
        OfficialAvatar: Hisoka,
        OfficialName: 'Reignear Magallanes',
        OfficialPosition: 'SK Councilor',
        OfficialEmail: 'reignearm@gmail.com',
        OfficialPhoneNumber: '09075288220',
        OfficialNickname: 'Ebyong',
    },
    {
        id: 6,
        OfficialAvatar: Hisoka,
        OfficialName: 'Reignear Magallanes',
        OfficialPosition: 'SK Councilor',
        OfficialEmail: 'reignearm@gmail.com',
        OfficialPhoneNumber: '09075288220',
        OfficialNickname: 'Ebyong',
    },
    {
        id: 7,
        OfficialAvatar: Hisoka,
        OfficialName: 'Reignear Tirador Magallanes',
        OfficialPosition: 'SK Councilor',
        OfficialEmail: 'reignearm@gmail.com',
        OfficialPhoneNumber: '09075288220',
        OfficialNickname: 'Ebyong',
    },
];

const renderFormFields = () => {
    return (
        <div className="grid w-full grid-cols-3 gap-5">
            <div className="grid-cols grid gap-5">
                <CustomForm fields={OfficerDrawerDataFields} className="grid w-full grid-rows-5 gap-2" />
            </div>
            <div className="grid-cols grid gap-5">
                <CustomForm fields={OfficerDrawerDataFields2} className="grid grid-rows-5 gap-2" />
            </div>
            <div className="grid-cols grid gap-5">
                <CustomForm fields={OfficerDrawerDataFields3} className="grid grid-rows-5 gap-2" />
            </div>
        </div>
    );
};

export default function SKOfficials() {
    return (
        <DashboardLayout>
            <div className="h-screen">
                <div className="grid w-full grid-cols-1 gap-4 p-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
                    {OfficialData.map((official) => (
                        <CustomDrawer
                            key={official.id}
                            trigger={
                                <div className="bg-muted/50 flex aspect-video flex-col gap-2 rounded-xl border-1 shadow-lg transition-transform duration-300 hover:scale-102 hover:cursor-pointer sm:min-w-100">
                                    <div className="flex flex-row justify-start gap-3 rounded-t-xl bg-red-300 p-4">
                                        <Avatar className="h-15 w-15">
                                            <img src={official.OfficialAvatar} alt="image" />
                                        </Avatar>
                                        <div>
                                            <h1 className="flex justify-start text-lg">{official.OfficialName}</h1>
                                            <p className="flex justify-start">{official.OfficialPosition}</p>
                                        </div>
                                    </div>
                                    <Separator />
                                    <div className="flex flex-col justify-between gap-2 p-4">
                                        <div className="flex flex-row items-center gap-5">
                                            <Mail className="h-5 w-5 text-gray-600" />
                                            <h2>{official.OfficialEmail}</h2>
                                        </div>
                                        <div className="flex flex-row items-center gap-5">
                                            <Phone className="h-5 w-5 text-gray-600" />
                                            <h2>{official.OfficialPhoneNumber}</h2>
                                        </div>
                                        <div className="flex flex-row items-center gap-5">
                                            <User className="h-5 w-5 text-gray-500" />
                                            <h2>{official.OfficialNickname}</h2>
                                        </div>
                                    </div>
                                </div>
                            }
                            className="w-full p-4"
                            children={renderFormFields()}
                        />
                    ))}
                </div>
            </div>
        </DashboardLayout>
    );
}

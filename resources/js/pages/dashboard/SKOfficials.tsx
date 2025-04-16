import { Avatar } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import DashboardLayout from '@/layouts/shared/DashboardLayout';
import Email from '../../../assets/email.png';
import Hisoka from '../../../assets/hisoka.jpg';
import Person from '../../../assets/person.png';
import Telephone from '../../../assets/telephone.png';

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
        OfficialName: 'Reignear Magallanes',
        OfficialPosition: 'SK Councilor',
        OfficialEmail: 'reignearm@gmail.com',
        OfficialPhoneNumber: '09075288220',
        OfficialNickname: 'Ebyong',
    },
];

export default function SKOfficials() {
    return (
        <DashboardLayout>
            <div className="h-screen overflow-y-auto">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 p-2">
                    {OfficialData.map((official) => (
                        <div
                            key={official.id}
                            className="bg-muted/50 flex aspect-video min-w-80 flex-col gap-y-2 rounded-xl border-1 shadow-lg transition-transform duration-300 hover:scale-102 hover:cursor-pointer"
                        >
                            <div className="flex flex-row justify-start gap-3 rounded-t-xl bg-red-300 p-4">
                                <Avatar className="h-15 w-15">
                                    <img src={official.OfficialAvatar} alt="image" />
                                </Avatar>
                                <div>
                                    <h1 className="text-lg">{official.OfficialName}</h1>
                                    <p>{official.OfficialPosition}</p>
                                </div>
                            </div>
                            <Separator />
                            <div className="flex flex-col justify-between gap-2 p-4">
                                <div className="flex flex-row items-center gap-5">
                                    <img src={Email} className="h-5 w-5" alt="email" />
                                    <h2>{official.OfficialEmail}</h2>
                                </div>
                                <div className="flex flex-row items-center gap-5">
                                    <img src={Telephone} className="h-5 w-5" alt="" />
                                    <h2>{official.OfficialPhoneNumber}</h2>
                                </div>
                                <div className="flex flex-row items-center gap-5">
                                    <img src={Person} className="h-5 w-5" alt="" />
                                    <h2>{official.OfficialNickname}</h2>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </DashboardLayout>
    );
}

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Download, EllipsisVertical, Eye, FileText, FolderArchive, Images, Minus, Plus, Upload } from 'lucide-react';
import { JSX, useState } from 'react';
export interface SelectedCard {
    title: string;
    description: string;
    fileCount: number;
    attachments?: {
        attachmentTitle: string;
        attachmentType: string;
        attachmentSpecifiedType: string;
        attachmentSize: string;
        attachmentDate: string;
        attachmentUploader: string;
    }[];
}
export default function AttachmentField({ selectedCard }: { selectedCard: SelectedCard | null }) {
    const attachmentTypeButtons = ['All', 'Documents', 'Images', 'Zipped'];
    const [activeAttachmentType, setActiveAttachmentType] = useState('All');

    // Filter attachments based on the selected card and active attachment type
    const filterAttachments = selectedCard?.attachments
        ?.sort((a, b) => a.attachmentDate.localeCompare(b.attachmentDate))
        .filter((attachment) => {
            const matchType = activeAttachmentType === 'All' || attachment.attachmentType === activeAttachmentType;
            return matchType;
        });
    //Dynamic Icon based on attachment type
    const getAttachmentIcon = (type: string) => {
        const icons: Record<string, JSX.Element> = {
            Documents: <FileText className="h-5 w-5" />,
            Images: <Images className="h-5 w-5" />,
            Zipped: <FolderArchive className="h-5 w-5" />,
        };
        return icons[type] || <FileText className="h-5 w-5" />;
    };

    if (!selectedCard) {
        return (
            <Card>
                <div className="text-muted-foreground text-center">Please select a card to view details.</div>
            </Card>
        );
    }
    return (
        <Card>
            <CardContent className="flex flex-col gap-4 p-4 pt-0 pb-0">
                <div className="flex flex-row items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold">{selectedCard.title}</h1>
                        <p className="text-muted-foreground text-base">{selectedCard.description}</p>
                    </div>
                    <div className="rounded-full border bg-gray-100 p-2 pt-1 pb-1 text-sm">
                        <p>
                            {selectedCard.fileCount}
                            <span> files</span>
                        </p>
                    </div>
                </div>
                <div
                    className={`relative flex flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed p-8 text-center transition-colors hover:cursor-pointer hover:border-gray-400`}
                >
                    <input
                        type="file"
                        multiple
                        className="absolute inset-0 h-full w-full opacity-0 hover:cursor-pointer"
                        accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.txt,.jpg,.jpeg,.png,.gif,.zip,.rar"
                    />
                    <div className="rounded-full bg-gray-100 p-5">
                        <Upload className="text-muted-foreground h-10 w-10" />
                    </div>
                    <div className="flex flex-col items-center justify-center gap-2">
                        <h1 className="text-xl font-medium">Drop files here or click to upload </h1>
                        <p className="text-muted-foreground">Add attachments to {selectedCard.title}</p>
                        <div>
                            <Button variant="empty" className="border">
                                <Plus />
                                Choose files
                            </Button>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className="text-muted-foreground">List of Attachments</h1>
                    <div className="mt-1 grid grid-cols-4 gap-2 rounded-md border p-1">
                        {attachmentTypeButtons.map((button) => (
                            <Button
                                key={button}
                                value={activeAttachmentType}
                                variant="empty"
                                className={`text-muted-foreground ${activeAttachmentType === button ? 'bg-blue-500 text-white' : ''}`}
                                onClick={() => setActiveAttachmentType(button)}
                            >
                                {button}
                            </Button>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    {filterAttachments?.map((attachment, index) => (
                        <Card className="shadow-none" key={index}>
                            <CardContent className="flex flex-row items-center justify-between">
                                <div className="flex flex-row items-center gap-5">
                                    <div>{getAttachmentIcon(attachment.attachmentType)}</div>
                                    <div className="flex flex-col gap-2">
                                        <h1 className="text-base">{attachment.attachmentTitle}</h1>
                                        <div className="flex flex-row items-center gap-2">
                                            <p className="black w-fit rounded-full border pr-2 pl-2 text-sm font-medium">
                                                {attachment.attachmentSpecifiedType}
                                            </p>

                                            <Minus />

                                            <p className="text-sm">{attachment.attachmentSize}</p>
                                            <Minus />
                                            <p className="text-sm">{attachment.attachmentUploader}</p>
                                            <Minus />
                                            <p className="text-sm">{attachment.attachmentDate}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-row items-center gap-2">
                                    <Button variant="empty" className="hover:cursor-pointer">
                                        <Eye />
                                    </Button>
                                    <Button variant="empty" className="hover:cursor-pointer">
                                        <Download />
                                    </Button>
                                    <Button variant="empty" className="hover:cursor-pointer">
                                        <EllipsisVertical />
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                    {filterAttachments?.length === 0 && <div className="text-muted-foreground text-center">No attachments found for this type.</div>}
                </div>
            </CardContent>
        </Card>
    );
}

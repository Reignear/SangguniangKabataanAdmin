import { Toast, toast } from 'react-hot-toast';
interface CustomToastProps {
    t: Toast;
    type: 'Success!' | 'Error!' | 'Info!';
    message: string;
}
export default function CustomToast({ t, message, type }: CustomToastProps) {
    return (
        <div
            className={`${
                t.visible ? 'animate-enter' : 'animate-leave'
            } flex items-center gap-2 rounded-lg border-l-4 border-red-500 bg-white p-4 shadow-lg`}
        >
            <div className="rounded-full bg-red-100 p-1">
                <svg className="red-green-600 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
            </div>
            <div>
                <h3 className="font-medium text-gray-900">{type}</h3>
                <p className="text-sm text-gray-600">{message}</p>
            </div>
            <button onClick={() => toast.dismiss(t.id)} className="ml-4 text-gray-400 hover:text-gray-600">
                ×
            </button>
        </div>
    );
}

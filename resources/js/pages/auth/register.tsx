/* eslint-disable react-hooks/rules-of-hooks */
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useForm } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
import { FormEventHandler } from 'react';

interface RegistrationForm {
    [key: string]: string | number;
    official_firstname: string;
    official_middlename: string;
    official_lastname: string;
    official_position: string;
    official_vote: number;
    official_precinct: string;
    user_email: string;
    user_name: string;
    user_password: string;
    user_password_confirmation: string;
}

export default function register() {
    const { data, setData, post, processing, errors, reset } = useForm<RegistrationForm>({
        official_firstname: '',
        official_middlename: '',
        official_lastname: '',
        official_position: '',
        official_vote: 0,
        official_precinct: '',
        user_email: '',
        user_name: '',
        user_password: '',
        user_password_confirmation: '',
    });

    const onSubmit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('register.store'), {
            onSuccess: () => {
                console.log('Registration successful');
                reset();
            },
            onError: (error) => {
                console.error('Registration failed:', error);
            },
        });
    };
    return (
        <div className="h-screen w-full p-2">
            <div className="flex h-full w-full items-center justify-center">
                <Card className="w-xl">
                    <form onSubmit={onSubmit}>
                        <CardContent className="flex w-full flex-col gap-y-2">
                            <div className="flex w-full justify-center">
                                <Label className="text-2xl font-semibold">Register</Label>
                            </div>

                            <div className="flex w-full flex-col items-center justify-center gap-4 md:flex-row">
                                <div className="flex w-64 flex-col gap-2">
                                    <Label>Firstname</Label>
                                    <Input
                                        type="text"
                                        value={data.official_firstname}
                                        onChange={(e) => setData('official_firstname', e.target.value)}
                                        required
                                        tabIndex={1}
                                    />
                                    <p className="text-[11px] text-red-500">{errors.official_firstname}</p>
                                </div>
                                <div className="flex w-64 flex-col gap-2">
                                    <Label>Middlename</Label>
                                    <Input
                                        type="text"
                                        value={data.official_middlename}
                                        onChange={(e) => setData('official_middlename', e.target.value)}
                                        required
                                        tabIndex={2}
                                    />
                                    <p className="text-[11px] text-red-500">{errors.official_middlename}</p>
                                </div>
                            </div>
                            <div className="flex w-full flex-col items-center justify-center gap-4 md:flex-row">
                                <div className="flex w-64 flex-col gap-2">
                                    <Label>Lastname</Label>
                                    <Input
                                        type="text"
                                        value={data.official_lastname}
                                        onChange={(e) => setData('official_lastname', e.target.value)}
                                        required
                                        tabIndex={3}
                                    />
                                    <p className="text-[11px] text-red-500">{errors.official_lastname}</p>
                                </div>
                                <div className="flex w-64 flex-col gap-2">
                                    <Label>Position</Label>
                                    <Input
                                        type="text"
                                        value={data.official_position}
                                        onChange={(e) => setData('official_position', e.target.value)}
                                        required
                                        tabIndex={4}
                                    />
                                    <p className="text-[11px] text-red-500">{errors.official_position}</p>
                                </div>
                            </div>

                            <div className="flex w-full flex-col items-center justify-center gap-4 md:flex-row">
                                <div className="flex w-64 flex-col gap-2">
                                    <Label>Official Vote</Label>
                                    <Input
                                        type="number"
                                        value={data.official_vote}
                                        onChange={(e) => setData('official_vote', Number(e.target.value))}
                                        required
                                        tabIndex={5}
                                    />
                                    <p className="text-[11px] text-red-500">{errors.official_vote}</p>
                                </div>
                                <div className="flex w-64 flex-col gap-2">
                                    <Label>Precint ID</Label>
                                    <Input
                                        type="string"
                                        value={data.official_precinct}
                                        onChange={(e) => setData('official_precinct', e.target.value)}
                                        required
                                        tabIndex={6}
                                    />
                                    <p className="text-[11px] text-red-500">{errors.official_precinct}</p>
                                </div>
                            </div>
                            <div className="flex w-full flex-col items-center justify-center gap-4 md:flex-row">
                                <div className="flex w-64 flex-col gap-2">
                                    <Label>User name</Label>
                                    <Input
                                        type="text"
                                        value={data.user_name}
                                        onChange={(e) => setData('user_name', e.target.value)}
                                        required
                                        tabIndex={7}
                                    />
                                    <p className="text-[11px] text-red-500">{errors.user_name}</p>
                                </div>
                                <div className="flex w-64 flex-col gap-2">
                                    <Label>Email</Label>
                                    <Input
                                        type="email"
                                        value={data.user_email}
                                        onChange={(e) => setData('user_email', e.target.value)}
                                        required
                                        tabIndex={8}
                                    />
                                    <p className="text-[11px] text-red-500">{errors.user_email}</p>
                                </div>
                            </div>
                            <div className="flex w-full flex-col items-center justify-center gap-4 md:flex-row">
                                <div className="flex w-64 flex-col gap-2">
                                    <Label>Password</Label>
                                    <Input
                                        type="password"
                                        value={data.user_password}
                                        onChange={(e) => setData('user_password', e.target.value)}
                                        required
                                        tabIndex={9}
                                    />
                                    <p className="text-[11px] text-red-500">{errors.user_password}</p>
                                </div>
                                <div className="flex w-64 flex-col gap-2">
                                    <Label>Confirm Password</Label>
                                    <Input
                                        type="password"
                                        value={data.user_password_confirmation}
                                        onChange={(e) => setData('user_password_confirmation', e.target.value)}
                                        required
                                        tabIndex={10}
                                    />
                                    <p className="text-[11px] text-red-500">{errors.user_password_confirmation}</p>
                                </div>
                            </div>
                            <div className="flex w-full flex-row items-center justify-center gap-4">
                                <Button variant="customLogoBased" className="w-3xs md:w-xl" type="submit" disabled={processing}>
                                    {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                                    Submit
                                </Button>
                            </div>
                            <div className="flex w-full justify-center">
                                <p className="text-sm">
                                    Already have an account?{' '}
                                    <span className="underline">
                                        <a href={route('login')}>Click here</a>
                                    </span>
                                </p>
                            </div>
                        </CardContent>
                    </form>
                </Card>
            </div>
        </div>
    );
}

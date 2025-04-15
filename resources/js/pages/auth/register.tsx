/* eslint-disable react-hooks/rules-of-hooks */
import { CustomCalendar } from '@/components/custom/CustomCalendar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { SubmitHandler, useForm } from 'react-hook-form';

interface RegistrationForm {
    firstname: string;
    middlename: string;
    lastname: string;
    suffix: string;
    gender: string;
    birthdate: string;
    sk_position: string;
    email: string;
    contach_number: string;
    username: string;
    password: string;
    confirm_password: string;
}

export default function register() {
    const { register, handleSubmit, watch, setValue } = useForm<RegistrationForm>();
    const onSubmit: SubmitHandler<RegistrationForm> = (data) => console.log(data);
    const birthdate = watch('birthdate');
    return (
        <div className="h-screen w-full p-2">
            <div className="flex h-full w-full items-center justify-center">
                <Card className="w-xl">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <CardContent className="flex w-full flex-col gap-y-4">
                            <div className="flex w-full justify-center">
                                <Label className="text-2xl font-semibold">Register</Label>
                            </div>

                            <div className="flex w-full flex-col items-center justify-center gap-4 md:flex-row">
                                <div className="flex w-64 flex-col gap-2">
                                    <Label>Firstname</Label>
                                    <Input type="text" {...register('firstname', { required: true })} />
                                </div>
                                <div className="flex w-64 flex-col gap-2">
                                    <Label>Middlename</Label>
                                    <Input type="text" {...register('middlename', { required: true })} />
                                </div>
                            </div>
                            <div className="flex w-full flex-col items-center justify-center gap-4 md:flex-row">
                                <div className="flex w-64 flex-col gap-2">
                                    <Label>Lastname</Label>
                                    <Input type="text" {...register('lastname', { required: true })} />
                                </div>
                                <div className="flex w-64 flex-col gap-2">
                                    <Label>Suffix</Label>
                                    <Input type="text" {...register('suffix', { required: true })} />
                                </div>
                            </div>
                            <div className="flex w-full flex-col items-center justify-center gap-4 md:flex-row">
                                <div className="flex w-64 flex-col gap-2">
                                    <Label>Gender</Label>
                                    <Input className="w-full" type="text" {...register('gender', { required: true })} />
                                </div>
                                <div>
                                    <CustomCalendar
                                        Label="Birthdate"
                                        value={birthdate ? new Date(birthdate) : undefined}
                                        onChange={(date) => {
                                            setValue('birthdate', date ? date.toISOString() : '');
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="flex w-full flex-col items-center justify-center gap-4 md:flex-row">
                                <div className="flex w-64 flex-col gap-2">
                                    <Label>SK Position</Label>
                                    <Input type="text" {...register('sk_position', { required: true })} />
                                </div>
                                <div className="flex w-64 flex-col gap-2">
                                    <Label>Email</Label>
                                    <Input type="email" {...register('email', { required: true })} />
                                </div>
                            </div>
                            <div className="flex w-full flex-col items-center justify-center gap-4 md:flex-row">
                                <div className="flex w-64 flex-col gap-2">
                                    <Label>Contact Number</Label>
                                    <Input type="text" {...register('contach_number', { required: true })} />
                                </div>
                                <div className="flex w-64 flex-col gap-2">
                                    <Label>Username</Label>
                                    <Input type="text" {...register('username', { required: true })} />
                                </div>
                            </div>
                            <div className="flex w-full flex-col items-center justify-center gap-4 md:flex-row">
                                <div className="flex w-64 flex-col gap-2">
                                    <Label>Password</Label>
                                    <Input type="password" {...register('password', { required: true })} />
                                </div>
                                <div className="flex w-64 flex-col gap-2">
                                    <Label>Confirm Password</Label>
                                    <Input type="password" {...register('confirm_password', { required: true })} />
                                </div>
                            </div>
                            <div className="flex w-full flex-row items-center justify-center gap-4">
                                <Button variant="customLogoBased" className="w-3xs md:w-xl" type="submit">
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

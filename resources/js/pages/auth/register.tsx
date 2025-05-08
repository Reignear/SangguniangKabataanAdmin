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
    contact_number: string;
    username: string;
    password: string;
    confirm_password: string;
}

export default function register() {
    const {
        register,
        handleSubmit,
        watch,
        setValue,
        formState: { errors },
    } = useForm<RegistrationForm>();

    const onSubmit: SubmitHandler<RegistrationForm> = (data) => console.log(data);
    register('birthdate', { required: 'Birthdate is required' });
    const birthdate = watch('birthdate');

    return (
        <div className="h-screen w-full p-2">
            <div className="flex h-full w-full items-center justify-center">
                <Card className="w-xl">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <CardContent className="flex w-full flex-col gap-y-2">
                            <div className="flex w-full justify-center">
                                <Label className="text-2xl font-semibold">Register</Label>
                            </div>

                            <div className="flex w-full flex-col items-center justify-center gap-4 md:flex-row">
                                <div className="flex w-64 flex-col gap-2">
                                    <Label>Firstname</Label>
                                    <Input type="text" {...register('firstname', { required: 'Firstname is required' })} />
                                    <p className="text-[11px] text-red-500">{errors.firstname?.message}</p>
                                </div>
                                <div className="flex w-64 flex-col gap-2">
                                    <Label>Middlename</Label>
                                    <Input type="text" {...register('middlename', { required: 'Middlename is required' })} />
                                    <p className="text-[11px] text-red-500">{errors.middlename?.message}</p>
                                </div>
                            </div>
                            <div className="flex w-full flex-col items-center justify-center gap-4 md:flex-row">
                                <div className="flex w-64 flex-col gap-2">
                                    <Label>Lastname</Label>
                                    <Input type="text" {...register('lastname', { required: 'Lastname is required' })} />
                                    <p className="text-[11px] text-red-500">{errors.lastname?.message}</p>
                                </div>
                                <div className="flex w-64 flex-col gap-2">
                                    <Label>Suffix</Label>
                                    <Input type="text" {...register('suffix', { required: 'Suffix is required' })} />
                                    <p className="text-[11px] text-red-500">{errors.suffix?.message}</p>
                                </div>
                            </div>
                            <div className="flex w-full flex-col items-center justify-center gap-4 md:flex-row">
                                <div className="flex w-64 flex-col gap-2">
                                    <Label>Gender</Label>
                                    <Input className="w-full" type="text" {...register('gender', { required: 'Gender is required' })} />
                                    <p className="text-[11px] text-red-500">{errors.gender?.message}</p>
                                </div>
                                <div>
                                    <CustomCalendar
                                        Label="Birthdate"
                                        value={birthdate ? new Date(birthdate) : undefined}
                                        onChange={(date) => {
                                            setValue('birthdate', date ? date.toISOString() : '');
                                        }}
                                    />
                                    <p className="text-[11px] text-red-500">{errors.birthdate?.message}</p>
                                </div>
                            </div>
                            <div className="flex w-full flex-col items-center justify-center gap-4 md:flex-row">
                                <div className="flex w-64 flex-col gap-2">
                                    <Label>SK Position</Label>
                                    <Input type="text" {...register('sk_position', { required: 'Sk position is required' })} />
                                    <p className="text-[11px] text-red-500">{errors.sk_position?.message}</p>
                                </div>
                                <div className="flex w-64 flex-col gap-2">
                                    <Label>Email</Label>
                                    <Input type="email" {...register('email', { required: 'Email is required' })} />
                                    <p className="text-[11px] text-red-500">{errors.email?.message}</p>
                                </div>
                            </div>
                            <div className="flex w-full flex-col items-center justify-center gap-4 md:flex-row">
                                <div className="flex w-64 flex-col gap-2">
                                    <Label>Contact Number</Label>
                                    <Input type="text" {...register('contact_number', { required: 'Contact number is required' })} />
                                    <p className="text-[11px] text-red-500">{errors.contact_number?.message}</p>
                                </div>
                                <div className="flex w-64 flex-col gap-2">
                                    <Label>Username</Label>
                                    <Input type="text" {...register('username', { required: 'Username is required' })} />
                                    <p className="text-[11px] text-red-500">{errors.username?.message}</p>
                                </div>
                            </div>
                            <div className="flex w-full flex-col items-center justify-center gap-4 md:flex-row">
                                <div className="flex w-64 flex-col gap-2">
                                    <Label>Password</Label>
                                    <Input type="password" {...register('password', { required: 'Passowrd is required' })} />
                                    <p className="text-[11px] text-red-500">{errors.password?.message}</p>
                                </div>
                                <div className="flex w-64 flex-col gap-2">
                                    <Label>Confirm Password</Label>
                                    <Input
                                        type="password"
                                        {...register('confirm_password', {
                                            required: 'Password confirmation is required',
                                            validate: (value) => value === watch('password') || 'The passwords do not match',
                                        })}
                                    />
                                    <p className="text-[11px] text-red-500">{errors.confirm_password?.message}</p>
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

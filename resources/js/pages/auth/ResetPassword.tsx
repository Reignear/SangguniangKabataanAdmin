import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { SubmitHandler, useForm } from 'react-hook-form';

interface ResetPasswordForm {
    password: string;
    confirmPassword: string;
}

export default function ResetPassword() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<ResetPasswordForm>();
    const onSubmit: SubmitHandler<ResetPasswordForm> = (data) => console.log(data);

    return (
        <div className="flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
            <div className="md:max-w-1xl w-full max-w-sm">
                <div className="flex flex-col gap-6">
                    <Card className="overflow-hidden">
                        <CardContent className="grid p-0 md:grid-cols-1">
                            <form action="" className="p-6 md:p-8" onSubmit={handleSubmit(onSubmit)}>
                                <div className="flex flex-col gap-6">
                                    <div className="flex flex-col items-center text-center">
                                        <h1 className="text-2xl font-bold">Reset password</h1>
                                        <p className="text-muted-foreground text-balance">Enter your new password..</p>
                                    </div>
                                    <div className="grid gap-2">
                                        <Label htmlFor="password">Password</Label>
                                        <Input type="password" {...register('password', { required: 'Password is required' })} />
                                        <p className="text-[11px] text-red-500">{errors.password?.message}</p>
                                    </div>
                                    <div>
                                        <Label htmlFor="password"> Confirm Password</Label>
                                        <Input
                                            type="password"
                                            {...register('confirmPassword', {
                                                required: 'Password confirmation is required',
                                                validate: (value) => value === watch('password') || 'The passwords do not match',
                                            })}
                                        />
                                        <p className="text-[11px] text-red-500">{errors.confirmPassword?.message}</p>
                                    </div>
                                    <Button variant="customLogoBased" type="submit" className="w-full">
                                        Save changes
                                    </Button>
                                </div>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}

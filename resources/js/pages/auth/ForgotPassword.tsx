import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { SubmitHandler, useForm } from 'react-hook-form';

interface ForgotPasswordForm {
    email: string;
}

export default function ForgotPassword() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ForgotPasswordForm>();
    const onSubmit: SubmitHandler<ForgotPasswordForm> = (data) => console.log(data);

    return (
        <div className="animated-gradient flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
            <div className="md:max-w-1xl w-full max-w-sm">
                <div className="flex flex-col gap-6">
                    <Card className="overflow-hidden">
                        <CardContent className="grid p-0 md:grid-cols-1">
                            <form className="p-6 md:p-8" onSubmit={handleSubmit(onSubmit)}>
                                <div className="flex flex-col gap-6">
                                    <div className="flex flex-col items-center text-center">
                                        <h1 className="text-2xl font-bold">Forgot password</h1>
                                        <p className="text-muted-foreground text-balance">
                                            Enter your email address and we’ll send you a link to reset your password.
                                        </p>
                                    </div>
                                    <div className="grid gap-2">
                                        <Label htmlFor="email">Email</Label>
                                        <Input type="email" {...register('email', { required: 'Email is required' })} />
                                        <p className="text-[11px] text-red-500">{errors.email?.message}</p>
                                    </div>

                                    <Button variant="customLogoBased" type="submit" className="w-full">
                                        Send reset link
                                    </Button>
                                </div>
                            </form>
                            {/* <div className="relative hidden h-full w-full md:block">
                                <div className="flex h-full items-center justify-center">
                                    <img src={SKLogo} alt="Image" />
                                </div>
                            </div> */}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}

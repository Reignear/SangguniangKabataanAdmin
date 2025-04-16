import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import SKLogo from '../../../assets/logo.png';
import '../../../css/Custom.css';

export default function LoginForm({ className, ...props }: React.ComponentProps<'div'>) {
    return (
        <div className="animated-gradient flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
            <div className="w-full max-w-sm md:max-w-3xl">
                <div className={cn('flex flex-col gap-6', className)} {...props}>
                    <Card className="overflow-hidden">
                        <CardContent className="grid p-0 md:grid-cols-2">
                            <form className="p-6 md:p-8">
                                <div className="flex flex-col gap-6">
                                    <div className="flex flex-col items-center text-center">
                                        <h1 className="text-2xl font-bold">Welcome back</h1>
                                        <p className="text-muted-foreground text-balance">Login your SK account</p>
                                    </div>
                                    <div className="grid gap-2">
                                        <Label htmlFor="email">Username</Label>
                                        <Input id="text" type="text" required />
                                    </div>
                                    <div className="grid gap-2">
                                        <div className="flex items-center">
                                            <Label htmlFor="password">Password</Label>
                                            <a href="#" className="ml-auto text-sm underline-offset-2 hover:underline">
                                                Forgot your password?
                                            </a>
                                        </div>

                                        <Input id="password" type="password" required />
                                        <div className="flex items-center gap-2">
                                            <Checkbox />
                                            <Label>Remember me</Label>
                                        </div>
                                    </div>
                                    <Button variant="customLogoBased" type="submit" className="w-full">
                                        Login
                                    </Button>
                                </div>
                                <div className="pt-2 text-center text-sm">
                                    Don&apos;t have an account?{' '}
                                    <a href={route('register')} className="underline underline-offset-4">
                                        Sign up
                                    </a>
                                </div>
                            </form>
                            <div className="relative hidden h-full w-full md:block">
                                <div className="flex h-full items-center justify-center">
                                    <img src={SKLogo} alt="Image" />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}

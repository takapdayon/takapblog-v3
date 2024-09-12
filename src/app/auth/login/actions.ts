'use server';
import { signIn } from '@/lib/auth';

export const toSignIn = async () => signIn('google', { redirectTo: '/' });

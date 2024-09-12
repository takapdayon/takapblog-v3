'use server';

import { signOut } from '@/lib/auth';

export const doSignOut = async () => signOut({ redirectTo: '/' });

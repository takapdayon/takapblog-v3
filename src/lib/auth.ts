import NextAuth, { type Profile } from 'next-auth';
import google from 'next-auth/providers/google';

interface GoogleProfile extends Profile {
  email_verified?: boolean;
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [google],
  callbacks: {
    async signIn({ account, profile }) {
      if (account?.provider === 'google') {
        const googleProfile = profile as GoogleProfile;
        const ALLOWED_EMAILS = process.env.ALLOWED_EMAILS?.split(',') ?? [];
        return !!googleProfile?.email_verified && ALLOWED_EMAILS.some(email => email === googleProfile?.email);
      }
      return true; // Do different verification for other providers that don't have `email_verified`
    },
  },
});

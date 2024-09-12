'use client';

import { doSignOut } from '@/app/auth/logout/actions';
import { useEffect } from 'react';

const Page = () => {
  useEffect(() => {
    doSignOut();
  }, []);
};

export default Page;

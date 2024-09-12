'use client';

import { toSignIn } from '@/app/auth/login/actions';
import { useEffect } from 'react';

const Page = () => {
  // NOTE: auth.jsのsignInを用いると実行まで親コンポーネントが表示されて気持ち悪いので以下で対応
  // redirect('/api/auth/signin');
  useEffect(() => {
    toSignIn();
  }, []);
};

export default Page;

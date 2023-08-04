'use client';

import { SessionProvider } from 'next-auth/react';

const Provider = ({ children }: { children: string }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default Provider;

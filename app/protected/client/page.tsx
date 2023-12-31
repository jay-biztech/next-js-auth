'use client';

import { useSession } from 'next-auth/react';

export default function Home() {
  const { data: session } = useSession({ required: true })

  return <main>
    Hello {session ? session?.user?.name : 'Guest User'}
  </main>;
}

import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth/next';

const ServerProtectedPage = async () => {
    const session = await getServerSession(authOptions);

    return <main>
        Hello {session ? session?.user?.name : 'Guest User'}
    </main>;
}

export default ServerProtectedPage;

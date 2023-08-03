'use client';

import { signIn, signOut, useSession } from 'next-auth/react';
import Link from 'next/link';

const Header: React.FC = () => {
  const { data: session } = useSession();

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" href="/">
            Next Auth
          </Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <button className="btn btn-outline">
                  <Link href="/protected/server">Server</Link>
                </button>
              </li>
              <li className="nav-item">
                <button className="btn btn-outline">
                  <Link href="/protected/client">Client</Link>
                </button>
              </li>
            </ul>
            <div className="d-flex" role="search">
              {session ? (
                <button onClick={() => signOut()}>Sign out</button>
              ) : (
                <button onClick={() => signIn()}>Sign in</button>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;

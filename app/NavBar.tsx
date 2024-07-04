"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";

const NavBar = () => {
  const { status, data: session } = useSession();

  return (
    <div className="navbar bg-base-100 shadow-md">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Nextjs</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/users">users</Link>
          </li>
          {status === "authenticated" && (
            <li>
              <p>{session.user!.name}</p>
            </li>
          )}
          {status === "unauthenticated" && (
            <li>
              <Link href="/api/auth/signin">Login</Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};
export default NavBar;

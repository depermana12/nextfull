import Link from "next/link";

const NavBar = () => {
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
        </ul>
      </div>
    </div>
  );
};
export default NavBar;

import Link from "next/link";
import Usertable from "./Usertable";

type Props = {
  searchParams: {
    sortOrder: string;
  };
};

const UsersPage = async ({ searchParams: { sortOrder } }: Props) => {
  return (
    <>
      <h1>Users</h1>
      <Link href="/users/new" className="btn btn-primary">
        New User
      </Link>
      <Usertable sortOrder={sortOrder} />
    </>
  );
};
export default UsersPage;

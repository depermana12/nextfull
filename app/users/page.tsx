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
      <Usertable sortOrder={sortOrder} />
    </>
  );
};
export default UsersPage;

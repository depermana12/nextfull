import Link from "next/link";

type User = {
  id: number;
  name: string;
  email: string;
};

type Props = {
  sortOrder: string;
};

const Usertable = async ({ sortOrder }: Props) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await res.json();

  sortOrder === "name"
    ? users.sort((a, b) => a.name.localeCompare(b.name))
    : users.sort((a, b) => a.email.localeCompare(b.email));

  return (
    <div>
      <table className="table-bordered table">
        <thead>
          <tr>
            <th>
              <Link href="/users?sortOrder=name">Name</Link>
            </th>
            <th>
              <Link href="/users?sortOrder=email">Email</Link>
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Usertable;

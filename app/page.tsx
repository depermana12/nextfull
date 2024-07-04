import { auth } from "@/auth";

export default async function Home() {
  const session = await auth();

  return <h1>Hello {session && <span>{session.user!.name}</span>}</h1>;
}

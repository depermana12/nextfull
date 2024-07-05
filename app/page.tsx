import { auth } from "@/auth";
// import Image from "next/image";
// import london1 from "@/public/images/london1.jpg";

export default async function Home() {
  const session = await auth();

  return (
    <>
      <h1>Hello {session && <span>{session.user!.name}</span>}</h1>
      {/* <Image src={london1} alt="london" /> */}
    </>
  );
}

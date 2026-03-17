"use client";
import { useRouter } from "next/navigation";

export default function UsersPage() {
  const router = useRouter();

  const redirectUser = () => {
    router.push("/");
  };

  return (
    <>
      <div>This is users page</div>
      <button onClick={redirectUser}>Go to home</button>
    </>
  );
}

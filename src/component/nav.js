import Link from "next/link";

export default function Nav() {
  // console.log("where?");

  return (
    <ul>
      <li>
        <Link href="/users">Users</Link>
      </li>
      <li>
        <Link href="/users/profile/666">Users666</Link>
      </li>
    </ul>
  );
}

import { redirect } from "next/navigation";
export default async function UsersNamePage({ params, searchParams }) {
  const id = (await params).id;
  const name = (await params).name;

  const query = await searchParams;
  // console.log(query);
  if (id != 100) {
    redirect("/");
  }

  return (
    <>
      <div>
        <b>
          This is Users ID:{id} & User Name:{name}
        </b>
      </div>
    </>
  );
}

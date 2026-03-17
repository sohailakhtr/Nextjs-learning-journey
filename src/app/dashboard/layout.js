export default function DashbordLayout(props) {
  const conditional = false;

  return (
    <>
      <h1>This is Dashboard Layout Page</h1>
      {props.children}
      {conditional ? props.analytics : props.posts}
    </>
  );
}

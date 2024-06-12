import Header from "./Header";

export default function Layout(props) {
  return (
    <>
      <Header></Header>
      <main>{props.children}</main>
    </>
  );
}

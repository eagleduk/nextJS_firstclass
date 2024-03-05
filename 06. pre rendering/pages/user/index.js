export default function Users(props) {
  return <h1>Hello {props.name}</h1>;
}

export async function getServerSideProps(context) {
  const { req, res } = context;
  return {
    props: {
      name: "World",
    },
  };
}

import path from "path";
import fs from "fs/promises";

function DetailPage(props) {
  const { product } = props;

  if (!product) {
    return <h1>Loading....</h1>;
  }

  return (
    <>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
    </>
  );
}

export default DetailPage;

async function getData() {
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const fileData = await fs.readFile(filePath);
  return JSON.parse(fileData);
}

export async function getStaticPaths() {
  const data = await getData();
  const paths = data.products.map((product) => ({
    params: { id: product.id },
  }));
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { params } = context;

  const jsonData = await getData();

  const product = jsonData.products.find((p) => p.id === params.id);
  if (!product) {
    return { notFound: true };
  }
  return {
    props: {
      product,
    },
    revalidate: 10,
  };
}

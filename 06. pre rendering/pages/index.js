import path from "path";
import fs from "fs/promises";

function HomePage(props) {
  const { products } = props;
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>{product.title}</li>
      ))}
    </ul>
  );
}

export default HomePage;

export async function getStaticProps() {
  console.log("(Re) Generation");
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const fileData = await fs.readFile(filePath);
  const jsonData = JSON.parse(fileData);
  return {
    props: {
      products: jsonData.products,
    },
    revalidate: 10,
  };
}

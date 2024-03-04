import path from "path";
import fs from "fs/promises";
import Link from "next/link";

function HomePage(props) {
  const { products } = props;
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <Link href={"/" + product.id}>{product.title}</Link>
        </li>
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

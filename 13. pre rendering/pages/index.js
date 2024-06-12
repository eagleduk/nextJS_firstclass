import Link from "next/link";

export default function Index() {
  return (
    <ul>
      <li>
        <Link href="/product">Product</Link>
      </li>
      <li>
        <Link href="/user">User</Link>
      </li>
      <li>
        <Link href="/item">Item</Link>
      </li>
    </ul>
  );
}

import Link from "next/link";

export default function ClientMainPage() {
  const clients = [
    {
      id: "id1",
      label: "client 1",
    },
    {
      id: "id2",
      label: "client 2",
    },
  ];
  return (
    <div>
      <h1>Client Main Page.</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link
              href={{
                pathname: "client/[clientId]",
                query: {
                  clientId: client.id,
                },
              }}
            >
              {client.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

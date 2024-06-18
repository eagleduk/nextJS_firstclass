"use client";

export default function FilterError({ error }) {
  return (
    <>
      <h1>Error</h1>
      <p>{error.message}</p>
    </>
  );
}

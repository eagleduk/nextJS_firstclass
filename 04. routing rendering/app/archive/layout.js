export default function ArchiveHome({ archive, latest }) {
  return (
    <>
      <div id="archive-filter">{archive}</div>
      <div>{latest}</div>
    </>
  );
}

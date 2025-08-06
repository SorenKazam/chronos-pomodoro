export function DynamicDate() {
  const date = new Date().getUTCFullYear();
  return <span>{date}</span>;
}

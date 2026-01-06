export function stripDatePrefix(id: string) {
  const match = id.match(/^\d{4}[-/.]\d{2}[-/.]\d{2}[-](.+)$/);
  return match ? match[1] : id;
}
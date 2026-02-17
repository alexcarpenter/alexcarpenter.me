export function enforceExhaustive(
  value: never,
  message = "Unexpected value",
): never {
  throw new Error(`${message} '${value}'`);
}

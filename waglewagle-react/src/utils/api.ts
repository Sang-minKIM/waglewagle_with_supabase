export async function fetchData(
  path: string,
  init?: RequestInit,
) {
  const response = await fetch(path, {
    ...init,
  });
  const json = await response.json();
  return json.data;
}

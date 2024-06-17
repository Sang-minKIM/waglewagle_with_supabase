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

export function use(promise: Promise<any>) {
  let status = "pending";

  let result: any;
  const suspender = promise.then(
    (response) => {
      status = "fulfilled";
      result = response;
    },
    (error) => {
      status = "rejected";
      result = error;
    },
  );

  const read = () => {
    switch (status) {
      case "pending":
        throw suspender;
      case "rejected":
        throw result;
      default:
        return result;
    }
  };
  return { read };
}

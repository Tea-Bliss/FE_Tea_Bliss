export default function createQueryString(query: { [key: string]: string | number | undefined }) {
  const queryStrings = [];

  for (const key in query) {
    queryStrings.push(`${key}=${query[key]}`);
  }

  return queryStrings.join('&');
}

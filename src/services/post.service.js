export async function getPosts(page, limit) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`
  );
  return {
    data: await response.json(),
    totalCount: +response.headers.get("x-total-count"),
  };
}

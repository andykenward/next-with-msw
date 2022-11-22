import HomePage from './HomePage'

async function getBook() {
  try {
    // Server-side requests are mocked by `mocks/server.ts`.
    const res = await fetch('https://my.backend/book')
    const book = await res.json()
    return book
  } catch (error) {
    console.error(error)
    return
  }

  // return {
  //   title: 'Lord of the Rings',
  //   imageUrl: '/book-cover.jpg',
  //   description:
  //     'The Lord of the Rings is an epic high-fantasy novel written by English author and scholar J. R. R. Tolkien.',
  // }
}

export default async function Page() {
  // Fetch data directly in a Server Component
  const book = await getBook()
  // Forward fetched data to your Client Component
  return <HomePage book={book} />
}

'use client'

import { Book, Review } from '../mocks/types'
import { useEffect, useState } from 'react'

type Props = {
  book: Book
}
// This is a Client Component. It receives data as props and
// has access to state and effects just like Page components
// in the `pages` directory.
export default function HomePage({ book }: Props) {
  const [reviews, setReviews] = useState<Review[] | null>(null)

    useEffect(() => {
      try {
        fetch('https://my.backend/book')
          .then((res) => (res.ok ? res.json() : `bad request`))
          .then((data) => console.log(`client: ${JSON.stringify(data)}`))
      } catch (error) {
        console.error(error)
      }
    }, [])

  const handleGetReviews = () => {
    // Client-side request are mocked by `mocks/browser.ts`.
    fetch('/reviews')
      .then((res) => res.json())
      .then(setReviews)
  }

  return (
    <div>
      <img src={book.imageUrl} alt={book.title} width="250" />
      <h1>{book.title}</h1>
      <p>{book.description}</p>
      <button onClick={handleGetReviews}>Load reviews</button>
      {reviews && (
        <ul>
          {reviews.map((review) => (
            <li key={review.id}>
              <p>{review.text}</p>
              <p>{review.author}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

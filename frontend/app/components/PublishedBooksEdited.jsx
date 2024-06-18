// PublishedBooksAuthored.js
import React, { useEffect, useState } from 'react';
import client from './sanityClient';

const PublishedBooksEdited = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchBooks = async () => {
            const data = await client.fetch(`
        *[_type == "publishedBooksEdited"]{
          title,
          year,
          author
        }
      `);
            setBooks(data);
        };

        fetchBooks();
    }, []);

    return (
        <div>
            {books.length ? (
                books.map((book, index) => (
                    <div key={index}>
                        <p>
                            {book.author} ({book.year}), {book.title}. ISBN 9781032342986,
                            Published November 30, {book.year}, by Tailor and Francis- Routledge (Earthscan).
                        </p>
                    </div>
                ))
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default PublishedBooksEdited;
"use client";

// PublishedBooksAuthored.js
import React, { useEffect, useState } from 'react';
import { client } from '../client';

const ResearchJournalPapers = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchBooks = async () => {
            const data = await client.fetch(`
        *[_type == "researchJournalPapers"]{
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

export default ResearchJournalPapers;

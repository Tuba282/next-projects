'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image';
import Example from './components/example';

interface ImageLinks {
  smallThumbnail: string;
  thumbnail: string;
  small: string;
  medium: string;
  large: string;
  extraLarge: string;
}

interface VolumeInfo {
  title: string;
  publishedDate: string;
  description: string;
  pageCount: number;
  ratingsCount: number;
  imageLinks: ImageLinks;
  language: string;
}

interface AccessInfo {
  webReaderLink: string;
}

interface Book {
  id: string;
  volumeInfo: VolumeInfo;
  accessInfo: AccessInfo;
}

interface APIResponse {
  items: Book[];
}


const Books: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [error, setError] = useState<string | null>(null);



  useEffect(() => {
    const apiKey = 'AIzaSyAoCbF5Ote19uYGbIV95264tn4F5l_uDmk'; // Apni Google Books API key yahan daal dein
    const searchQuery = encodeURIComponent('aladin');
    const url = `https://www.googleapis.com/books/v1/volumes?q=${searchQuery}&key=${apiKey}`;

    axios.get<APIResponse>(url)
      .then(response => {
        setBooks(response.data.items); // Response mein books ke details honge
      })
      .catch(error => {
        console.error("Error fetching data: ", error);
        setError("Error fetching data: " + error.message);
      });
  }, []);

  return (
    <div>

    <Example />
    <br /><br /><br /><br />

      <h1>Books</h1>
      {error && <p>Error: {error}</p>}
      <ul>
        {books.length > 0 ? (
          books.map(book => (
            <li key={book.id}>
              <h2 className='text-black text-3xl'>{book.volumeInfo.title}</h2>
              <p className='text-red-300 text-xl'>{book.volumeInfo.description}</p>
              {book.volumeInfo.imageLinks && <Image alt={book.volumeInfo.title} width={200} height={250} src={book.volumeInfo.imageLinks.smallThumbnail} />}
              <a target='_blank' href={book.accessInfo.webReaderLink} className='text-blue-500 text-xl'>Read Online</a>
            </li>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </ul>
      {/* <p>{books ? (
        <pre>{JSON.stringify(books, null, 2)}</pre>
      ) : (
        <p>Loading...</p>
      )}</p> */}
    </div>
  );
};

export default Books;

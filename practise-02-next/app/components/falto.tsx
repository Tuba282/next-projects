
"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

const bookTitles = [
  "Harry Potter",
  "The Great Gatsby",
  "To Kill a Mockingbird",
  "Pride and Prejudice",
  "The Catcher in the Rye",
  "1984",
  "The Hobbit",
  "Moby Dick",
  "War and Peace",
  "Crime and Punishment",
  "The Odyssey",
  "The Divine Comedy",
  "Les Misérables",
  "Ulysses",
  "The Brothers Karamazov",
  "Brave New World",
  "The Iliad",
  "Anna Karenina",
  "Jane Eyre",
  "Wuthering Heights",
  "The Lord of the Rings",
  "Don Quixote",
  "One Hundred Years of Solitude",
  "The Alchemist",
  "The Count of Monte Cristo",
  "A Tale of Two Cities",
  "The Picture of Dorian Gray",
  "Frankenstein",
  "Dracula",
  "The Little Prince",
  "The Adventures of Sherlock Holmes",
  "The Three Musketeers",
  "Fahrenheit 451",
  "The Grapes of Wrath",
  "The Old Man and the Sea",
  "Animal Farm",
  "Catch-22",
  "The Metamorphosis",
  "Sense and Sensibility",
  "Gone with the Wind",
  "The Scarlet Letter",
  "Rebecca",
  "The Shining",
  "The Road",
  "Dune",
  "The Color Purple",
  "Beloved",
  "Invisible Man",
  "Slaughterhouse-Five",
  "Of Mice and Men",
  "The Stranger",
  "Lolita",
  "The Bell Jar",
  "East of Eden",
  "A Clockwork Orange",
];

const BookSearch = () => {
  const [selectedBook, setSelectedBook] = useState("");
  const [results, setResults] = useState<string | null>([]);
  const [loading, setLoading] = useState<string | null>(false);

  // Function to fetch data for the selected book title
  const fetchSelectedBook = async () => {
    if (!selectedBook) {
      alert("Please select a book title!");
      return;
    }

    setLoading(true);
    setResults([]); // Clear previous results

    try {
      const response = await axios.get(
        `https://openlibrary.org/search.json?q=${selectedBook}`
      );
      const data = response.data;

      if (data.docs.length === 0) {
        setResults("No results found.");
      } else {
        setResults(data.docs);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setResults(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1>Book Search</h1>
      <div className="dropdown-container">
        <select
          value={selectedBook}
          onChange={(e) => setSelectedBook(e.target.value)}
        >
          <option value="">Select a book title</option>
          {bookTitles.map((title, index) => (
            <option key={index} value={title}>
              {title}
            </option>
          ))}
        </select>
        <button onClick={fetchSelectedBook}>Search</button>
      </div>
      {loading ? (
        <p>Loading data...</p>
      ) : (
        <div className="grid-container">
          {results.map((book, index) => (
            <div key={index} className="result-item">
              <img
                src={
                  book.cover_i
                    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
                    : "https://via.placeholder.com/100x150?text=No+Cover"
                }
                alt={`${book.title} Cover`}
              />
              <div className="book-details">
                <p className="book-title">{book.title || "No Title"}</p>
                <p className="author">
                  Author:{" "}
                  {book.author_name
                    ? book.author_name.join(", ")
                    : "Unknown Author"}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
      <style jsx>{`
        .container {
          text-align: center;
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
        }
        .dropdown-container {
          display: flex;
          justify-content: center;
          margin-bottom: 20px;
        }
        select,
        button {
          padding: 10px;
          font-size: 16px;
          margin-right: 10px;
        }
        button {
          background-color: #28a745;
          color: #fff;
          border: none;
          cursor: pointer;
        }
        button:hover {
          background-color: #218838;
        }
        .grid-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 20px;
          margin-top: 20px;
        }
        .result-item {
          background-color: #f9f9f9;
          padding: 10px;
          border-radius: 8px;
          text-align: center;
        }
        .result-item img {
          max-width: 100%;
          height: auto;
          border-radius: 4px;
        }
        .book-title {
          font-size: 16px;
          font-weight: bold;
          margin: 5px 0;
        }
        .author {
          color: #555;
          font-size: 14px;
        }
      `}</style>
    </div>
  );
};

export default BookSearch;

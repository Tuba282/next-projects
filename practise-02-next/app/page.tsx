"use client";
import React, { useState, useEffect, ChangeEvent } from "react";
import axios from "axios";

export default function Book() {
  const [selected, setSelected] = useState("");
  const [data, setData] = useState("");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const resp = await axios.get(`https://openlibrary.org/search.json?q=${selected}`);
        setData(resp.data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message); // Set error message
        } else {
          setError("Unknown error occurred");
        }
      }
    };

    if (selected) { // Ensure to call getData only if selected is not empty
      getData();
    }
  }, [selected]); // Add selected as a dependency

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSelected(e.target.value); // Use setSelected to update the selected value
  };

  return (
    <>
      <input 
        type="text" 
        placeholder="Enter book title"
        value={selected}
        onChange={handleChange} 
      />
      {/* Render your data or error here */}
      {error && <div>Error: {error}</div>}
      {data && <div>Data: {JSON.stringify(data,null,2)}</div>}
    </>
  );
}

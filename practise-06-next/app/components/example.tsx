'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image';


const Example: React.FC = () => {
    const [movie, setMovie] = useState<Movie | null>(null);
    const [error, setError] = useState<string | null>(null);
    interface Movie {
        Title: string;
        Year: string;
        Rated: string;
        Released: string;
        Runtime: string;
        Genre: string;
        Director: string;
        Writer: string;
        Actors: string;
        Plot: string;
        Language: string;
        Country: string;
        Awards: string;
        Poster: string;
        Ratings: Array<{ Source: string; Value: string }>;
        Metascore: string;
        imdbRating: string;
        imdbVotes: string;
        imdbID: string;
        Type: string;
        DVD: string;
        BoxOffice: string;
        Production: string;
        Website: string;
        Response: string;
    }

    useEffect(() => {
        const fetchData = async () => {
            const apiKey = 'f6ea661d';
            const request_url = `https://www.omdbapi.com/?t=The+Matrix&apikey=${apiKey}`;

            try {
                const response = await axios.get(request_url);
                setMovie(response.data);
            } catch (error) {
                // console.error("Error fetching data: ", error);
                setError("Error fetching data: " + error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Movie Details</h1>
            {error && <p>{error}</p>}
            {movie && (
                <div>
                    <h2>{movie.Title}</h2>
                    <p>{movie.Year}</p>
                    <p>{movie.Rated}</p>
                    <p>{movie.Runtime}</p>
                    <p>{movie.Genre}</p>
                    <p>{movie.Plot}</p>
                    <p>{movie.Actors}</p>
                    <Image src={movie.Poster} width={250} height={300} alt={movie.Title} ></Image>
                </div>
            )}
        </div>
    );
};

export default Example;

"use client";

import {FC, useState} from "react";
import { useRouter } from "next/navigation";

interface IProps {
    request_type: "users" | "recipes";
}

const Search:FC<IProps> = ({ request_type }) => {
    const [query, setQuery] = useState("");
    const router = useRouter();


    const handleSearch = () => {
        if (!query) return;

        if (!isNaN(Number(query))) {
            router.push(`/auth/${request_type}/${query}`);
        } else {
            router.push(`/auth/${request_type}/search?q=${query}`);
        }
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Search by ID, name, firstname, or lastname..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
};

export default Search;

"use client";

import {FC, useState} from "react";

interface SearchProps {
    request_type: "users" | "recipes";
    onSearch: (query: string) => void; // Колбек для передачі значення в `page.tsx`
}

const Search:FC<SearchProps> = ({ request_type, onSearch }) => {
    const [query, setQuery] = useState<string>("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setQuery(value);
        onSearch(value); // Передаємо новий запит у `page.tsx`
    };

    return (
        <div>
            <input
                type="text"
                placeholder={`Пошук ${request_type === "users" ? "користувачів" : "рецептів"}...`}
                value={query}
                onChange={handleChange}
            />
        </div>
    );
};

export default Search;

// import { FC, useState } from "react";
// import {getFilteredRecipes, getFilteredUsers} from "@/services/api.services";
//
//
// interface IProps {
//     request_type: "users" | "recipes";
// }
//
// const Search: FC<IProps> = ({ request_type }) => {
//     const [query, setQuery] = useState("");
//     const [results, setResults] = useState<any[]>([]);
//
//     const handleSearch = async () => {
//         if (!query) return;
//
//         try {
//             let data;
//
//             if (request_type === "users") {
//                 data = await getFilteredUsers(query);
//             } else {
//                 data = await getFilteredRecipes(query);
//             }
//
//             if (!isNaN(Number(query))) {
//                 // Пошук за ID
//                 const foundItem = data[request_type]?.find((item: any) => item.id === Number(query));
//                 setResults(foundItem ? [foundItem] : []);
//             } else {
//                 // Пошук за текстом
//                 setResults(data[request_type] || []);
//             }
//         } catch (error) {
//             console.error("Помилка під час пошуку:", error);
//         }
//     };
//
//     return (
//         <div>
//             <input
//                 type="text"
//                 placeholder="Search by ID, name, firstname, or lastname..."
//                 value={query}
//                 onChange={(e) => setQuery(e.target.value)}
//             />
//             <button onClick={handleSearch}>Search</button>
//
//             <div>
//                 {results.length > 0 ? (
//                     <ul>
//                         {results.map((item) => (
//                             <li key={item.id}>
//                                 {request_type === "users"
//                                     ? `${item.firstName} ${item.lastName} (ID: ${item.id})`
//                                     : `${item.name} (ID: ${item.id})`}
//                             </li>
//                         ))}
//                     </ul>
//                 ) : (
//                     <p>Нічого не знайдено</p>
//                 )}
//             </div>
//         </div>
//     );
// };
//
// export default Search;

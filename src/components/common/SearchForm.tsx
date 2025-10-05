import React, { useRef } from "react";
import { useAppContext } from "../../context/AppContext";
import { Search } from "lucide-react";

export const SearchForm: React.FC = () => {
    const { searchQuery, setSearchQuery } = useAppContext();
    const inputRef = useRef<HTMLInputElement>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };

    return (
        <form
            onSubmit={(e) => e.preventDefault()}
            className="flex items-center justify-center gap-2 p-4"
        >
            <div className="relative w-full max-w-md">
                <input
                    ref={inputRef}
                    type="text"
                    value={searchQuery}
                    onChange={handleChange}
                    placeholder="Search for a movie..."
                    className="w-full p-2 pl-8 rounded-md border border-gray-400 bg-[#2b2b2b] text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Search className="absolute left-2 top-2 text-gray-400" />
            </div>
        </form>
    );
};

import React, { createContext, useState, useContext } from "react";

interface AppContextType {
    searchQuery: string;
    setSearchQuery: (val: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [searchQuery, setSearchQuery] = useState("");

    return (
        <AppContext.Provider value={{ searchQuery, setSearchQuery }}>
            {children}
        </AppContext.Provider>
    );
};

/* eslint-disable react-refresh/only-export-components */
export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) throw new Error("useAppContext must be used within AppProvider");
    return context;
};

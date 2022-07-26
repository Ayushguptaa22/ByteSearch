import React, {createContext, useContext, useState} from 'react';
const ResultContext = createContext();

const baseUrl = 'https://google-search1.p.rapidapi.com/google-search';

export const ResultContextProvider = ({children}) => {
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const getResults = async (searchTerm) => {
        setLoading(true);
        const response = await fetch(`${baseUrl}?q=${searchTerm}`, {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '1404e3fd91mshaa4a3f6ce8786bcp1eab4ajsn6faed96b3c69',
                'X-RapidAPI-Host': 'google-search1.p.rapidapi.com'
            }
        });
        const data = await response.json();
        setResults(data.results);
        setLoading(false);
    }

    return (
        <ResultContext.Provider value={{results, loading, searchTerm, setSearchTerm, getResults}}>
            {children}
        </ResultContext.Provider>
    );
}

export const useResultContext = () => {
    return useContext(ResultContext);
}
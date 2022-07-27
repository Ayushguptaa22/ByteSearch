import React, {createContext, useContext, useState} from 'react';
const ResultContext = createContext();

//const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1';

export const ResultContextProvider = ({children}) => {
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const getResults = async (url) => {
        setLoading(true);
        const response = await fetch(`${baseUrl}${url}`, {
            method: 'GET',
            headers: {
               // 'X-RapidAPI-Key': '1404e3fd91mshaa4a3f6ce8786bcp1eab4ajsn6faed96b3c69',
               // 'X-RapidAPI-Host': 'google-search3.p.rapidapi.com'
            }
        });
        const data = await response.json();
        console.log(data);
        setResults(data);
        setLoading(false);

       
    }

    return (
        <ResultContext.Provider value={{getResults, results, searchTerm, setSearchTerm, loading }}>
            {children}
        </ResultContext.Provider>
    );
}

export const useResultContext = () => useContext(ResultContext);
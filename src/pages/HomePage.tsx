import { FC, useEffect, useState } from 'react';
import { getSymbolData } from '../api/SymbolApi';
import { ISymbol } from '../types/SymbolType';
import SymbolResultInfo from '../components/SymbolResultInfo';

const HomePage: FC = () => {
    const [symbolData, setSymbolData] = useState<ISymbol | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [symbolName, setSymbolName] = useState<string>('');
    //const symbolName = 'aapl';

    const fetchSymbolData = async () => {
        setIsLoading(true);

        try {
            const data = await getSymbolData(symbolName);
            if (data) {
                setSymbolData(data);
                setErrorMessage(null);
            } else {
                setErrorMessage(`Symbol "${symbolName}" not found.`);
            }
        } catch (error) {
            setErrorMessage('Failed to fetch symbol data.');
        }
        setIsLoading(false);

    };

    const changeSymbolNameHandler = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        setSymbolName(e.target.value);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
          searchSymbolHandler();
        }
      };

    const searchSymbolHandler = () => {
        setSymbolData(null);
        fetchSymbolData();
    };
    // useEffect(() => {
    //     fetchSymbolData();
    // }, [symbolName]);

    return (
        <div className='p-10'>
            <input
                value={symbolName}
                onChange={changeSymbolNameHandler}
                onKeyDown={handleKeyDown}
                className='border border-black mb-3 outline-none p-1'
            />
            <button
                onClick={searchSymbolHandler}
                className='border border-black mb-3 p-1'
            >
                Search
            </button>
            {errorMessage ? (
                <p style={{ color: 'red' }}>{errorMessage}</p>
            ) : symbolData ? (
                <SymbolResultInfo symbol={symbolData} />
            ) : isLoading ? (
                <p>Loading...</p>
            ) : (
                <></>
            )}
        </div>
    );
};

export default HomePage;

import { FC, useState } from 'react';
import { getSymbolData } from '../api/SymbolApi';
//import { ISymbol } from '../types/SymbolType';
import SymbolResultInfo from '../components/SymbolResultInfo';
import Loading from '../components/Loading';

const HomePage: FC = () => {
    const [symbolData, setSymbolData] = useState<string | null>(null);
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
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
        <div className='bg-gray-100 h-full min-h-screen'>
            <header className='flex py-5 px-8 shadow-sm bg-white space-x-28 '>
                <span className='text-2xl text-gray-900 font-bold'>
                    Dashboard
                </span>
                <div className='relative w-96'>
                    <input
                        value={symbolName}
                        onChange={changeSymbolNameHandler}
                        onKeyDown={handleKeyDown}
                        type='text'
                        placeholder='Enter ticker symbol (e.g., AAPL, MSFT)'
                        className='outline-none w-full pl-4 pr-12 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500'
                    />
                    <button
                        onClick={searchSymbolHandler}
                        className='absolute right-2 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-indigo-600'
                    >
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth={1.5}
                            stroke='currentColor'
                            className='size-6'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z'
                            />
                        </svg>
                    </button>
                </div>
            </header>
            <main className='px-4 sm:px-6 lg:px-8 py-8'>
                {errorMessage ? (
                <p className='text-red-500'>{errorMessage}</p>
            ) : symbolData ? (
                <SymbolResultInfo text={symbolData} />
            ) : isLoading ? (
                <Loading />
            ) : (
                <></>
            )}
            </main>
        </div>
    );
};

export default HomePage;

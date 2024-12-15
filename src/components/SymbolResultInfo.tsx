import React, { FC } from 'react';
import { ISymbol } from '../types/SymbolType';

interface SymbolResultInfoProps {
    symbol: ISymbol;
}

const SymbolResultInfo: FC<SymbolResultInfoProps> = ({ symbol }) => {
    const date = new Date(symbol.data.timestamp);
    const currentTime = date.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' });

    const timePlus15 = new Date(date);
    timePlus15.setMinutes(timePlus15.getMinutes() + 15);
    const timePlus15Str = timePlus15.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' });
    
    const timeMinus15 = new Date(date);
    timeMinus15.setMinutes(timeMinus15.getMinutes() - 15);
    const timeMinus15Str = timeMinus15.toLocaleTimeString('ru-RU', { hour: '2-digit', minute:'2-digit' });
    return (
        <div className='border border-black  p-3 '>
            <div className='w-full flex justify-between'>
                <div className='underline underline-offset-1 text-xl font-semibold'>
                    15-min time frame
                </div>
                <div className='bg-cyan-800 text-center text-base text-white -m-3 px-3 border border-black'>
                    Trading Style: Play <br /> Safe
                </div>
            </div>
            <div className='mt-5'>
                <div className='text-sm font-bold'>Pre-Market Comment</div>
                <div className='text-xl font-medium -mt-1'>
                    Price-action 80% of the time below VWAP, 80% of the time not
                    closing above 9EMA, strong 15-min 9EMA reaction{' '}
                </div>
            </div>

            <table className='table-auto w-full mt-5'>
                <thead>
                    <tr>
                        <th>Open</th>
                        <th>Close</th>
                        <th>Status</th>
                        <th>Candle</th>
                        <th>Body</th>
                        <th>Wick(longer wick)</th>
                        <th>EMA at closing</th>
                        <th>VWAP</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='text-center text-xl'>
                        <td>{timeMinus15Str}</td>
                        <td>{currentTime}</td>
                        <td>Closed</td>
                        <td>Hammer Candle</td>
                        <td>Body 30%</td>
                        <td>60%</td>
                        <td>Below</td>
                        <td>VWAP Level</td>
                    </tr>
                </tbody>
            </table>

            <div className='mt-5 text-xl font-bold'>
                Live Commentatory: Strong Sell-off, Buyers present below EMA
            </div>
            <div className='flex gap-3 text-xl mt-5'>
                <div>{currentTime}</div>
                <div>{timePlus15Str}</div>
                <div>Ongoing</div>
            </div>

            <ul className='text-sky-500 text-xl list-disc list-inside mt-5'>
                <span className='font-bold'>&#8594; Confluence until {currentTime}</span>
                <li>Pullback</li>
                <li>9EMA touch</li>
                <li>Pre-Market Low touch</li>
            </ul>

            {/* <h2>Symbol: {symbol.symbol}</h2>
            <p>Timestamp: {symbol.data.timestamp}</p>
            <p>Open: {symbol.data.open}</p>
            <p>High: {symbol.data.high}</p>
            <p>Low: {symbol.data.low}</p>
            <p>Close: {symbol.data.close}</p>
            <p>Volume: {symbol.data.volume}</p> */}
        </div>
    );
};

export default SymbolResultInfo;

import {createContext, useEffect, useState} from 'react'
import { DateTime, diff } from 'luxon';
import { createNewLog } from '../components/api/logs';

const LogContext = createContext();

function LogContextProvider({children}) {
    ///?????
    const [log, setLog] = useState({});

    const createLog = ({timeStart, timeEnd, category, day}) => {
        
        const timeSpan = timeEnd.diff(timeStart).toObject()
        const value = {
            timeStart,
            timeEnd,
            category,
            timeSpan: timeSpan.milliseconds,
            day
        }
        createNewLog(value)
    }



    return (
        <LogContext.Provider value={{log, createLog}}>{children} </LogContext.Provider>
    )

}

export { LogContext, LogContextProvider };

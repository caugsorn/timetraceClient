import {createContext, useEffect, useState} from 'react'
import { DateTime, diff } from 'luxon';
import { createNewLog } from '../components/api/logs';

const LogContext = createContext();

function LogContextProvider({children}) {
    ///?????
    const [log, setLog] = useState({});

    const createLog = ({timeStart, timeEnd, category, day}) => {
        if (timeStart.isLuxonDateTime && timeEnd.isLuxonDateTime) {
        const timeSpan = timeStart.diff(timeEnd, 'milliseconds').toObject()
        const value = {
            timeStart,
            timeEnd,
            category,
            timeSpan: timeSpan.seconds,
            day
        }
        // console.log(category)
        // console.log(timeEnd.toISO())
        // console.log(timeStart.toISO())
        // console.log(timeSpan)
        // createNewLog(value)
        }

       
    }



    return (
        <LogContext.Provider value={{log, createLog}}>{children} </LogContext.Provider>
    )

}

export { LogContext, LogContextProvider };

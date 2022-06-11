import {createContext, useEffect, useState} from 'react'
import { DateTime } from 'luxon';
import { createNewLog } from '../components/api/logs';

const LogContext = createContext();

function LogContextProvider({children}) {
    ///?????
    const [log, setLog] = useState({});

    const createLog = ({timeStart, category, day, time}) => {
        const timeEnd = timeStart.plus({seconds: '222312'}) 

        // const timeSpan = timeStart.diff(timeEnd, 'seconds').toObject()
        const value = {
            timeStart,
            timeEnd,
            category,
            timeSpan: time,
            day
        }
        // console.log(category)
        console.log(time)
        console.log(timeStart)
        console.log(timeEnd)
        // console.log(timeSpan)
        // console.log(timeEnd.diff(timeStart, 'seconds').toObject())
        // createNewLog(value)
        

       
    }



    return (
        <LogContext.Provider value={{log, createLog}}>{children} </LogContext.Provider>
    )

}

export { LogContext, LogContextProvider };

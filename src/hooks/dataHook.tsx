
import { useState, useEffect ,useContext, ReactNode ,createContext } from "react"
import api from "../services/api"

interface DataContextProps {
    children?: ReactNode
}

export interface Data {
    id: number,
    name: string,
    username: string,
    address: {
    city: string
    }
}


interface UseContextData {
    data: Data[],
}

const DataContext = createContext<UseContextData>({} as UseContextData)

export const DataProvider: React.FC = ({children}: DataContextProps) => {

    const [data, setData] = useState<Data[]>([])

    useEffect(() => {
        api.get<Data[]>('https://jsonplaceholder.typicode.com/users')
        .then(response => setData(response.data))
    }, [])

    return (
        <DataContext.Provider value={{data}}>
            {children}
        </DataContext.Provider>
    )
}

export function useProvider() {
    const context = useContext(DataContext)

    return context
}
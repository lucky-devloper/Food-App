import React, { createContext, useEffect, useState } from 'react'

export const DataContext = createContext()
export const BASE_URL = 'http://localhost:9000'
function DataProvider({ children }) {
    const [foodtype, setfoodtype] = useState('')
    const [searchFood, setsearchFood] = useState('')
    const [Data, setData] = useState([])

    const fetchFoodData = async () => {
        const response = await fetch(BASE_URL)
        const ApiData = await response.json()
        setData(ApiData)
    }

    useEffect(() => {
        fetchFoodData()
    }, [])

    return (
        <DataContext.Provider value={{ Data, foodtype, setfoodtype, searchFood, setsearchFood }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider
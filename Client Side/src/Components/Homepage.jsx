import React, { useContext, useState, useEffect } from 'react'
import Card from './Card'
import { DataContext } from '../Context/DataProvider'
function Homepage() {
    const { Data, foodtype, searchFood } = useContext(DataContext)
    const [selectedFoodtype, setselectedFoodtype] = useState('All')
    const [searchItem, setsearchItem] = useState(   )

    useEffect(() => {
        if (foodtype) {
            setselectedFoodtype(foodtype);
        }
        if (searchFood) {
            setsearchItem(searchFood)
        } else {
            setsearchItem(null)
        }
    }, [foodtype, searchFood]);


    const getDataFromApi = () => {
        if (searchItem) {
            const searchData = Data.filter((item) => item.name.toLowerCase().includes(searchItem.toLowerCase()))
            return searchData;
        } else {
            return selectedFoodtype === 'All' ? Data : Data.filter((item) => item.type === selectedFoodtype)
        }
    }

    return (
        <div className="w-[100%] bg-[url('bg.png')] bg-cover bg-center h-[78vh] flex justify-center py-14">
            <div className='card-container max-h-[600px] grid grid-cols-3 gap-5 p-6 overflow-auto'>
                {getDataFromApi().map((item, index) => {
                    return <div key={index} className='w-full'>
                        <Card data={item} />
                    </div>
                })}
            </div>
        </div>

    )
}

export default Homepage
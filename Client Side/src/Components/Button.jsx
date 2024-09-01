import React, { useContext, useState } from 'react'
import { DataContext } from '../Context/DataProvider'

function Button({ name, mealType }) {
    const { setfoodtype } = useContext(DataContext)
    const getMeal = (e) => {
        const foodType = e.target.id
        setfoodtype(foodType)
    }
    return (
        <>
            <button onClick={(e) => getMeal(e)} id={mealType} className={`bg-red-500 px-3 py-1 rounded-md active:text-gray-600`}>{name}</button>
        </>
    )
}

export default Button
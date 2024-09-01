import React, { useContext } from 'react'
import Button from './Button'
import { DataContext } from '../Context/DataProvider'

function Header() {
    const { Data, searchFood, setsearchFood } = useContext(DataContext)

    let btnName = Data.map((item) => {
        return item.type
    })


    return (
        <div className='w-[100%] h-[200px] bg-[#323335] flex'>
            <div className='w-[50%] h-[100%] flex flex-col justify-center items-center px-4'>
                <img src="Foody Zone.png" alt="" className='w-[250px]' />
                <div className='w-[100%] mt-10 flex gap-5 justify-end'>
                    <Button name={"All"} mealType={"All"} />
                    <Button name={btnName[0]} mealType={btnName[0]} />
                </div>
            </div>
            <div className='w-[50%] h-[100%] flex flex-col justify-center items-center'>
                <input type="text" placeholder='search Food' value={searchFood} onChange={(e) => setsearchFood(e.target.value)} className='w-[300px] py-2 px-2 rounded-md border-2 border-red-500 bg-transparent outline-none' />
                <div className='w-[100%] mt-10 flex gap-5 justify-start'>
                    <Button name={btnName[1]} mealType={btnName[1]} />
                    <Button name={btnName[2]} mealType={btnName[2]} />
                </div>
            </div>
        </div>
    )
}

export default Header
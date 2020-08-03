import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['Malcolm']);
    // const handleAdd = () => {
    //     // setCategories([...categories, 'otro']);
    //     setCategories(cats => [...cats, 'otro']);
    // };
    return (
        <>
           <h2>GifExpertApp</h2> 
           <AddCategory setCategories={setCategories}/>
           <hr/>
           {/* <button onClick={handleAdd}>Agregar</button> */}
           <ol>
                {
                    categories.map((category) => (
                        <GifGrid
                            key={category}
                            category={category}
                        />
                    ))
                }
           </ol>
        </>
    )
}

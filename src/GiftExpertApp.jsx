import { useState } from "react";
import {AddCategory, GifGrid} from "./components";
import _ from "lodash";



const GiftExpertApp = () => {


    const [categories, setCategories] = useState(['Kimetsu']);

    const handleNewCategory = (newCategory) => {

        const newCat = _.capitalize(newCategory);

        if (categories.includes(newCat)) return;

        setCategories([newCat, ...categories]);
    };



    return (<>
        {/* Titulo */}
        <h1>GiftExpertApp</h1>


        {/* Input */}
        <AddCategory onNewCategory={handleNewCategory} />



        {categories.map(
            (category) => <GifGrid key={category} category={category} />
        )}


    </>)


}


export default GiftExpertApp;
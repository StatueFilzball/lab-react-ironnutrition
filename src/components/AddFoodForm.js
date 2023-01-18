import { useState } from "react";
import 'antd/dist/reset.css';
import { Input } from 'antd';


// import foods from '../foods.json';

function AddFoodForm(props){

    const { foods, setFoods } = props;

    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [calories, setCalories] = useState(0);
    const [servings, setServings] = useState(0);

    const handleSubmit = (event) => {
       event.preventDefault() // prevent the form from reloading the page   
        const _id = `${Math.random()}`

        const newFood = { _id, name, image, calories, servings}

        const updateFoodsCopy = [...foods, newFood]

        setFoods(updateFoodsCopy)
        
        setName("");
        setImage("")
        setCalories(0);
        setServings(0)
    }

    return(
        <div>
            <h2>Add Food Form</h2>

            <form onSubmit={handleSubmit}>
                <Input type="text" name="name" value={name} onChange={(event) => setName(event.target.value)} placeholder="Enter food name" />
                <br/>
                <Input type="text" name="image" value={image} onChange={(event) => setImage(event.target.value)} placeholder="Enter image link" />
                <br/>
                <Input type="number" name="calories" value={calories} onChange={(event)=> setCalories(event.target.value)} placeholder="Enter calories"/>
                <br/>
                <Input type="number" name="servings" value={servings} onChange={(event) => setServings(event.target.value)} placeholder="Enter servings amount"/>
                <br/>
                <button type="submit">Create Food</button>
            </form>
        </div>
    )
}


export default AddFoodForm
import { useState } from 'react';
import './App.css';
import foodsJSON from './foods.json';
import FoodBox from "./components/Foodbox"
import AddFoodForm from "./components/AddFoodForm"
import Search from './components/Search';

function App() {
const [foods, setFoods] = useState(foodsJSON)

const deleteFood = (name) => {
  const removedFoodList = foods.filter(food => food.name !== name);
  setFoods(removedFoodList);
}

const searchFood = (e) => {
  const searchResult = foods.filter(food => food.name.toLowerCase().includes(e.target.value.toLowerCase()));
  setFoods(searchResult);
}
  


  return <div className="App">

<AddFoodForm foods={foods} setFoods={setFoods} />
<Search searchFood={searchFood}/>
{foods.map( food => {
  return (<FoodBox key={food._id} deleteFood={deleteFood} food={food} />)
})}



  </div>;
}
export default App;
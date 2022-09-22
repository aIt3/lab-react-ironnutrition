import { useState } from "react";
import { Divider, Input } from 'antd';


function AddFoodForm(props) {
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [calories, setCalories] = useState("");
    const [servings, setServings] = useState("");

    const handleNameInput = e => setName(e.target.value)
    const handlImageInput = e => setImage(e.target.value)
    const handleCaloriesInput = e => setCalories(e.target.value)
    const handleServingsInput = e => setServings(e.target.value)

    const handleSubmit = (event) => {
        event.preventDefault();

        const newFood = {name, image, calories, servings}
        props.updateFood((prevFoods) => {
            return [newFood, ...prevFoods]
        })
    }

    

return (
    <div>
    <form onSubmit={handleSubmit}>
    <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input value={props.foods.name} type="text" onChange={handleNameInput} />

      <label>Image</label>
      <Input value={props.foods.image} type="text" onChange={handlImageInput} />

      <label>Calories</label>
      <Input value={props.foods.calories} type="number" onChange={handleCaloriesInput} />

      <label>Servings</label>
      <Input value={props.foods.servings} type="number" onChange={handleServingsInput} />

      <button type="{handleSubmit}">Create</button>
    </form>
    </div>

)

}

export default AddFoodForm
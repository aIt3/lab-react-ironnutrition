import './App.css';
import foods from './foods.json';
import { useState } from "react"
import Foodbox from './components/Foodbox/Foodbox';
import AddFoodForm from './components/Foodbox/AddFoodForm/AddFoodForm'
import Search from './components/Search/Search'
import { Row, Divider, Button } from 'antd';


function App() {
  // save food.json in state variable 
  const [foodState, setFoodState] = useState(foods) 
  const [searchFood, setSearchFood] =useState(foods)

  const filterFood = (search) => {   
    if (search === ''){
      setFoodState(searchFood)
    }else{
      const searchedFoods = foodState.filter(food => food.name.toLowerCase().includes(search.toLowerCase()))
      setFoodState(searchedFoods)
    }

  }
  const deleteFood = (name) => {
    const foodListCopy = [...foodState]
    const updatedFoodList = foodListCopy.filter(food => food.name !== name)
    setFoodState(updatedFoodList)

  }


  return (
    <div className="App">
      <Search searchResults={filterFood}/>
          <AddFoodForm foods={foodState} updateFood={setFoodState}/>
      <Row style={{ width: '100%', justifyContent: 'center' }}>
  {foodState.map ((foods) =>  { 
    return (
          <Foodbox foods={foods} delete={deleteFood} />
    )
    })}
</Row>
    </div>
  );
}

export default App;

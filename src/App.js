import React,{useEffect,useState} from 'react';
import './App.css';
import Recipe from "./Recipe";

const App = () =>{

  var API_ID = "c6798e68";
  var API_KEY = "cbb865d4e43a1640eab07cc8356d7c53";


  const [recipes,setRecipes] = useState([]);
  const [search,setSearch] = useState("");
  const [query,setQuery] = useState('chicken');

  useEffect(()=>{
    getRecipes();
    // eslint-disable-next-line
  },[query]);




  var URL = `https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`;
  const getRecipes = async () => {
    var response = await fetch(URL);
    var data = await response.json();
    console.log(data.hits);
    setRecipes(data.hits);
  }

const updateSearch = e => {
  setSearch(e.target.value);
}

const getSearch = e =>{
  e.preventDefault();
  setQuery(search);
  setSearch("");
}
  

  return(
    <div className = "App" >
      <h3 className="App-h3" ><em>Search Recipes of your Favourite Food Item.</em></h3>
      <form onSubmit={getSearch} className="search-form" >
        <input className = "search-bar" type="text" value={search} onChange={updateSearch} placeholder="Search Food Item" />
        <button 
        className="search-button"
         type = "submit" >
           Search
        </button>
      </form>
    <div className = "Recipes" >
      {recipes.map(recipe=>(
        <Recipe 
          key = {recipe.recipe.totalWeight}
          title= {recipe.recipe.label}
          calories = {recipe.recipe.calories}
          image= {recipe.recipe.image}
          ingredients = {recipe.recipe.ingredients}
        />
      ))}
    </div>
    </div>
  )
}

export default App;

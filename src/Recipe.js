import React  from "react";
import './Recipe.css'

var Recipe = ({title,calories,image,ingredients}) =>{
    return(
        <div className="recipe grow shadow-4" >
            <h1 className="recipe-header" >{title}</h1>
            <ol>
                {ingredients.map(ingredient =>(
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <div className="Calories" >
                <span>Calories:-   </span>
                <p>{calories}</p>
            </div>
            <div className="contain-recipe-image" >
                <img className="recipe-image" src={image} alt="image" />
            </div>
        </div>
    );  
}


export default Recipe;
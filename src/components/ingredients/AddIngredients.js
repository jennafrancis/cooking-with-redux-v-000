import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ConnectedAddIngredient } from './AddIngredient';
import { unselectedIngredients, findIngredientById } from '../../reducers/ingredients';

export class AddIngredients extends Component {
  handleOnSubmit(event) {
    event.preventDefault()
  }

  render(){
    let ingredients = this.props.selectedIngredients && this.props.selectedIngredients.map((ingredient) => {
      return <li>{ingredient.name}</li>
    });

    let addIngredients = this.props.unselectedIngredients && this.props.unselectedIngredients.map((ingredient) => {
      return <ConnectedAddIngredient {...ingredient} />
    });

    return(
      <div>
        <div>
          Ingredients
          {ingredients}
        </div>
        <div>
          Add Ingredients
          {addIngredients}
        </div>
      </div>
    )
  }
}

export const ConnectedAddIngredients =  connect(mapStateToProps)(AddIngredients)

function mapStateToProps(state) {
  let selectedIngredients = state.recipeForm.ingredientIds.map(function(ingredientId){
    return findIngredientById(ingredientId, state.ingredients)
  })

  return {ingredients: state.ingredients || [],
    selectedIngredients: selectedIngredients || [], unselectedIngredients: unselectedIngredients(state.ingredients, state.recipeForm.ingredientIds) || []}
}

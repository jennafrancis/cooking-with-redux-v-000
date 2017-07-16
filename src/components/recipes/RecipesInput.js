import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addRecipe } from '../../actions/recipes';
import { AddIngredients } from '../ingredients/AddIngredients';


export class RecipesInput extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      calories: '',
    }
  }

  handleOnChangeName(event) {
    this.setState({name: event.target.value})
  }

  handleOnChangeCalories(event) {
    this.setState({calories: event.target.value})
  }

  handleOnSubmit(event) {
    event.preventDefault()
    let recipe = Object.assign({}, this.state, {ingredientIds: this.props.selectedIngredients})
    this.props.addRecipe(recipe)
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleOnSubmit.bind(this)}>
          <input type="text" onChange={this.handleOnChangeName.bind(this)} placeholder="name" />
          <AddIngredients />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export const ConnectedRecipesInput = connect(mapStateToProps, mapDispatchToProps)(RecipesInput)

function mapDispatchToProps(dispatch) {
  return bindActionCreators({addRecipe: addRecipe}, dispatch)
}

function mapStateToProps(state) {
  return { selectedIngredients: state.recipeForm.ingredientIds }
}

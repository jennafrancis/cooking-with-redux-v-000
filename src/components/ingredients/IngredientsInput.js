import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createIngredient } from '../../actions/ingredients';

export class IngredientsInput extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      calories: '',
    }
  }

  handleOnChangeIngredient(event) {
    this.setState({name: event.target.value})
  }

  handleOnChangeCalories(event) {
    this.setState({calories: event.target.value})
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.createIngredient(this.state)
  }

render(){
    return(
      <div>
        <form onSubmit={this.handleOnSubmit.bind(this)}>
          <label>Ingredient Name</label>
          <input type="text" onChange={this.handleOnChangeIngredient.bind(this)} />
          <label>Calories</label>
          <input type="text" onChange={this.handleOnChangeCalories.bind(this)} />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export const ConnectedIngredientsInput = connect(null, mapDispatchToProps)(IngredientsInput)

function mapDispatchToProps(dispatch){
  return bindActionCreators({createIngredient: createIngredient}, dispatch)
}

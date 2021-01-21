import React, { Component } from 'react';
import RecepieRow from './recipeRow';

class RecipeCollection extends Component {

    constructor (props) {
		super(props);
		this.state = {
			recipes: []
		}
	}

    componentDidMount () {
		this.getRecipes();
    }

    getRecipes() {
		fetch('/api/recipe/all').then(resp => resp.json()).then(recipes => this.setState({recipes}))
	}

	renderRecipes () {
		return this.state.recipes.map((recipes, index) => {
            return (
                <RecepieRow id={recipes.recipeid} key={index} author={recipes.recipeauthor} name={recipes.recipename} />
            );
		});
	}


	render() {
		return (
            <div className="container">
					<div className="row">
						<div className="col">
							{this.renderRecipes()}
						</div>
					</div>
				</div>
        );
    }
}

export default RecipeCollection;
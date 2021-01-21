import React, { Component } from 'react';
import Footer from '../staticComponents/footer';
import RecipeCollection from '../subComponents/recipeCollection';

class Recipes extends Component {

	render() {
		return (
			<div>
				<RecipeCollection/>
				<Footer/>
			</div>
		)
	}
}

export default Recipes;
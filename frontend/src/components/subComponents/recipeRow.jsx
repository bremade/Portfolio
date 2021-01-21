import React, { Component } from 'react';

class RecipeRow extends Component {

    constructor (props) {
		super(props);
    }

	render() {
		return (
            <div className="container card p-3 mb-2 mt-2">
                <div className="row">
                    <div className="col-md-1">
                        <h1>{this.props.id}</h1>
                    </div>
                    <div className="col-md-4">
                        <h1>{this.props.name}</h1>
                    </div>
                    <div className="col-md-5">
                        <h1>{this.props.author}</h1>
                    </div>
                    <div className="col-md-2">
                        { /** Idee für den Platz? */}
                    </div>
                </div>
            </div>
        );
    }
}

export default RecipeRow;

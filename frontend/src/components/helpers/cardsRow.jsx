import React, { Component } from 'react';
import { Card, CardContent, Divider, Typography, Grid } from '@material-ui/core';

class CardsRow extends Component {

    constructor (props) {
		super(props);
    }

    getCardColor() {
        if (this.props.useFlag) {
            return {
                width: 250,
                height: 300,
                backgroundColor: "#f44336"
            }
        } else {
            return {
                width: 250,
                height: 300,
                backgroundColor: "#f0f0f0"
            }
        }
    }

	render() {
		return (
            <Grid item style={{marginRight: '10px', marginBottom: '10px'}}>
                <Card style={this.getCardColor()}>
                    <CardContent>
                            {this.props.flag}
                            <Typography style={{fontSize: '29px'}}>
                                {this.props.header}
                            </Typography>
                            <Divider style={{marginBottom: '10px'}}/>
                            <Typography style={{fontSize: '17px'}}>
                                {this.props.text}
                            </Typography>
                    </CardContent>
                </Card>
            </Grid>
        );
    }
}

export default CardsRow;

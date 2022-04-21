import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, Divider, Typography, Grid } from '@mui/material';

class CardsRow extends Component {
  constructor(props) {
    super(props);
  }

  static get propTypes() {
    return {
      useFlag: PropTypes.bool,
      flag: PropTypes.bool,
      header: PropTypes.string,
      text: PropTypes.string,
    };
  }

  getCardColor() {
    const { useFlag } = this.props;
    if (useFlag) {
      return {
        width: 250,
        height: 300,
        backgroundColor: '#f44336',
      };
    }
    return {
      width: 250,
      height: 300,
      backgroundColor: '#f0f0f0',
    };
  }

  render() {
    const { flag, header, text } = this.props;
    return (
      <Grid item style={{ marginRight: '10px', marginBottom: '10px' }}>
        <Card style={this.getCardColor()}>
          <CardContent>
            {flag}
            <Typography style={{ fontSize: '29px' }}>{header}</Typography>
            <Divider style={{ marginBottom: '10px' }} />
            <Typography style={{ fontSize: '17px' }}>{text}</Typography>
          </CardContent>
        </Card>
      </Grid>
    );
  }
}

export default CardsRow;

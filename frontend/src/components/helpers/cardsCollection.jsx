import React, { Component } from 'react';
import { Button, Grid, TextField } from '@mui/material';
import Toast from 'light-toast';
import CardsRow from './cardsRow.jsx';

const h = window.innerHeight / 4;

const gridStyle = {
  marginTop: `${h}px`,
};

const gridBottom = {
  marginBottom: '50px',
};

class CardsCollection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      unusedCards: [],
      userCards: [],
      currentUser: '',
      tmpUser: '',
    };
    this.setUsername = this.setUsername.bind(this);
    this.resetGame = this.resetGame.bind(this);
    this.drawRandomCard = this.drawRandomCard.bind(this);
    this.textFieldChange = this.textFieldChange.bind(this);
  }

  componentDidMount() {
    this.getUnusedCards();
    this.getUserCards();
  }

  callback() {
    console.log('sleep...');
  }

  getUnusedCards() {
    fetch('/api/cards/unused')
      .then((resp) => resp.json())
      .then((unusedCards) => this.setState({ unusedCards }));
  }

  getUserCards() {
    if (this.state.currentUser === '') {
      Toast.info('Please enter a username.', 500);
      console.log('No username entered.');
      return;
    }
    fetch(`/api/cards/id/${this.state.currentUser}`)
      .then((resp) => resp.json())
      .then((userCards) => this.setState({ userCards }));
  }

  drawRandomCard() {
    this.getUnusedCards();
    const len = this.state.unusedCards.length;
    if (len === 0) {
      Toast.info('Cards are all distributed.', 500);
      console.log('Cards are all distributed.');
      return;
    }
    const randIndex = Math.floor(Math.random() * len);
    const card = this.state.unusedCards[randIndex];
    const data = {
      username: this.state.currentUser,
      id: card.id,
    };
    fetch('/api/cards/claimCard', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).catch((error) => {
      console.error('Error:', error);
    });
    this.getUserCards();
    this.forceUpdate();
  }

  resetGame() {
    console.log('Game Reset!');
    fetch('/api/cards/resetGame').then((resp) => {
      if (!resp.ok) {
        throw new Error('Something went wrong');
      }
    });
    this.getUserCards();
    this.forceUpdate();
  }

  renderCards() {
    if (!Array.isArray(this.state.userCards)) {
      return <div>Der User hat noch keine Karten gezogen.</div>;
    }
    return this.state.userCards.map((card) => (
      <div key={card.id}>
        <CardsRow
          header={card.contentjson.Header}
          text={card.contentjson.Text}
          flag={card.contentjson.Flag}
          useFlag={card.useflag}
        />
      </div>
    ));
  }

  setUsername() {
    this.setState({
      currentUser: this.state.tmpUser,
    });
    this.getUserCards();
    this.forceUpdate();
  }

  textFieldChange(e) {
    this.setState({
      tmpUser: e.target.value,
    });
  }

  render() {
    const currentUser = `Current User: ${this.state.currentUser}`;
    return (
      <Grid
        container
        direction='column'
        justifyContent='center'
        alignItems='center'
        spacing={2}
        style={gridStyle}
      >
        <Grid item style={gridBottom}>
          <Grid
            container
            direction='row'
            justifyContent='center'
            alignItems='center'
          >
            {this.renderCards()}
          </Grid>
        </Grid>
        <Grid item>
          <Button variant='contained' onClick={this.drawRandomCard}>
            Draw Card
          </Button>
          <Button
            variant='contained'
            onClick={() => {
              this.setState({
                currentUser: this.state.tmpUser,
              });
              this.getUserCards();
              this.forceUpdate();
            }}
            style={{ marginLeft: '20px' }}
          >
            Reload Cards
          </Button>
        </Grid>
        <Grid item>
          <TextField
            label={currentUser}
            id='outlined-size-small'
            variant='outlined'
            size='small'
            onChange={this.textFieldChange}
          />
          <Button variant='contained' onClick={this.setUsername}>
            Set Username
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant='contained'
            color='secondary'
            onClick={() => {
              if (window.confirm('Reset game?')) {
                this.resetGame();
              }
            }}
          >
            Reset Game
          </Button>
          <Button
            variant='contained'
            onClick={() => window.location.reload(true)}
            style={{ marginLeft: '20px' }}
          >
            Reload
          </Button>
        </Grid>
      </Grid>
    );
  }
}

export default CardsCollection;

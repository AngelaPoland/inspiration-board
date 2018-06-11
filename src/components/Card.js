import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {

  displayEmoji = () => {
    if (this.props.emoji) {
      return emoji.getUnicode(this.props.emoji)
    }
  };

  render() {
    console.log('Rendering a card')
    return (
      <div className="card">
        <div className="card__content">
          <p className="card__content-text">{this.props.text}</p>
          <p className="card__content-emoji">{this.displayEmoji()}</p>
        </div>
      </div>
    )
  }
}

Card.propTypes = {
  text: PropTypes.string.isRequired,
  emoji: PropTypes.string,
};

export default Card;

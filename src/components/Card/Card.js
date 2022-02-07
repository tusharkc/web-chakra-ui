import React from 'react';
import { cardData } from './cardData';
import CardItem from './CardItem';

function Card() {
  return (
    <>
      {cardData.map(cardItem => {
        return (
          <CardItem
            name={cardItem.name}
            timeAmt={cardItem.timeAmt}
            timeNotation={cardItem.timeNotation}
            avatarSrc={cardItem.avatarSrc}
            content={cardItem.content}
          />
        );
      })}
    </>
  );
}

export default Card;

import React, { FC } from 'react';
import styles from './index.module.css';
import Info from './Info';
import Sliders from './Sliders';

interface ICard {
  name: string;
  image: string[];
  title: string;
  technology: string[];
  repo: string;
  demo?: string;
}

interface Props {
  card: ICard;
}

const Card: FC<Props> = ({ card }) => {
  return (
    <div className={styles.card}>
      <Sliders>
        {card.image.map((item) => {
          return <img key={item} src={item} alt={item}></img>;
        })}
      </Sliders>
      <Info card={card} />
    </div>
  );
};

export default Card;

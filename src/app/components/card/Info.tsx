import React, { FC, useState } from 'react';
import styles from './index.module.css';
import Links from '../body/Links';
import Technology from '../body/Technology';

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

const Info: FC<Props> = ({ card }) => {
  return (
    <div className={styles.blockInfo}>
      <div className={styles.nameProject}>
        <h2>{card.name}</h2>
      </div>
      <div className={styles.titleProject}>
        <p>{card.title}</p>
      </div>
      <div className={styles.technologyFlex}>
        {card.technology.map((item) => {
          return <Technology key={item} item={item} />;
        })}
      </div>
      <Links card={card} />
    </div>
  );
};

export default Info;

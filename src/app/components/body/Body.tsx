import React, { FC } from 'react';
import Card from '../card/Card';
import styles from './index.module.css';
import { cards } from '../../api/cards';

const Body: FC = () => {
  return (
    <div className={styles.body}>
      <h2 className={styles.h2}>Мои работы</h2>
      {cards.map((item) => {
        return <Card key={item.name} card={item} />;
      })}
    </div>
  );
};

export default Body;

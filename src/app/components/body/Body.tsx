import React, { FC } from 'react';
import Card from './Card';
import styles from './index.module.css';

const Body: FC = () => {
  return (
    <div className={styles.body}>
      <h2 className={styles.h2}>Мои работы</h2>
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default Body;
